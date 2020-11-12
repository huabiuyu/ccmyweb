<template>
	<div class="card_box" @click="intoarticlepage">
		<div class="img_box">
			<div class="cover_img" :style="{backgroundImage:`url(${article.chartlet})`}"></div>
			<p class="title">{{article.title}}</p>
		</div>
		
		<div class="cover_text">
			<div class="cover_content">{{article.content}}</div>
			<div class="cover_tab"><span class="iconfont icon-biaoqian icon"/>{{article.tab}}</div>
			<div class="cover_data">{{article.data}}</div>
		</div>
		
	</div>				  
		
</template>

<script>
import '../../assets/font/iconfont.css';
export default{
	name: 'articlecard',
	props:{
		articleP: Object,
	},
	components: {
	
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
		}
	},
	methods:{
		intoarticlepage(){
	       		//console.log(this.article.id);
	       		this.$router.push({path:'/article/'+this.article.id});
	       }
	},
	created(){
		this.article.id=this.articleP.id;
		this.article.chartlet=this.articleP.chartlet;
		this.article.content=this.articleP.content;
		this.article.tab=this.articleP.tab;
		this.article.data=this.articleP.data.slice(0,4)+'.'+this.articleP.data.slice(4,6)+'.'+this.articleP.data.slice(6,8);
		this.article.title=this.articleP.title;
	},
	watch:{
		articleP:{	
			handler(val,nval){
				this.article.id=this.articleP.id;
				this.article.chartlet=this.articleP.chartlet;
				this.article.content=this.articleP.content;
				this.article.tab=this.articleP.tab;
				this.article.data=this.articleP.data.slice(0,4)+'.'+this.articleP.data.slice(4,6)+'.'+this.articleP.data.slice(6,8);
				this.article.title=this.articleP.title;
			},
			 deep: true, 
		},
	},

}
</script>
<style scoped>
.card_box{
	height: 100%;
	width: 100%;
	background-color: #fff;
	cursor: pointer;
	box-shadow: 2px 1px 8px #757575;
}
.img_box{
	width: 100%;
	height: 60%;
	position: relative;
	overflow: hidden;
}
.cover_img{
	width: 100%;
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover; 
}
.img_box:hover .cover_img{
	filter: blur(2px);
	transform: scale(1.15);
	transition-duration:0.5s;
}



.title{
	width: 80%;
	position: absolute;
	bottom: 10px;
	color: #fff;
	font-size: 18px;
	text-align: center;
	margin-left: 10%;
	margin:0px 10%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-shadow: 0 0 3px #fff;

}
.img_box:hover p{
	transform: translateY(-30px) scale(1.15);
	transition-duration:0.4s;
}
.cover_text{
	width: 100%;
	font-size: 16px;
	line-height: 26px;
	box-sizing:border-box;
	padding: 8px 14px;
}
.cover_content{
	width: 100%;
	height: 50px;
	text-align: left;
	word-break: break-all;
	/*text-overflow: ellipsis;*/

	display: -webkit-box; 
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical; 

	overflow: hidden;
}
.cover_tab{
	width: 100%;
	display: block;
	text-align: left;
	font-size: 12px;
	filter: opacity(0.6);
}
.cover_data{
	width: 100%;
	display: block;
	text-align: left;
	font-size: 12px;
	filter: opacity(0.6);
}
.icon{
	font-size: 12px;
	margin-right: 3px;
}
</style>

