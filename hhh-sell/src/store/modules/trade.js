// 存储交易页面的相关状态
// 引入获取默认地址接口
import {reqGetAdress} from '../../api'
const state = {
  adress: []
}

const getters = {
  adress (state) {
    return state.adress
  }
}

const mutations = {
  adress (state, adress) {
    state.adress = adress
  }
}

const actions = {
  async getadress (context) {
    // reqGetAdress().then((res) => {
    //   let result = res.data
    //   // console.log(result)
    //   context.commit('adress', result)
    // })
    // 使用async和await重写，这俩个关键字可以把异步变成同步，函数前加async可以让函数返回promise，函数前加await可以直接返回函数的结果
    // https://blog.csdn.net/sky2714/article/details/80950671
    let result = await reqGetAdress()
    console.log(result)
    context.commit('adress', result.data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
