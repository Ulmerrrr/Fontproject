<template>
  <div class="hello">
    你好hhhh
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/index";
.hello {
  width: 100px;
  height: 200px;
  background-color: $header-bgc-translucent;
}
</style>
