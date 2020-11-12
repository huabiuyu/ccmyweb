<template>
	<div class="contain">
		
		<div class="img">
			<div class="img_box">
				<img :src="url" />
			</div>
		</div>
		<div style="font-size: 32px;line-height: 5px">
			<p>404:error</p>
			<p style="font-size: 18px;">请检查网址是否输入错误，或者资源已被移除</p>
		</div>
	</div>
</template>
<script>
export default{
	
	data(){
		return {
			url: require('../assets/images/404.jpg'),
		}
	},

}
</script>
<style scoped>
.contain{
	width: 100vw;
	height: 100vh;
}
.img{
	width: 100%;
	margin-top: 30px;
	overflow: hidden;
}
.img_box{
	height: 300px;
}
img{
	width: auto;
	max-height: 100%;
}
</style>