<template>
	<!-- 登入页面 -->
	<div class="login_contain">
		<!-- 登入外框 -->
		
		<div class="login_box">
			<div class="login_box_in">
			<!-- 头像 -->
				<div class="demo-fit avater">			    
				    <el-avatar shape="circle" :size="100" :fit="'contain'" :src="url"></el-avatar>			   
				</div>
				<!-- 登入表单 -->
				<el-form  ref="forms" :rules="rules" :model="form" class="login_form" >
					<el-form-item  prop='usename'>
					  	<el-input v-model="form.usename" placeholder="用户名" style="height: 50px;"></el-input>
					</el-form-item>
					<el-form-item  prop='password'>
					  	<el-input v-model="form.password" placeholder="密码" type='password' style="height: 50px;"></el-input>
					</el-form-item>
					<el-form-item>
					    <el-button type="primary" @click="onSubmit" style="width: 20%;">登录</el-button>
					    <el-button type='info' @click="cleardata" style="width: 20%;">重置</el-button>
				  	</el-form-item>
				</el-form>
				<div class="return_home">
					<a href="/home">返回首页</a>
				</div>
			</div>
		</div> 
	
	</div>
</template>

<script>

  export default {
  	
    data() {
      return {

        form: {
          usename: '',
          password: '',
        },
        url: require('../assets/images/baisehai.jpg'),
        // 校验
        rules:{
        	usename:[
	        	{ required: true, message: '请输入用户名', trigger: 'blur' },//必填验证
	            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        	],
        	password:[
        		{ required: true, message: '请输入密码', trigger: 'blur' },//必填验证	
        		{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        	],
        }
      }
    },
    methods: {
      onSubmit() {
          this.$refs.forms.validate(async valid => {
          if (!valid) return;
            const  {data:res}= await this.$http.post('login',this.form);
           // console.log(res);
          if(res.flag == 'ok'){
          	this.$message.success('登陆成功！！！');
          	this.$router.push({path:'/home'});//路由切换，页面跳转
          	//window.sessionStorage.setItem("user",res.user);//存储对象
          	//token保存到sessionstorage
          	window.sessionStorage.setItem('token',res.token);
          } else{
          	this.$message.error('登陆失败！！！')
          }
        });

      },
      cleardata(){
      	this.$refs.forms.resetFields();
      },
    }
  }
</script>

<style  scoped>
.login_contain {
	width: 100vw;
	height: 100vh;
	background: url('../assets/images/xiaoyuan.jpg') center no-repeat;
	background-size: cover;	

}
.login_box{
	width: 45%;
	
	height: 100%;
	float: right;
	overflow: hidden;
	/*background-color: #fff;*/
	background:rgba(80,80,80,0.3);
	
	
}
.login_box_in{
	width: 70%;
	background-color: #eceff1;
	margin-top: 20%;
	margin-left: auto;
	margin-right: auto;
	
}
.avater{
	display: block;
	padding-top: 40px;
	padding-bottom: 40px;
}
.login_form{
	padding-right: 60px;
	padding-left: 60px;
}
.return_home{
	display: block;
	padding-bottom: 40px;
}
.return_home a{
	text-decoration: none;
	color: #424242;
	opacity: 80%;
}
.return_home a:hover{
	color:#4294e7;
}
@media screen and (max-width: 1100px){
.login_box{
	width: 100%;
}

}
@media screen and (max-width: 600px){
.login_box_in{
	width: 90%;
}
}
</style>

