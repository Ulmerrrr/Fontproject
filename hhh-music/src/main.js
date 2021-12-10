// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store' // 引入store

Vue.use(Vuex)

Vue.use(VueLazyload, {
  loading: 'assets/logo.png'
})
Vue.use(VueAxios, axios)
Vue.use(Vant)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 把store挂载到根实例上
  components: { App },
  template: '<App/>'
})
