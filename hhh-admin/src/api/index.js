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
