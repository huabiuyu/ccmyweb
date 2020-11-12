<template>
	<model>
		<template slot='cover'>
			<backgroundimg />
			<div class="cover">
				<p>花名的小网站<span class="blink">_</span></p>
				<p class="titleTab">一个二次元元素的blog</p>
				<div class="downIcon">
					<span class="iconfont icon-xiangxia"></span>
				</div>
			</div> 
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
		backgroundimg,
		articlecard,
		pagination,
	},
	created(){
		this.getallarticle();
	},
	data(){
		return{		
			article:{
		        id:'',
		        title:'',
		        tab:'',
		        chartlet: '' ,//主页贴图
		        content:'',
		        data:'',
		    },

		    articleList:[],

		    currentpage:1,//当前页码
		    size:8,//页条数
		    total:0,//总页数

		}
	},
	methods:{
	        async getallarticle(){
	       		const {data:res}= await this.$http.get('getallarticle');
	       		window.sessionStorage.setItem("articles",JSON.stringify(res))
	       		var start=(this.currentpage-1)*this.size;
	       		//console.log(res.data);
	       		this.articleList=res.data.reverse().slice(start,start+this.size);
	       		this.total=Math.ceil(res.data.length/this.size);
	       		//console.log(this.total);
	       },    
	       updatepage(val){
	       		this.currentpage=val;
	       		
	       }, 
	       
	},
	watch:{
		currentpage(val){
			const res=JSON.parse(window.sessionStorage.getItem("articles"));
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
.cover{
	height: 100vh;
	width: 100vw;
	display: table-cell;/*垂直居中*/
	position: relative;
	background-color: transparent;
	color: #fff;
	text-align: center;
	vertical-align: middle;	
	font-size: 32px;
	letter-spacing:7px;
	line-height: 18px;
	overflow: hidden;
}
.blink{
	color: transparent;
	animation: blink_ 1.5s;
	animation-direction:normal;
	animation-iteration-count:infinite;
}
@keyframes blink_{
	0% {color: transparent;}
	100% {color: #fff;}
}
.titleTab{
	font-size: 14px;
	transform: translateX(5%);
}
.downIcon{
	position: absolute;
	bottom: 60px;
	left: 50%;
	transform: translateX(-50%);
	animation: bounce 1.5s;
	animation-direction:normal;
	animation-iteration-count:infinite;
}
.downIcon span{
	font-size: 40px;
	
}
@keyframes bounce{
	0% {bottom: 50px;}
	35%{bottom: 80px;}
	100%{bottom: 50px;}
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