// 这里统一管理接口
// 引入封装的axios
import request from '../utils/request'

export const getLogin = function () {
  return request.get('')
}
export const getRegister = function (id) {
  return request({
    url: '',
    methods: 'get',
    params: {id}
  })
}
