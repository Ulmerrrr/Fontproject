<!--侧边栏-->
<template>
<div class="side-bar">
  <router-link to="/test1">测试1</router-link>
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
