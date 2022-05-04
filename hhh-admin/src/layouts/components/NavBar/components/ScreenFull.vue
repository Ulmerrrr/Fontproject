<template>
  <div class="fullscreen" @click="toggleFullScreen">
    <span :class="isFullscreen ? 'el-icon-remove' : 'el-icon-full-screen'"></span>
  </div>
</template>

<script>
// 引入全屏切换插件
import screenfull from 'screenfull'

export default {
  name: 'ScreenFull',
  data () {
    return {
      // 全屏切换图标
      isFullscreen: false
    }
  },
  methods: {
    // 全屏切换
    toggleFullScreen: function () {
      // 全屏判断
      if (screenfull.isEnabled) {
        // 切换全屏
        screenfull.toggle()
        // 监听全屏打开和关闭，改变图标，这里用watch无法监听，只能用on监听change事件
        screenfull.on('change', () => {
          if (screenfull.isFullscreen) {
            this.isFullscreen = true
          } else {
            this.isFullscreen = false
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fullscreen {
  background-color: red;
  font-size: 40px;
}
</style>
