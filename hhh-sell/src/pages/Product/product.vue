<template>
  <div class="goods">
    <!--  父组件监听子组件传过来的事件，触发goodsdetail方法，然后执行相应的操作。-->
    <good @select="goodsdetail"></good>
    <router-view></router-view>
  </div>
</template>

<script>
import good from './children/good'
export default {
  name: 'product',
  components: {
    good
  },
  data () {
    return {
      goodslist: []
    }
  },
  methods: {
    // 监听子组件的事件跳转到商品详情页
    goodsdetail: function (item) {
      this.$router.push({
        path: `/product/${item.id}`
        // 这里点击item地址栏对应的变成product/item.id...
        // 例如点击鱼香肉丝（他的id是11），那么通过this.$router.push跳转到singer/11，
        // 此时动态路由aa=11，跳转到component对应组件goods，并且渲染到product组件上（因为router-view写在了product上）
        // ｛此时在goods组件打印this.$route.params.aa的结果为11，相当于通过params传了一个参数｝
      })
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
  padding: 0.5rem 0.2rem;
  background-color: #55a532;
  display: inline-block;
}
</style>
