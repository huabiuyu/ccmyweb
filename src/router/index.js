import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import EditorPage from '@/components/EditorArticle/EditorPage'



Vue.use(Router)

const router = new Router({
  routes: [
  	{
  	path:"/",
  	redirect:"/home"
  	}, 
  	{
      path: "/login",
      name: 'Login',
      component: Login
   	},
     {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/editorpage',
      name: 'editorpage',
      meta: {
        requireAuth: true,  //表示这个路由需要登录
      },
      component: ()=>import('@/components/EditorArticle/EditorPage') 
    },
    {
      path:'/causerie',
      component: ()=>import('@/components/Causerie')
    },
    {
      path:'/chartlet',
      component: ()=>import('@/components/Chartlet')
    },
    {
      path:'/coding',
      component: ()=>import('@/components/Coding')
    },
    {
      path:'/article/:id',
      component: ()=>import('@/components/ArticlePage')
    },
    {
      path:'*',
      component: ()=>import('@/components/Page404')
    },
  ],
   mode: 'history',//去#号
})

router.beforeEach((to,from,next)=>{
  //to将要访问的路径
  //from由哪个跳转而来
  //next 放行，函数

  const tokenkey = window.sessionStorage.getItem('token');

   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限

      if (tokenkey) {  // 当前的token是否存在
        next();
      }
      else {
        next('/login')
      }
   }
  else {
    next();
  }
})

export default router