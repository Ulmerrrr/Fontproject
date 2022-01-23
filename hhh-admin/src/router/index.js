import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    // 路由重定向
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new Router({
  routes
})
// 全局导航守卫：已经登陆了则浏览器中输入登录的地址不能跳转到登录页了
// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem('data')) {
//     next()
//     if (to.path === '/my/login') {
//       next('/home')
//     }
//   }
// })

export default router
