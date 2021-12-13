<!--商品信息-->
<template>
  <table>
    <tr>
      <th>id</th>
      <th>名称</th>
      <th>价格</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in shoplist" :key="item.id">
      <th>{{item.id}}</th>
      <th>{{item.name}}</th>
      <th>{{item.price}}</th>
<!--                  添加商品到购物车并且把选择的商品作为参数传过去-->
      <th><button @click="selecitem(item)">添加购物车</button></th>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'product',
  computed: {
    // 取出state中的数据
    shoplist () {
      return this.$store.getters.shoplist
    }
  },
  methods: {
    // 向数组中添加元素并且把元素item传过去
    selecitem: function (item) {
      return this.$store.commit('selecitem', item)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
