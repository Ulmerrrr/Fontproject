// 购物车的相关状态和操作

//  定义一个state对象初始化数据（状态）
const state = {
  //  商品列表
  shop_list: [{
    id: 11,
    name: '鱼香肉丝',
    price: 12
  }, {
    id: 22,
    name: '宫保鸡丁',
    price: 14
  }, {
    id: 34,
    name: '土豆丝',
    price: 10
  }, {
    id: 47,
    name: '米饭',
    price: 2
  }],
  //  添加到购物车的商品
  added: []
}

//  定义一个getters对象，里面定义一些方法来取出state里面的数据
//  接受state作为参数
const getters = {
  //  取出商品数据
  shoplist (state) {
    return state.shop_list
  },
  // 取出加到购物车里面的数据
  addshop (state) {
    return state.added
  }
}

// 定义一个mutations对象，里定义一些方法来操作state,改变里面的状态
// 接受state作为参数,还可以接受一个形参payload（可有可无）
// 里面的方法是同步的

const mutations = {
  // 将点击的商品添加到added数组（购物车）
  selecitem (state, payload) {
    state.added.push(payload)
  },
  // 点击删除added里面的元素
  deitem (state, payload) {
    // 找出点击元素的索引
    var index = state.added.indexOf(payload)
    // 删除对应索引的元素，并且返回新的数组
    var added1 = state.added.slice(index, index + 1)
    console.log(added1)
  }
}

// 定义一个actions对象，里面定义一些方法，来分发（触发）mutations里面的方法
// // 接受state作为参数,还可以接受一个形参payload
// 这个操作是异步的

const actions = {
  // changemutations (context) {
  //   context.commit('clear')
  //   context.commit('add')
  // }
}

export default {
  state,
  mutations,
  actions,
  getters
}
