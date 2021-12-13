// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 使用vuex要在入口文件中挂载

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 使用vuex要在入口文件中挂载
  router,
  components: { App },
  template: '<App/>'
})
