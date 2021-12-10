<!--loading正在加载-->
<template>
  <div class="loading">
    <img src="../assets/loading.gif" alt="">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      title: '正在加载'
    }
  }
}
</script>

<style lang="" scoped>
.loading{
  text-align: center;
  width: 2rem;
  height: 2rem;
}
img {
  width: 2rem;
  height: 2rem;
}

</style>
