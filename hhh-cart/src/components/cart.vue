<!--购物车结算页面-->
<template>
  <div class="cart">
<!--    已选商品-->
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价值</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in addshop" :key="item.id">
          <th>{{item.id}}</th>
          <th>{{item.name}}</th>
          <th>{{item.price}}</th>
          <th @click="deitem(item)">删除</th>
        </tr>
      </table>
    </div>
<!--    购物车结算-->
    <div>
      购物车结算
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    addshop: function () {
      return this.$store.getters.addshop
    }
  },
  methods: {
    // 向数组中添加元素并且把元素item传过去
    deitem: function (item) {
      return this.$store.commit('deitem', item)
    }
  },
  mounted () {
    console.log(this.addshop)
  }
}
</script>

<style scoped>

</style>
