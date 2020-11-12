<template>
    <div class="containt" :style="{backgroundImage:`url(${url})`}">
        
    </div>
</template>
<script>

export default {
    name : 'backgroundimg',
    data(){
      return {
         url:require('../../assets/images/xiaoyuan.jpg'),
      }
    }
}
</script>
<style type="text/css" scoped>
.containt{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    z-index: -1;
    background:  center no-repeat;
    background-size: cover; 
}
</style>


