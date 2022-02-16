// 这里定义一个mutations对象，里面存一些方法，用来改变state的状态
const mutations = {
  // 存储后端返回的中的token
  token (state, token) {
    state.token = token
  },
  // 存储后端返回的用户相关的信息
  userinfo (state, userinfo) {
    state.avatar = userinfo.data.avatar
    state.buttons = userinfo.data.buttons
    state.roles = userinfo.data.roles
    state.routes = userinfo.data.routes
  }
}
export default mutations
