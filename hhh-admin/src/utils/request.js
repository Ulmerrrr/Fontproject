// 这里进行axios的二次封装
import axios from 'axios'
import NProgress from 'nprogress' // 引入请求时顶部出现进度条
import 'nprogress/nprogress.css'
import store from '../store'

// 底下的代码也是创建axios实例
let requests = axios.create({
  // 不同的环境（开发，测试，生产）配置baseUrl
  // Vue-cli2如何配置: https://blog.csdn.net/qq_41348029/article/details/84133983
  baseURL: 'process.env.BASE_API',
  // 请求不能超过5S
  timeout: 5000
})

// 请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  if (store.getters.token) {
    // 设置请求头
    config.headers['authorization'] = store.getters.token
    // 或者写成这样
    // config.headers['X-Token'] = store.getters.token
  }
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    // 进度条结束
    NProgress.done()
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
