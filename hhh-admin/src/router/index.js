import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Layouts from '../layouts/layouts'
import Error404 from '../pages/error/error404'
import Test1 from '../pages/test/test1'
import Test2 from '../pages/test/test2'
import Test3 from '../pages/test/test3'
import Home from '../pages/home/home'
import Test11 from '../pages/test/test11'

Vue.use(Router)

// 定义常量路由(所有人都能看见)
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/layouts',
    name: 'layouts',
    redirect: '/layouts/home',
    component: Layouts,
    children: [{
      path: 'home',
      name: 'home',
      component: Home
    }]
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404
  }
]
// 异步理由:不同的用户（角色）登陆后可以看见不同的菜单栏，异步路由和后端返回的路由进行匹配
// 成功后添加到常量路由
export const asyncRoutes = [
  {
    path: '/test1',
    name: 'test1',
    component: Test1,
    children: [{
      path: 'test11',
      name: 'test11',
      component: Test11
    }]
  },
  {
    path: '/test2',
    name: 'test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'test3',
    component: Test3
  }
]

// 任意路由：当路径出现错误的时候重定向404
export const anyRoutes = [
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
