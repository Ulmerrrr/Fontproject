// 这里统一管理接口
// 引入封装的axios
import requests from '../utils/request'
// 登录接口
export const reqGetLogin = function () {
  return requests.get('/login')
}
// 获取用户信息
export const reqGetInfo = function () {
  return requests({
    url: '/userinfo',
    methods: 'get'
  })
}
// 获取饼图数据接口
export const reqGetPie = function () {
  return requests({
    url: '/pie',
    methods: 'get'
  })
}
// 搜索用户接口
export const reqGetUserList = function (params) {
  return requests({
    url: '/userlist',
    methods: 'get',
    params
  })
}
// 添加用户接口,需要传参数
export const reqAddUser = function (data) {
  return requests({
    url: '/adduser',
    methods: 'post',
    data
  })
}
