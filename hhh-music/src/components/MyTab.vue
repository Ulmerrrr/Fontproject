<!--tab导航栏-->
<template>
<div class="tab">
  <router-link to="/recommend" class="router-link"> <span>推荐</span></router-link>
  <router-link to="/singer" class="router-link"> <span>歌手</span></router-link>
  <router-link to="/rank" class="router-link"><span>排行</span></router-link>
  <router-link to="/search" class="router-link"><span>搜索</span></router-link>
</div>
</template>

<script>
export default {
  name: 'MyTab'
}
</script>

<style scoped>
.tab {
  width: 100%;
  height: 0.8rem;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
}
.router-link{
  color: white;
  text-decoration: none;
}
span{
  margin: 0.7rem;
}
.router-link-active {
  color: goldenrod;
}
</style>
