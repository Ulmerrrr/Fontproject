<!--播放器组件-->
<template>
<!--                                这里判断数组的长度，如果大于0，这个页面就会显示-->
  <div class="player" v-show="playlist.length>0">
    <div class="normal-player">全屏模式</div>
    <div class="mini-player">小屏模式</div>
<!--    点击清空数组之后，数组的长度就为0了，那么这个页面就被隐藏了-->
    <button @click="subplaylist">点我清空数组，隐藏页面</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  methods: {
    subplaylist () {
      this.$store.commit('subplaylist') // 这里调用mutations里面的方法把数组清空
    }
  },
  computed: {
    playlist () {
      return this.$store.getters.playlist // 这里用getters取出state里面的数组
    }
  }
}
</script>

<style lang="" scoped>
.player {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 150;
  background-color: gray;
  opacity: 0.5;
}
</style>
