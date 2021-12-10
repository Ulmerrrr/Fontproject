// 这里定义一个mutations对象，里面存一些方法，用来改变state的状态
const mutations = {
  // 写一个方法用来清空数组
  subplaylist (state) {
    state.playlist = []
  },
  // 写一个方法用来给数组加一些东西
  addplaylist (state) {
    state.playlist = ['hhh']
  }
}
export default mutations
