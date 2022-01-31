// 这里用mock模拟后端（mock里面可以定义后端接口，请求方法，数据等等 ）

// 先引入mockjs模块（别忘了在main.js中挂载）
import Mock from 'mockjs'
// 把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入
// webpack默认对外暴露的：图片、JSON数据格式
// 引入轮播的数据
import banner from './banner.json'

// 引入random模块，用于生成随机数
const Random = Mock.Random

// mock数据:第一个参数请求地址   第二个参数：请求数据

// 模拟登录接口
Mock.mock(
  // 这里定义后端接口
  '/mock/login',
  {
    // 这里定义后端的数据模板，object|2表示生成一个对象并且里面有2个值,Random.integer表示生成一个随机数
    'object|2': {'code': 200, 'token': Random.integer()}
  }
)

// 对轮播的数据写接口
Mock.mock(
  '/mock/banner',
  {code: 200, data: banner})
