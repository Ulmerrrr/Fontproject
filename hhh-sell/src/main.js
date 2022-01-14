// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible' // 引入rem布局的配置
import './common/css/base.css' // 引入默认的公共样式
import router from './router' // 引入路由
import './assets/iconfont/iconfont.css' // 引入阿里巴巴字体图标库样式
import store from './store' // 引入vuex
import '@/mock/mock'// 引入mock.js----mock数据
import { Swipe, SwipeItem } from 'vant' // 引入vant-ui的轮播组件
import 'vant/lib/index.css'

// 使用axios请求后端接口，有很多种方法，具体可看src/pages/Home/home.vue中轮播图的请求方法
import axios from 'axios' // 引入axios
import requests from './api/mockserver' // 直接引入src/api/mockserver.js中封装好的axios
import * as api from './api/index' // 将统一管理的接口以api对象的形式引入
Vue.prototype.$axios = axios // 挂载到vue原型上，可以在页面中通过this.$axios调用,不用每次请求再次在组件中引入axios
Vue.prototype.$requests = requests // 将封装好的axios挂载到原型上，可以在页面中通过this.$request调用
Vue.prototype.$api = api //  将统一管理的接口挂载到原型上，可以在页面中通过this.$api调用

Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 挂载路由
  store, // 使用vuex要在入口文件中挂载
  components: { App },
  template: '<App/>'
})
