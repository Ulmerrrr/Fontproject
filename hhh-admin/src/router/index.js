import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Layouts from '../layouts/layouts'
import Error404 from '../pages/error/error404'
import Home from '../pages/home/home'
import Product1 from '../pages/product/product1'

Vue.use(Router)

// 定义常量路由(所有人都能看见)
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layouts',
    component: Layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      }
    ]
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
    path: '/product',
    name: 'product',
    component: Layouts,
    // redirect: '/product/product1',
    children: [
      {
        path: '/product/product1',
        name: 'product1',
        component: Product1
      }
    ]
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
// 这里我在通过addRoutes添加路由时，遇到一个bug，当切换角色时，并不能删除之前添加动态路由，
// 导致权限低的还能访问没权限的路由：https://www.cnblogs.com/imjtzhang/p/13709166.html
// 解决方法：
const createRouter = () => new Router({
  // 注册常量路由
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

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
