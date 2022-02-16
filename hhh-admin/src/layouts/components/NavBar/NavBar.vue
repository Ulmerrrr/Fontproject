<!--头部导航栏-->
<template>
<div class="navbar">
  导航
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {}
  },
  methods: {
    // 获取用户信息
    getInfo: function () {
      this.$store.dispatch('getInfo')
    }
  },
  mounted () {
    // 调用方法获取信息
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: orangered;
  width: 100%;
  height: 50px;
}
</style>
