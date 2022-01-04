// 真实接口中对于axios进行二次封装
import axios from 'axios'

// 底下的代码也是创建axios实例
let requests = axios.create({
  // 基础路径，配置跨域，这里直接写真实地址会存在跨域问题，
  baseURL: '/api',
  // 请求不能超过5S
  timeout: 5000
})

// 请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
})
// 响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    // 相应成功做的事情
    return res.data
  },
  // eslint-disable-next-line handle-callback-err
  (err) => {
    alert('服务器响应数据失败')
  }
)
// 最终需要对外暴露（不对外暴露外面模块没办法使用）
// 这里的代码是暴露一个axios实例
export default requests
