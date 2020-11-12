<template>
	<el-upload  
	  action="url"
	  accept="image/jpeg,image/png,image/jpg"
	  :show-file-list="true"
	  :limit=1
	  :on-success="handleAvatarSuccess"
	  :before-upload="beforeAvatarUpload"
	  :http-request="uploadImage"
	  :file-list="fileList" ref='img'>
	  <el-button size="small"  plain>点击上传</el-button>
	</el-upload>				  
		
</template>

<script>



export default{
	name: 'upload',
	components: {
	
		
	},
	data(){
		return{
			 imgUrl: '',
			 fileList:[],
		}
	},
	methods:{
	
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!isJPG) {
          this.$message.error('只能上传图片!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      uploadImage(parm){
      	var formdata = new FormData();

        formdata.append('img', parm.file);
           
        this.$http.post('img_upload',formdata)
          .then((res) => {
          	this.imgUrl=res.data;
          	this.$emit('chartletByChild', this.imgUrl)

          })
      },

      deleteList(){
      	this.$refs.img.clearFiles();
      }
        
	}

}
</script>
<style scoped>

</style>