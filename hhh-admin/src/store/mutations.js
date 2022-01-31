// 这里定义一个mutations对象，里面存一些方法，用来改变state的状态
const mutations = {
  // 改变state中的token
  token (state, token) {
    state.token = token
  }
}
export default mutations
