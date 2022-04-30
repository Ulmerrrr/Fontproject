// 这里定义一个actons，用来异步提交actions
// 引入  登录接口      获取用户信息接口（action中不能使用this.$api.reqGetLogin(), 不能使用this）
import {reqGetLogin, reqGetInfo} from '../api'
// 引入常量路由和异步路由
import router, {constantRoutes, asyncRoutes} from '../router'
import {setTokenTime} from '../utils/refresh_token'

const actions = {
  // 处理登录业务
  async login ({commit}, userinfo) {
    // 获取结果请求结果
    let result = await reqGetLogin()
    // 打印一下结果
    // console.log(result)
    // 判断一下状态码
    if (result.code === 200) {
      // 将token存到本地
      localStorage.setItem('token', result.token)
      // 登陆时间存在本地
      setTokenTime()
      // 提交mutations,把token存到vuex
      commit('token', result.token)
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //
  //
  // 获取用户信息
  async getInfo ({commit}) {
    // 获取结果
    let result = await reqGetInfo()
    // console.log(result)
    // 提交mutation，存储后端返回的信息
    commit('userinfo', result)
    // 拿到用户路由的标记，以便后面过滤来动态展示路由
    // JSON.parse和JSON.stringify解决数组中出现的这个[__ob__: Observer]不能被枚举
    let routes = JSON.parse(JSON.stringify(result.data.routes))
    // console.log(routes)
    // 根据后端返回的路由标记进行匹配异步路由，找出用户需要展示的异步路由
    // 对异步路由asyncRoutes中的每一项进行过滤，如果在后端返回的路由routes能找到它，则返回。
    // 数组indexof方法：如果数组中没有这个元素返回-1
    let matchRoutes = asyncRoutes.filter(item => {
      if (routes.indexOf(item.name) !== -1) {
        // 如果在if-else或者if-else-if中使用return，那么必须在将这些条件语句放在函数中，否则会报错。
        // 同for循环中使用return一样，使用了return后，将返回到函数外边。
        // if判断正确，会执行代码段，然后执行代码段后面的return，
        // 此时fn执行结束，将不再执行return之后的所有语句
        return true
      }
    })
    // 保存用户需要展示的异步路由，以便后面在菜单栏进行循环渲染
    commit('matchRoutes', matchRoutes)
    // 给路由器添加新路由
    router.addRoutes(matchRoutes)
    // 用户需要展示的所有路由(concat不会改变原数组)
    let allRoutes = constantRoutes.concat(matchRoutes)
    // console.log(allRoutes)
    // 用户需要展示的所有路由存在vuex中
    commit('allRoutes', allRoutes)
    // 按钮权限，用自定义指令进行鉴权
    // 将用户的按钮权限信息存储到vuex中
    commit('userButtons', result.data.buttons)
  }
}

export default actions
