<template>
<div class="detail">
  <p>我是商品详情页</p>
</div>
</template>

<script>
export default {
  name: 'goods',
  components: {},
  data () {
    return {}
  },
  methods: {
    // 接收传过来的商品详情id
    detail: function () {
      const id = this.$route.params.aa
      console.log(id)
    }
  },
  mounted () {
    this.detail()
  }
}
</script>

<style lang="" scoped>
.detail {
  width: 100%;
  height: 100%;
  background-color: pink;
  position: fixed; /*这设置定位，左边和上边对齐*/
  left: 0;
  top: 0;
  z-index: 2;
}
</style>
