<template>
	<div style="width: 300px;">
		<div class="personal">
			<div class="person">
				<div class="avater">
					<el-avatar shape="circle" :size="80" :src="usr.url" class="ss"></el-avatar>
				</div>
				<div class="name">花名</div>
				<div class="count">
					<div class="left">
						<div style="width: 100%">分类</div>
						<div style="width: 100%;margin-top: 5px;">3</div>
					</div>
					<div class="right">
						<div style="width: 100%;">帖子</div>
						<div style="width: 100%;margin-top: 5px;">{{articlenum}}</div>
					</div>
				</div>
				<div class="animate">
					<span></span>
					<span></span>
				</div>
				<div class="sign">
					二次元，喜欢二次元，非常喜欢二次元
				</div>
				<div class="relative">
					<span class="iconfont icon-qq1 icon" @click='open1'></span>
					<span class="iconfont icon-wechat icon" @click='open2'></span>
					<span class="iconfont icon-youxiang icon" @click='open3'></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import '../../assets/font/iconfont.css';
export default{
	name:'personalcard',
	created(){
		this.getarticlenum();
	},
	data(){
		return{
			usr:{
				url: require('../../assets/images/xiaoyuan.jpg'),
				name: '',
				articnum:'',
				catoenum: '',
				sign:'',
				qq:'793894767',
				wechat:'18959215756',
				email:'793894767@qq.com',
			},
			
			articlenum:0,
		}
	},
	methods:{
		open1(){
			this.$notify({
	          title: 'QQ',
	          message: this.qq,
	          offset: 100,
	          duration: 2000,
        });
		},

		open2(){
			this.$notify({
	          title: '微信',
	          message: this.wechat,
	          offset: 100,
	          duration: 2000,
        });
		},

		open3(){
			this.$notify({
	          title: '邮箱',
	          message: this.email,
	          offset: 100,
	          duration: 2000,
        });
		},

		async getarticlenum(){
	       		const {data:res}= await this.$http.get('getallarticle');
	       		
	       		this.articlenum=res.data.length;
	       		
	    }, 
	}

	
}
</script>

<style scoped>
.personal{
	width: 280px;
	background-color: transparent;;	
}
.person{
	width: 100%;
	height: 350px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: #fff;
	border-radius: 10px;
}
.avater{
	width: 100%;
	display: block;
	margin-top: 12px;
	/*margin-bottom: 12px;*/
}
.ss{
	box-shadow: 0 0 6px #303133;
}
.ss:hover{
	transform: scale(1.1) rotate(360deg);
	transition: All 0.4s ease-in;
}
.name{
	width: 100%;
	display: block;
	font-weight: 550;
	letter-spacing: 10px;/*字间距*/
	padding-left: 5px;
	margin-top: -5%;
}
.count{
	width: 100%;
	height: 60px;
	display: block;
}
.right{
	width: 50%;
	display: block;
	float: left;
	box-sizing: border-box;
	padding-left: 20%;
	
}
.left{
	width: 50%;
	display: block;
	float: right;
	box-sizing: border-box;
	padding-right: 20%;
}
.animate{
	width: 80%;
	height: 6px;
	display: block;
	position: relative;
	overflow: hidden;
	margin-top: -5%;
	
}
.animate span{
	display: block;
	position: absolute;
}
.animate span:nth-child(1){
	top: 0;
	left: -100%;
	width: 100%;
	height: 3px;
	background: linear-gradient(90deg,transparent,#757575);/*#03e9f4*/
	animation: animate1 1s infinite alternate;
}
@keyframes animate1{
	0%
	{
		left: -100%;
	}
	100%{
		left: 100%;
	}
}
.animate span:nth-child(2){
	bottom: 0;
	right: -100%;
	width: 100%;
	height: 3px;
	background: linear-gradient(90deg,transparent,#757575);/*#03e9f4*/
	animation: animate2 1s infinite alternate;
}
@keyframes animate2{
	0%
	{
		right: -100%;
	}
	100%{
		right: 100%;
	}
}
.sign{
	width: 80%;
	/*height: 80px;*/
	margin-top: -3%;
	overflow: hidden;
}
.relative{
	
}
.icon{
	font-size: 20px;
	margin: 0px 8px;
	cursor: pointer;
}
</style>

