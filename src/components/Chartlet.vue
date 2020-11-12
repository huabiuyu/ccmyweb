<template>
	<model>
		<template slot='cover'>
			<div class="nav"></div>
			<div class="cover" :style="{backgroundImage:`url(${url})`}">	</div>
		</template>
		<template slot='list'>
			<div v-for="article in articleList" class="card">
				<articlecard :articleP="article"></articlecard>
			</div>
			<div style="width: 80%;margin-left: 10%;">
				<pagination :Total="total" @currentpage='updatepage'/>
			</div>
		</template>
	</model>
</template>
<script>
import model from './Admain/MainModel';
import backgroundimg from './Admain/BackgroundImg';
import articlecard from './Admain/ArticleCard';
import pagination from './Admain/Pagination';

import '../assets/font/iconfont.css';
export default{
	components:{
		model,
		articlecard,
		pagination,
	},
	created(){
		this.getallarticle();
	},
	data(){
		return{		
			article:{
		        id:'1',
		        title:'1',
		        tab:'图集',
		        chartlet: '1' ,//主页贴图
		        content:'1',
		        data:'1',
		    },

		    articleList:[],

		    currentpage:1,//当前页码
		    size:8,//页条数
		    total:0,//总页数

		    url:require('../assets/images/zhongqiu.jpg'),

		}
	},
	methods:{
	        async getallarticle(){
	       		const {data:res}= await this.$http.get('getarticlebytab',{params:this.article});
	       		window.sessionStorage.setItem("chartlet",JSON.stringify(res))
	       		var start=(this.currentpage-1)*this.size;
	       		//console.log(res.data);
	       		this.articleList=res.data.reverse().slice(start,start+this.size);
	       		this.total=Math.ceil(res.data.length/this.size);
	       		//console.log(this.total);
	       },    
	       updatepage(val){
	       		this.currentpage=val;
	       		//console.log(this.currentpage)
	       }, 
	       
	},
	watch:{
		currentpage(val){
			const res=JSON.parse(window.sessionStorage.getItem("chartlet"));
			//console.log(res);
			var start=(this.currentpage-1)*this.size;
			//console.log(start);
	       	this.articleList=res.data.reverse().slice(start,start+this.size);
	       	//console.log(this.articleList);
		},
	}


}
</script>

<style scoped>
.nav{
	width: 100vw;
	height: 56px;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #2f4154;
}
.cover{
	width: 100vw;
    height: 200px;
    margin-top: 56px;
    background: url('../assets/images/zhongqiu.jpg') center no-repeat;
    background-size: cover; 
}
.card{
	width: 280px;
	height: 350px;	
	margin-left: 5%;
	margin-right: 5%;
	margin-top: 10px;
	margin-bottom: 20px;
}
@media screen and (max-width: 1100px){
	.card{
		width: 100%;
	}
}

</style>