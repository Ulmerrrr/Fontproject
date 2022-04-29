// 这里定义一些状态
// 定义了一个state对象，里面存了一些状态
const state = {
  // 后端返回的token
  token: '',
  // 用户头像
  avatar: '',
  // 按钮权限
  buttons: '',
  // 角色信息
  roles: '',
  // 后端返回的路由标记
  routes: [],
  // 用户需要展示的异步路由
  matchRoutes: [],
  // 用户需要展示的所有路由
  allRoutes: [],
  // 用户的按钮权限
  userButtons: [],
  // 侧边栏菜单展开状态
  asideCollapse: true,
  // 侧边菜单栏隐藏时宽度
  asidewidth: '50px'
}
export default state
