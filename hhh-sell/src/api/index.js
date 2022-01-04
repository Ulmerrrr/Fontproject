// 统一管理项目接口的模块

// 引入二次封装的axios（带有请求、响应的拦截器）
// import requests from './server' 真实的接口，接口失效了，全部改用mock进行模拟
import mockRequests from './mockserver' // mock模拟的接口

// 对外暴露一个函数，只要外部调用这个函数就向服务器发起ajax请求,
// 当前咱们这个函数只需要把服务器返回结果返回即可

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = function () {
  return mockRequests.get('/banner')
}
// 获取验证码接口
export const reqGetCode = function () {
  return mockRequests({url: '/code', methods: 'get'})
}

// 获取验证码------这里使用真实的接口。真实接口有问题全部作废，使用mock进行模拟
// URL: /api/user/passport/sendCode/{phone}  method:get
// export const reqGetCode = function (phone) {
//   return requests({url: `/user/passport/sendCode/${phone}`, methods: 'get'})
// }
// 注册接口
export const reqGetRegister = function () {
  return mockRequests({url: '/register', methods: 'get'})
}
// 登录接口
export const reqGetLogin = function () {
  return mockRequests({url: '/login', methods: 'get'})
}

// 获取用户信息接口
export const reqGetUser = function () {
  return mockRequests({url: '/userinfo', methods: 'get'})
}

// 退出登录
export const reqLogOut = function () {
  return mockRequests({url: '/logout', methods: 'get'})
}

// 获取收获地址

export const reqGetAdress = function () {
  return mockRequests({url: '/trade', methods: 'get'})
}

// 获取商品信息
export const reqGetGoods = function () {
  return mockRequests({url: '/goods', methods: 'get'})
}
