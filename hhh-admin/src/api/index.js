// 这里统一管理接口
// 引入封装的axios
import requests from '../utils/request'

export const reqGetLogin = function () {
  return requests.get('/login')
}
// export const getRegister = function (id) {
//   return request({
//     url: '',
//     methods: 'get',
//     params: {id}
//   })
// }
