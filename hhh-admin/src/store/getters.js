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
  },
  // 取出用户需要展示的异步路由
  matchRoutes (state) {
    return state.matchRoutes
  },
  // 取出用户需要展示的所有路由
  allRoutes (state) {
    return state.allRoutes
  },
  // 取出按钮权限
  userButtons (state) {
    return state.userButtons
  },
  // 取出侧边栏菜单展开状态
  asideCollapse (state) {
    return state.asideCollapse
  },
  // 取出菜单栏隐藏时的宽度
  asideWidth (state) {
    return state.asideWidth
  }
}
export default getters
