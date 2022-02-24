import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Layouts from '../layouts/layouts'
import Error404 from '../pages/error/error404'
import Home from '../pages/home/home'
import Product1 from '../pages/product/product1'
import store from '../store'

Vue.use(Router)

// 定义常量路由(所有人都能看见)
export const constantRoutes = [
  {
    path: '/login',
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
    component: Error404
  }
]
// 异步理由:不同的用户（角色）登陆后可以看见不同的菜单栏，异步路由和后端返回的路由进行匹配
// 匹配成功后通过router.addRoutes添加到根路由router中
export const asyncRoutes = [
  {
    path: '/product',
    name: 'product',
    component: Layouts,
    redirect: '/product/product1',
    children: [
      {
        path: 'product1',
        name: 'product1',
        component: Product1
      }
    ]
  }
]

// 任意路由：当路径出现错误的时候重定向404
export const anyRoutes = [
  {
    path: '*',
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

// 全局导航守卫:用来判断是否登录，解决刷新后使用router.addRoutes添加的路由消失问题
router.beforeEach((to, from, next) => {
  // 判断是否登录，直接判断本地存储中有没有token
  if (localStorage.getItem('token')) {
    // 解决解决刷新后使用router.addRoutes添加的路由消失问题
    // 判断vuex中是否有用户的路由信息，如果没有则说明用户刷新了（刷新后vuex中的数据会消失）
    // 重新触发方法，重新添加路由，同时也重新保存的了用户需要展示的路由信息，解决刷新vuex数据消失问题
    if (store.getters.allRoutes.length === 0) {
      store.dispatch('getInfo').then(() => {
        next({path: to.path})
      })
    } else {
      next()
    }
  } else {
    // 如果没有登录，直接去登录
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
