// 这里用mock模拟后端（mock里面可以定义后端接口，请求方法，数据等等 ）

// 先引入mockjs模块（别忘了在main.js中挂载）
import Mock from 'mockjs'
// 把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入
// webpack默认对外暴露的：图片、JSON数据格式
// 引入轮播的数据
import userinfo from './userinfo.json'
// 引入饼图的数据
import piecharts from './piecharts.json'
// 引入用户管理
import userlist from './userlist.json'

// 引入random模块，用于生成随机数
const Random = Mock.Random

// mock数据:第一个参数请求地址   第二个参数：请求数据

// 模拟登录接口
Mock.mock(
  '/mock/login',
  {'token': Random.integer(), 'code': 200}
)

// 获取用户信息接口
Mock.mock(
  '/mock/userinfo',
  {'code': 200, data: userinfo}
)

// 首页饼图接口
Mock.mock(
  '/mock/pie',
  {'code': 200, data: piecharts}
)

// 权限管理/用户管理搜索用户接口
Mock.mock(
  '/mock/userlist',
  {'code': 200, data: userlist}
)
// 权限管理/用户管理添加用户接口
Mock.mock(
  '/mock/adduser',
  {'code': 200}
)
// 权限管理/用户管理编辑用户接口
Mock.mock(
  '/mock/edituser',
  {'code': 200}
)
// 权限管理/用户管理删除用户接口
Mock.mock(
  '/mock/deluser',
  {'code': 200}
)
