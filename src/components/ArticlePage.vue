<template>
	<div>
		<navmenu/>
	    <backgroundimg />
		<div class="nav"></div>
		<div class="contain_box">
			<div class="contain">
				<div class="right" >
					<personalcard />
				</div>
				<div class="left">	
					
					<div class="content">
						<div class="title">{{article.title}}</div>
						<div class="tabAnddata"><span class="iconfont icon-biaoqian icon"/>{{article.tab}}&nbsp;&nbsp;&nbsp;{{article.data}}</div>
						<div class="markdown-body" v-html='article.content' v-highlight></div>
					</div>	
				</div>				
			</div>
		</div>
		<foot></foot>
	</div>
</template>
<script>
import personalcard from './Admain/PersonalCard';
import backgroundimg from './Admain/BackgroundImg';
import navmenu from './Admain/NavMenu';
import foot from './Admain/Footer'

import '../assets/font/iconfont.css';

import marked from 'marked'
export default{
	name:'articlepage',
	components:{
		personalcard,
		navmenu,
		backgroundimg,
		foot,
	},
	created(){
		this.article.id=this.$route.params.id;
		this.getarticle();
	},
	mounted(){

		//引入文本的css
		const link = document.createElement('link')
	    link.type = 'text/css'
	    link.rel = 'stylesheet'
	    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
	    document.head.appendChild(link)

	},
	data(){
		return{
			// id:this.$router.params.id,
			article:{
		        id:'202011021155284',
		        title:'1', 
		        content:'1',
		        tab:'1',
		        chartlet: '1' ,//主页贴图      
		        data:'1',
		    },

		    
		}
	},
	methods:{
		async getarticle(){
			const {data:res}=await this.$http.post('getarticlebyid',this.article);
			if(res.flag =='ok'){
				this.article.title=res.article.title;
				this.article.content=marked(res.article.content);
				this.article.tab=res.article.tab;
				this.article.chartlet=res.article.chartlet;
				this.article.data=res.article.data.slice(0,4)+'.'+res.article.data.slice(4,6)+'.'+res.article.data.slice(6,8);
			}
			else{
				this.$router.push('/*');
			}
									
		},
	},

}
</script>
<style scoped>
.nav{
    width: 100vw;
    height: 56px;
    position: fixed;
    top: 0;
    background-color: #2f4154;
    z-index: 10;
}
.contain_box{
	width: 100%;   
	margin-top: 65px; 
    /*background:rgba(255,255,255,0.8); 
    overflow: hidden;*/
}
.contain{
	width: 1000px;		
	margin: 20px auto 20px auto;
	/*border-radius: 10px;*/
	/*box-shadow: 0px 0px 10px #757575;*/
}
.right{
	width: 280px;
	/*height: 600px;*/
	float: right;	
	margin-left: 1%;
}
.left{
	width: auto;
	box-sizing: border-box;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #fff;
	border-radius: 10px;
	overflow: hidden;	
}
.content{
	width: 90%;
	text-align: left;
	line-height:36px;
	margin-left: 5%;
}
.title{
	font-size: 28px;
	position: relative;
	margin-left: 10px;
}
.title::before{
	width: 5px;
	position: absolute;
    top: 2px;
    bottom: 2px;
    left: -15px;
	content: ' ';
	background-color: #F6A23C;
}
.tabAnddata{
	font-size: 1px;
	filter: opacity(0.8);
	filter: alpha(opacity=0.8);
}
/**/
@media screen and (max-width: 1250px){
	.contain{
		width: 90%;
	}
}
@media screen and (max-width: 1100px){
	
}
@media screen and (max-width: 800px){
	.right{
		display: none;
	}
}

</style>