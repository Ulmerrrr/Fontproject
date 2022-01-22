import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/home'
import Product from '../pages/Product/product'
import Cart from '../pages/Cart/cart'
import My from '../pages/My/my'
import Login from '../pages/My/children/login'
import Register from '../pages/My/children/register'
import Trade from '../pages/trade/trade'
import Goodsdetail from '../pages/Product/children/goodsdetail'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  }, // 路由重定向
  {
    path: '/home',
    component: Home},
  {
    path: '/product',
    component: Product,
    children: [{
      path: ':aa', // 点击item跳转到商品详情页使用动态匹配路由
      component: Goodsdetail
    }]
  },
  {
    path: '/cart',
    component: Cart,
    children: [
      {
        path: 'trade',
        component: Trade
      }
    ]
  },
  {
    path: '/my',
    component: My,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/trade',
    component: Trade
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
