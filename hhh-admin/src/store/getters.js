// 定义一个getters对象，里面存一些方法，getters用来取出states里面的状态（值）
const getters = {
  // 取出token
  token (state) {
    return state.token
  }
}
export default getters
