<<<<<<< HEAD
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import {Button} from "vant"
import 'vant/lib/button/style'
// axios.defaults.baseURL="/api"
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.use(Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import {Button} from "vant"
import 'vant/lib/button/style'
// axios.defaults.baseURL="/api"
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.use(Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
>>>>>>> c90d6de2d89902ead8d252d96cb1de88a627d905
