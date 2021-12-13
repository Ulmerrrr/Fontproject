//  vuex的入口文件,组装cart和goods模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import goods from './modules/goods'//  引入两个模块

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    goods//  注册两个模块
  },
  strict: process.env.NODE_ENV !== 'production'// 严格模式
})

export default store
