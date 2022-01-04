<template>
<div class="tab">
  <router-link class="router-link" to="/home">
<!--    使用阿里巴巴字体图标-->
    <span class="iconfont icon-wodezhuye"></span>
    <p>首页</p>
  </router-link>
  <router-link class="router-link" to="/product">
    <span class="iconfont icon-chanpin"></span>
    <p>商品</p>
  </router-link>
  <router-link class="router-link" to="/cart">
    <span class="iconfont icon-gouwuche"></span>
    <p>购物车</p>
  </router-link>
  <router-link class="router-link" to="/my">
    <span class="iconfont icon-wodezhuye"></span>
    <p>我的</p>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Tab',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="" scoped>
.tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.5rem;
  background-color: orange;
  position: fixed;
  bottom: 0;
}
/*改变字体图标的大小*/
.iconfont {
  font-size: 0.8rem;
}
.router-link {
  text-align: center;
  padding: 0.3rem 0.7rem 0.1rem 0.7rem;
}
/*路由被选中时会默认添加一个类，这里可以设置被选中时的样式*/
.router-link-active {
  color: red;
}
</style>
