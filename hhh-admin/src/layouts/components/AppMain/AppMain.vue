<!--内容区域-->
<template>
<div class="app-main">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: calc(100vh - 80px); /*使用calc()计算宽高（vw/vh）：https://juejin.cn/post/6844903742655954957*/
  /*background-color: burlywood;*/
}
</style>
