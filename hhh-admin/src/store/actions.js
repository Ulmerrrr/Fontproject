// 这里定义一个actons，用来异步提交actions
// 引入登录接口（action中不能使用this.$api.reqGetLogin(), 不能使用this）
import {reqGetLogin} from '../api'

const actions = {
  // 处理登录业务
  async login ({commit}, userinfo) {
    // 获取结果请求结果
    let result = await reqGetLogin()
    // 打印一下结果
    console.log(result)
    // 判断一下状态码
    if (result.data.code === 200) {
      // 将token存到本地
      localStorage.setItem('token', result.token)
      // 提交mutations,把token存到vuex
      commit('token', result.token)
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
export default actions
