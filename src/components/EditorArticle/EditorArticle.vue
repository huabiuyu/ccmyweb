<template>
    <div>
      <el-form ref="form" :model="article" :rules="rules" label-width="60px" label-position='left'>
        <p>博客编辑</p>
        <el-form-item label="标题" class='float_l' prop='title'>
          <el-input v-model="article.title" class='title'></el-input>
        </el-form-item>

        <el-form-item label="封面" prop='chartlet'>
          <upload class='float_l' @chartletByChild='getchartlet' ref='upload'/>
        </el-form-item>
        

        <el-form-item label="标签" class='float_l' prop='tab'>
           <el-radio-group v-model="article.tab" >
              <el-radio label="编程"></el-radio>
              <el-radio label="随笔"></el-radio>
              <el-radio label="图集"></el-radio>
            </el-radio-group>
        </el-form-item>
      </el-form>

      <mavon-editor ref="editor" v-model="doc" @save="saveMavon" @change="onchange" @imgAdd="$imgAdd" class="markdown"/> 

      <el-button type="primary" @click="submittext" style="width: 20%;margin-top: 50px;margin-bottom: 50px;">提交</el-button>

    </div>
</template>
<script>
import {mavonEditor} from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import upload from './Upload'
export default {
  name:'editorarticle',
  components: {
    mavonEditor,
    upload,
  },
  data(){
    return{
      doc:'',   
      textcontent:{
        docvalue:'',
        dochtml:'',
      },

      article:{
        id:'',
        title:'',
        tab:'',
        chartlet:'',//主页贴图
        content:'',
        data:'',
      },
      rules:{
        title:[
        { required: true, message: '请输入标题', trigger: 'blur'},
        { min:1, max: 15, message: '长度在 1 到 15 个字', trigger: 'blur' }
        ],

        chartlet:[
        {
           required: true, message: '请上传封面图', trigger: 'change'
        }],

        tab:[
        {
           required: true, message: '请选择类型', trigger: 'change'
        }],

      }
    }
  },
  methods:{
    
    saveMavon(value,render){
            
           // console.log("this is render:"+render);
           // console.log("this is value:"+value);
        },
    submittext(){
      //console.log(this.$refs.editor.d_value);
     // this.$http.post('addarticle',this.article);

       this.$refs.form.validate(async valid => {
          if (!valid) return;
          const  {data:res}= await this.$http.post('addarticle',this.article);
          if(res == 'ok'){
            this.$message.success('操作成功！！！');
            this.$refs.form.resetFields();
            this.doc='';
            this.$refs.upload.deleteList();
          } else{
            this.$message.error('操作失败！！！');
          }
        })

    },
    onchange(value,render){
      this.textcontent.docvalue=value;
      this.textcontent.dochtml=render;

      this.article.content=value;
    },

    $imgAdd(pos, file){
      
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();

           formdata.append('img', file);

           
          this.$http.post('img_upload',formdata)
          .then((res) => {
          /**
           * 例如：返回数据为 res = [[pos, url], [pos, url]...]
           * pos 为原图片标志（0）
           * url 为上传后图片的url地址
           */
            // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          var  idx_url = res.data;
          //console.log(idx_url);
          this.$refs.editor.$img2Url(pos, idx_url);

          //console.log(this.$refs.editor.d_value);
        })
    },
    getchartlet(value){
        this.article.chartlet=value;
    }
        
  }
}
</script>
<style scoped>
  .float_l{
   text-align: left;
  }
  .title{
    width: 60%;
  }

  .markdown{

    width: 100%;
    height: 500px;
    z-index: 1;
 
  }

</style>