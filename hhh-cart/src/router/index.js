import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/product'
import Cart from '../components/cart'

Vue.use(Router)

const routes = [
  {path: '/', redirect: '/Product'}, // 路由重定向
  {path: '/product', component: Product},
  {path: '/cart', component: Cart}
]

const router = new Router({
  routes
})

export default router
