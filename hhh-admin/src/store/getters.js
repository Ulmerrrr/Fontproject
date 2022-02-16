// 定义一个getters对象，里面存一些方法，getters用来取出states里面的状态（值）
const getters = {
  // 取出token
  token (state) {
    return state.token
  },
  // 取出用户相关信息
  avatar (state) {
    return state.avatar
  },
  buttons (state) {
    return state.buttons
  },
  roles (state) {
    return state.roles
  },
  routes (state) {
    return state.routes
  }
}
export default getters
