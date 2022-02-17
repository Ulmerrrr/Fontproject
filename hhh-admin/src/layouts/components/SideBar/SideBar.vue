<!--侧边栏-->
<template>
<div class="side-bar">
  <router-link to="/home">首页</router-link>
  <router-link to="/product/product1">产品1</router-link>
</div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  background-color: orchid;
  width: 200px;
  height: 100%;
}
</style>
