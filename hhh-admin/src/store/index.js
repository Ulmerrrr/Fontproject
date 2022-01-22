// store的入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state,
  mutations
})

export default store // 导出store,并且在main.js中引入和挂载
