<template>
    <div class="contain">
        <navmenu/>
        <backgroundimg />
        <div class="nav"><!-- <navmenu /> --></div>       
        
        <div class="editor_box">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="博客编辑" name="first">
                    <editorarticle />         
                </el-tab-pane>
                <el-tab-pane label="博客删除" name="second">
                    <el-form ref="form">
                    	<p>博客删除</p>
						<el-form-item>
						   <el-input v-model="title" placeholder="输入关键词查询"></el-input>
						</el-form-item>
						<!-- <div v-for='article in filterarticles'>	</div>										 -->
							<div v-show='isshow'>
								<el-table
								    :data="filterarticles"
								    style="width: 100%"
								    height="250"
								    stripe
								    :header-cell-style="tableHeaderColor">>
								    <!-- stripe隔行变色 -->
								    </el-table-column>
								    <el-table-column prop="title" label="标题"></el-table-column>
								    <el-table-column prop="tab" label="分类"></el-table-column>
								    <el-table-column prop="data" label="日期"></el-table-column>
								    <el-table-column label="操作">
								    	<!-- 作用域插槽 -->
										<template slot-scope="scope">
											<span class="iconfont icon-chakan" @click='scan(scope.row.id)'></span>
											<span class="iconfont icon-shanchu" @click='del(scope.row.id)'></span>
										</template>
								    </el-table-column>
								</el-table>
							</div> 					
						

					</el-form>
                </el-tab-pane>
              </el-tabs> 
        </div>
    </div>                
        
</template>

<script>


import backgroundimg from '../Admain/BackgroundImg';
import navmenu from '../Admain/NavMenu';
import editorarticle from './EditorArticle'

import '../../assets/font/iconfont.css'
export default{
    components: {
        backgroundimg,
        navmenu,
        editorarticle,
    },
    created(){
    	this.articleList = JSON.parse(window.sessionStorage.getItem("articles")).data;

    },
    data(){
        return{
            activeName: 'first',
            title:'',
            articleList:[],
            isshow:false,
            
        }
    },
    methods:{
    
        handleClick(tab, event) {
        //console.log(tab);
        },
      //表头样式
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
		    if (rowIndex === 0) {
		       return 'font-weight: 500;'
		    }
	    },

	    //查看
	    scan(id){
	    	//console.log(id);
	    	//this.$router.push('/article/'+id);

	    	//新建窗口
	    	let routeData = this.$router.resolve({ path:'/article/'+id});
			window.open(routeData.href, '_blank');
	    },

	    //删除
	    async del(id){

	    	const confirmResult = await this.$confirm('操作将删除数据，是否继续？','提示',{
	    		confirmButtonText:'确定',
	    		cencelButtonText:'取消',
	    	}).catch(err=>err)


	    	if(confirmResult !='confirm'){
	    		return this.$message.info('已取消');
	    	}
	    	console.log(confirmResult);
	    	const {data:res} = await this.$http.delete('deletearticle?id='+id);
	    	console.log(res);
	    	if(res!='success'){
	    		return this.$message.error('删除失败！');
	    	}
	    	this.$message.success('删除成功！');
	    	this.title='';
	    }

        
    },
    computed:{
    	filterarticles:function(){
    		return this.articleList.filter((ar)=>{
    			return ar.title.match(this.title);
    		})
    	}
    },
    watch:{
    	title(val){
    		if (val!='') {
    			this.isshow=true;
    			
    		}
    		else{
    			this.isshow=false;
    			
    		}
    	}
    }

}
</script>
<style scoped>
.contain{
    /*text-align: center;*/
}
.nav{
    width: 100vw;
    height: 56px;
    position: fixed;
    top: 0;
    background-color: #2f4154;
    z-index: 10;
}
.editor_box{
    width: 60%; 
    margin: 60px auto auto auto;
    background:rgba(255,255,255,0.8);
    border-radius: 10px;
    box-shadow: 5px 5px 15px #000;
    padding:15px 35px 10px 35px;

}
.iconfont{
	margin-right: 20px;
	cursor: pointer;
}
@media screen and (max-width: 768px){
    .editor_box{
        width: 80%;
    }
}

</style>