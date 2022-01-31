import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Layouts from '../layouts/layouts'
import Error404 from '../pages/error/error404'

Vue.use(Router)

// 定义常量路由(所有人都能看见)
export const constantRoutes = [
  {
    // 路由重定向
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layouts',
    name: 'layouts',
    component: Layouts
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404
  }
]

const router = new Router({
  // 注册常量路由
  routes: constantRoutes
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
