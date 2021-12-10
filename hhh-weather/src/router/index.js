<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";



Vue.use(VueRouter)

const routes = [
  {
    path:'/',component:home
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
=======
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";



Vue.use(VueRouter)

const routes = [
  {
    path:'/',component:home
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
>>>>>>> c90d6de2d89902ead8d252d96cb1de88a627d905
