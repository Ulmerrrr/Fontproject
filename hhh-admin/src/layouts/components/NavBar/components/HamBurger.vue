<template>
  <div class="ham" @click="toggleClick">
    <span :class="icon"></span>
  </div>
</template>

<script>
export default {
  name: 'HamBurger',
  data () {
    return {
      // 汉堡按钮
      icon: 'el-icon-s-fold'
    }
  },
  methods: {
    // 点击汉堡按钮,更改按钮图表和侧边栏状态
    toggleClick: function () {
      this.$store.commit('asideCollapse')
      // 三元表达式判断一下侧边栏状态，根据这个状态更改图表
      this.$store.getters.asideCollapse ? this.icon = 'el-icon-s-unfold' : this.icon = 'el-icon-s-fold'
    }
  }
}
</script>

<style lang="scss" scoped>
.ham {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  flex: 0.5;
}
</style>
