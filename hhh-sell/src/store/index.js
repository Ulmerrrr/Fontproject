//  vuex的入口文件,组装cart和goods模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import trade from './modules/trade'//  引入三个模块
import goods from './modules/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user, // 注册用户模块
    trade, //  注册交易模块
    goods // 注册商品模块
  },
  strict: process.env.NODE_ENV !== 'production'// 严格模式
})

export default store
