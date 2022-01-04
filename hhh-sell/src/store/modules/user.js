// 存储用户注册的手机号，密码，等等相关的东西

// 引入   登录接口     获取用户信息   退出登录
import {reqGetLogin, reqGetUser, reqLogOut} from '../../api'

//  定义一个state对象存储手机号，密码等等。
const state = {
  // 这里存储注册组件（src/pages/My/children/register.vue）的相关数据
  // 定义表单数--手机号
  phone: '',
  // 验证码
  code: null,
  // 密码
  password: '',
  // 确认密码
  password1: '',
  // 这里存储登陆组件（src/pages/My/children/login.vue）的相关状态
  // token
  token: '',
  // 用户名
  user: '',
  // 密码
  pwd: '',
  // 这里存储从服务器获取用户信息
  username: ''
}

//  定义一个getters对象，里面定义一些方法来取出state里面的数据
//  接受state作为参数
const getters = {
  //  手机号
  phone (state) {
    return state.phone
  },
  // 验证码
  code (state) {
    return state.code
  },
  // 密码
  password (state) {
    return state.password
  },
  // 确认密码
  password1 (state) {
    return state.password1
  },
  // 获取token
  token (state) {
    return state.token
  },
  // 获取登录用户名
  user (state) {
    return state.user
  },
  // 获取登录密码
  pwd (state) {
    return state.pwd
  },
  // 获取从服务器获取的用户信息
  username (state) {
    return state.username
  }
}

// 定义一个mutations对象，里定义一些方法来操作state,改变里面的状态
// 接受state作为参数,还可以接受一个形参payload（可有可无）
// 里面的方法是同步的
const mutations = {
  // 更改state中的phone
  phone (state, phone) {
    state.phone = phone
  },
  // 更改state中的code
  code (state, code) {
    state.code = code
  },
  // 更改state中的password
  password (state, password) {
    state.password = password
  },
  // 更改state中的password1
  password1 (state, password1) {
    state.password1 = password1
  },
  // 更改state中的token
  token (state, token) {
    state.token = token
  },
  // 更改state中的用户名
  user (state, user) {
    state.user = user
  },
  // 更改state中的登陆密码
  pwd (state, pwd) {
    state.pwd = pwd
  },
  // 更改state中从服务器获取的用户信息
  username (state, username) {
    state.username = username
  },
  // 点击退出登录，清除用户信息
  logout (state) {
    state.username = ''
  }
}

// 定义一个actions对象，里面定义一些方法，来分发（触发）mutations里面的方法
// // 接受state作为参数,还可以接受一个形参payload
// 这个操作是异步的
const actions = {
  // 这里提交注册组件的相关数据
  register (context, {phone, code, password, password1}) {
    // 提交phone事件，传递phone参数
    context.commit('phone', phone)
    // 提交code事件，传递code参数
    context.commit('code', code)
    // 提交password事件，传递password参数
    context.commit('password', password)
    // 提交password1事件，传递password1参数
    context.commit('password1', password1)
  },
  // 这里提交登陆的相关数据,
  login (context, {user, pwd}) {
    reqGetLogin().then((res) => {
      // 把拿到的结果赋值
      let result = res.object
      // 打印一下结果
      // console.log(result)
      if (result.code === 200) {
        // 把拿到的token存储在本地（可以在浏览器中查看）
        localStorage.setItem('data', result.token)
        // 把拿到的token传给mutation从而把token存储在vuex中
        context.commit('token', result.token)
        // 把拿到的用户名传给mutation从而把user存储在vuex中
        context.commit('user', user)
        // 把拿到的密码传给mutation从而把pwd存储在vuex中
        context.commit('pwd', pwd)
      }
    })
  },
  // 这里获取用户信息，展示在首页home组件
  userinfo (context) {
    reqGetUser().then((res) => {
      let result1 = res.object
      // console.log(result1)
      context.commit('username', result1.username)
    })
  },
  // 这里退出登录
  logout (context) {
    reqLogOut().then((res) => {
      let result2 = res.object
      console.log(result2)
      if (result2.code === 200) {
        // 清除token
        localStorage.removeItem('data')
        // 清除用户信息
        context.commit('logout')
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
