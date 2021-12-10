<!--顶部header组件-->
<template>
  <div>
    <p>hy的音乐播放器</p>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 1.5rem;
  background-color: gray;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: goldenrod;
}
p {
  background-color: gray;
}

</style>
