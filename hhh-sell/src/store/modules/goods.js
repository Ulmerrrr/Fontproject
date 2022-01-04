
// 存储购物车的相关状态
// 引入获取默认地址接口
const state = {
  goods: [],
  price: null
}

const getters = {
  // 取出添加到购物车的商品
  getgoods (state) {
    return state.goods
  },
  // 取出计算的总价
  price (state) {
    return state.price
  }
}

const mutations = {
  // 将购买的商品添加到goods数组
  goods (state, goods) {
    state.goods.push(goods)
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
