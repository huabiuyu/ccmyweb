// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './plugins/hljs'

import axios from 'axios'
Vue.prototype.$http=axios
axios.defaults.baseURL='http://101.201.121.224:9000/'

// axios.defaults.baseURL='http://localhost:9001/'


Vue.config.productionTip = false
Vue.use(ElementUI);





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
