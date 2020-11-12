<template>
  <div id="app">
<!-- 	  <navmenu/>
	  <backgroundimg /> -->
    <router-view/>
  </div>
</template>

<script>
import backgroundimg from './components/Admain/BackgroundImg';
import navmenu from './components/Admain/NavMenu';
export default {
  name: 'App',
  components:{
  	backgroundimg,
  	navmenu,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
 