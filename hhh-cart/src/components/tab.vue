<!--tab导航栏-->
<template>
<div class="tab">
  <router-link to="/product"><span>商品信息</span></router-link>
  <router-link to="/cart"><span>车购物</span></router-link>
</div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
}
span {
  padding: 30px;
}
a {
  text-decoration: none;
}
.router-link-active {
  color: red;
}
</style>
