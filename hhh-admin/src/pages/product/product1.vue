<template>
<div>
  <el-button type="primary" v-show="userButtons.indexOf('btn1') !== -1 ">当前用户可以展示的按钮1</el-button>
  <el-button type="warning" v-show="userButtons.indexOf('btn2') !== -1 ">当前用户可以展示的按钮2</el-button>
  <el-button type="danger" v-show="userButtons.indexOf('btn3') !== -1 ">当前用户可以展示的按钮3</el-button>
</div>
</template>

<script>
export default {
  name: 'product1',
  data () {
    return {
      //
    }
  },
  computed: {
    // 取出用户的按钮权限
    userButtons () {
      return this.$store.getters.userButtons
    }
  }
}
</script>

<style scoped>

</style>
