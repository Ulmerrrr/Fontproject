<template>
  <div class="goods">
    <div class="goods-list">
      <p>已购买商品</p>
      <table border="2">
        <tr v-for="item in getgoods" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </table>
    </div>
    <button @click="sum">结算</button>
  </div>
</template>

<script>
export default {
  name: 'cart',
  components: {},
  data () {
    return {}
  },
  computed: {
    // 获取vuex中购买的商品
    getgoods: function () {
      return this.$store.getters.getgoods
    }
  },
  methods: {
    // 跳转到结算页面
    sum: function () {
      // 跳转到结算页面
      this.$router.push('/trade')
      // 派发事件，向服务器请求默认地址
      this.$store.dispatch('getadress')
    }
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
  position: fixed;
  bottom: 1.5rem;
  right: 0;
  width: 2.5rem;
  height: 1rem;
  font-size: 0.6rem;
  background-color: red;
}
</style>
