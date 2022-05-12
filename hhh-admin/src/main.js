// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入vuex
import '../mock/mock' // 引入mock.js----mock数据
import './common/css/base.css' // 清除标签边距，样式等等
import * as api from './api/index' // 将统一管理的接口以api对象的形式引入
import ElementUI from 'element-ui' // 引入整个element
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './assets/iconfont/iconfont.css'// 引入阿里巴巴字体图标
// 引入echarts
import * as echarts from 'echarts'
// 引入echart主题（背景颜色）
import 'echarts/theme/dark'
import 'echarts/theme/infographic'
// 引入百度地图
import BaiduMap from 'vue-baidu-map'
// 引入dayjs
import dayjs from 'dayjs'
// 引入过滤器
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// dayjs挂载到vue原型上
Vue.prototype.dayjs = dayjs
// 把echarts挂载到Vue的原型上，项目中使用this.$echarts调用
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api //  将统一管理的接口挂载到原型上，可以在页面中通过this.$api调用

Vue.use(ElementUI)
// 注册百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'sORfLM13H4p3AOYpBNUtDhWTBy7YlrEr'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
