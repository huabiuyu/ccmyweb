<template>
	<div class="clearfix">
		<navmenu/>
		<backgroundimg />
		<slot name='cover'></slot>
		<div class="contain_box">
			<div class="contain">
				<div class="right" >
					<personalcard />
				</div>
				<div class="left">		
					<slot name='list'></slot>
				</div>				
			</div>
			<foot></foot>
		</div>
	</div>				  
		
</template>

<script>


import backgroundimg from './BackgroundImg';
import navmenu from './NavMenu';
import articlecard from './ArticleCard';
import personalcard from './PersonalCard';
import pagination from './Pagination';
import foot from './Footer';

import '../../assets/font/iconfont.css';

export default{
	name:'model',
	components: {
		backgroundimg,
		navmenu,
		personalcard,	
		foot,
	},
	created(){
		
	},
	data(){
		return{		
			
		}
	},
	methods:{
	     
	},
	watch:{
		
	}


}
</script>
<style scoped>
.clearfix{

} 
.contain_box{
	width: 100vw; 
    background:rgba(255,255,255,0.8); 
    overflow: hidden;

    
}
.contain{
	width: 1000px;		
	margin: 20px auto 20px auto;
  
}
.right{
	width: 280px;
	display: block;
	float: right;	
	margin-left: 1%;
}
.left{
	width: auto;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;/*自动换行*/
	background-color: #fff;
	border-radius: 10px;
	overflow: hidden;
	
}


/**/
@media screen and (max-width: 1250px){
	.contain{
		width: 90%;
		/*margin-left: 5%;*/

	}
}
@media screen and (max-width: 800px){
	.right{
		display: none;

	}
	.left{
		width: 100%;

	}
}


</style>

