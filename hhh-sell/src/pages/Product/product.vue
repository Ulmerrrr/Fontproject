<template>
  <div class="goods">
    <div class="goods-list">
      <p>商品信息</p>
      <table border="2">
        <tr v-for="item in goodslist" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
<!--          购买商品，并且把购买的商品传递过去-->
          <button @click="select(item)">购买</button>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// 引入获取商品列表的接口
import {reqGetGoods} from '../../api'
export default {
  name: 'product',
  components: {},
  data () {
    return {
      goodslist: []
    }
  },
  methods: {
    // 写一个获取商品列表的方法
    getgoods: function () {
      reqGetGoods().then((res) => {
        if (res.code === 200) {
          console.log(res.data)
          this.goodslist = res.data
        }
      })
    },
    // 购买商品，接收传过来的商品信息
    select: function (item) {
      // 打印一下看看是否真的传过来了
      console.log(item)
      // 提交mutation，并且把选择的商品传递过去，存到vuex中,
      this.$store.commit('goods', item)
    }
  },
  mounted () {
    // 调用方法，获取商品列表列表
    this.getgoods()
  }
}
</script>

<style lang="" scoped>
.goods {
  width: 100%;
  height: 100%;
  background-color: gray;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.goods-list {
  text-align: center;
}
p {
  font-size: 0.5rem;
}

td {
  padding: 0.5rem;
  color: #B500FE;
  font-size: 0.5rem;
}
button {
  padding: 0.5rem;
  background-color: #55a532;
}
</style>
