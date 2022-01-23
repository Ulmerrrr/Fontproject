// 这里用mock模拟后端（mock里面可以定义后端接口，请求方法，数据等等 ）

// 先引入mockjs模块（别忘了在main.js中挂载）
import Mock from 'mockjs'
// 把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入
// webpack默认对外暴露的：图片、JSON数据格式
// 引入轮播的数据
import banner from './banner.json'

// 引入默认地址数据
import address from './address.json'

// 引入商品数据
import goods from './goods.json'

// 引入random模块，用于生成随机数
const Random = Mock.Random

// mock数据:第一个参数请求地址   第二个参数：请求数据

// 对轮播的数据写接口
Mock.mock(
  '/mock/banner',
  {code: 200, data: banner})

// 模拟验证码接口
Mock.mock(
  // 这里定义后端接口
  '/mock/code',
  {
    // 这里定义后端的数据模板，object|4表示生成一个对象并且里面有四个值，'number|1000-9999': 9999表示生成
    'object|4': {'code': 200, 'message': '成功', 'number|1000-9999': 9999, 'ok': true}
  }
)

// 模拟注册接口
Mock.mock(
  // 这里定义后端接口
  '/mock/register',
  {
    // 这里定义后端的数据模板，object|2表示生成一个对象并且里面有2个值
    'object|2': {'code': 200, 'message': '成功'}
  }
)

// 模拟登录接口
Mock.mock(
  // 这里定义后端接口
  '/mock/login',
  {
    // 这里定义后端的数据模板，object|2表示生成一个对象并且里面有2个值,Random.integer表示生成一个随机数
    'object|2': {'code': 200, 'token': Random.integer()}
  }
)

// 模拟获取用户信息接口
Mock.mock(
  // 这里定义后端接口
  '/mock/userinfo',
  {
    // 这里定义后端的数据模板，object|2表示生成一个对象并且里面有2个值
    'object|2': {'code': 200, 'username': 'admin'}
  }
)

// 退出登录

Mock.mock(
  // 这里定义后端接口
  '/mock/logout',
  {
    // 这里定义后端的数据模板，object|2表示生成一个对象并且里面有2个值
    'object|2': {'code': 200, 'message': '成功', '成功': null, 'ok': true}
  }
)

// 交易页面收件人信息接口

Mock.mock(
  // 这里定义后端接口
  '/mock/trade',
  {'code': 200, data: address}
)

// 商品数据接口

Mock.mock(
  // 这里定义后端接口
  '/mock/goods',
  {'code': 200, data: goods}
)

