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
