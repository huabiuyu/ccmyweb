<template>
   <div style="border: none;">
     
       <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            :mode= "mode" 
            @select="handleSelect"
            background-color="transparent"
            text-color="#fff"
            active-text-color="#ffd04b"
            :class='emenu'
            router>
        <el-row>
            <el-col :xs="24" :sm="13" :md="18" :lg="18" :xl="18">
                <el-menu-item class="blogTitle"> <span class="title">花名</span>
                    <span class="iconfont icon-daohangcaidan menuIcon hidden-sm-and-up" @click='menuDraw' ref="icon"></span>
                </el-menu-item>
            </el-col>
            <div :style={} ref="menu">
                <el-col :xs="24" :sm="2" :md="1" :lg="1" :xl="1">
                    <el-menu-item index="/home" class="navItem">首页</el-menu-item>
                </el-col>
                <el-col :xs="24" :sm="2" :md="1" :lg="1" :xl="1">
                   
                    <el-menu-item index="/coding" class="navItem">编程</el-menu-item>
                </el-col>
                 <el-col :xs="24" :sm="2" :md="1" :lg="1" :xl="1">
                    <el-menu-item index="/causerie" class="navItem">随笔</el-menu-item>
                </el-col>
                <el-col :xs="24" :sm="2" :md="1" :lg="1" :xl="1">
                    <el-menu-item index="/chartlet" class="navItem">图集</el-menu-item>
                </el-col>
                 <el-col :xs="24" :sm="2" :md="1" :lg="1" :xl="1">
                    <el-menu-item index="/editorpage" class="navItem">创作</el-menu-item>
                </el-col>
                <el-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">
                    <el-menu-item class="end"></el-menu-item>
                </el-col>
            </div>
        </el-row>
        </el-menu>
        <!-- 垂直 "vertical"  水平： "horizontal" -->
   
   </div>
</template>
<script>

import '../../assets/font/iconfont.css';
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name : 'navmenu',
  
    data() {
    return {
        
        mode:'horizontal',
        activeIndex: this.$route.path,
        fullWidth:document.documentElement.clientWidth,
        emenu: 'menua',//menu的css
        statu: true,//菜单是否是收起      
    };
  },
  methods: {

    handleSelect(key, keyPath) {
        //this.activeIndex=key;
       // console.log(this.activeIndex)
      },

      // 点击事件
    menuDraw(){
       //console.log(this.fullWidth);
        if(this.$refs.menu.style.display == 'none')
            {this.$refs.menu.style.display='block';}
        else
            {this.$refs.menu.style.display='none';}
      },
      //鼠标滚动
    handleScroll() {
       
        if(document.documentElement.scrollTop>30||this.fullWidth<768){
           this.emenu='menub';
        }
        else{
            this.emenu='menua';
        }
      },
    },

    mounted(){
        const that = this;
        window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.fullWidth = window.screenWidth
        })()
        };
        if(document.documentElement.clientWidth<768)
            {
                this.$refs.menu.style.display='none';
                this.emenu='menub';
            }
        if(document.documentElement.clientWidth>=768)
            {
                this.$refs.menu.style.display='block';
                this.emenu='menua';
            }
        window.addEventListener('scroll', this.handleScroll, true);
       
    },

    watch:{

        fullWidth(val){
         // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
         // 一旦监听到的screenWidth值改变，就将其重新赋给data里的fullWidth
          if(document.documentElement.clientWidth<768)
           { 
                this.$refs.menu.style.display='none';
                this.emenu='menub';
            }
        if(document.documentElement.clientWidth>=768)
            {
                this.$refs.menu.style.display='block';
                this.emenu='menua';
            }
         }
        },

    },
    created(){
       
        this.handleSelect();
    },

 
}
</script>

<style scoped>
.el-menu{
    border: none;
}
.menua{
    /*box-shadow: 0px 3px 15px;*/
    display: block;
    width: 100vw;
    position: fixed;
    top: 0px;
    z-index: 100;
    border: none;
    background-color: transparent !important;
}
.menub{
    /*box-shadow: 0px 3px 15px;*/
    display: block;
    width: 100vw;
    position: fixed;
    top: 0px;
    z-index: 100;
    border: none;
    background-color: #2f4154 !important;
}
.blogTitle{
    font-size: 30px;
    color: #fff;
    background-color: transparent !important;
    cursor: default;

}
.title{
    float: left;
    margin-left: 5%;
    font-family: 'YouYuan';
    font-weight: 600;
    text-shadow:  0 0 6px #fff;
}

/*.navItem{
    display: block;
    float: right;
    background-color: transparent !important;
}*/

.menuIcon{
    float: right;
    color: #fff;
    font-size: 30px;
    margin-right:5%;
    vertical-align: middle;
    cursor: pointer;
    /*border-bottom: 1px solid #fff;*/
}
@media screen and (max-width: 768px){
    .blogTitle{

        border-bottom: 1px solid #e4e7ed !important;
    }
}

.end{
    pointer-events:none;
}
</style>