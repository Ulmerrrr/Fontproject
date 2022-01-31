// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入vuex
import '../mock/mock' // 引入mock.js----mock数据
import './common/css/base.css' // 清除标签边距，样式等等
import * as api from './api/index' // 将统一管理的接口以api对象的形式引入
import {Form, Input, FormItem, Button} from 'element-ui' // 按需引入element
import './assets/iconfont/iconfont.css'// 引入阿里巴巴字体图标
Vue.prototype.$api = api //  将统一管理的接口挂载到原型上，可以在页面中通过this.$api调用

Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
