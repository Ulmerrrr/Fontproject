<template>
<div>
  菜单管理(超级管理员可以在这里增加减少菜单栏)
</div>
</template>

<script>
// 使用混入
import {mixins1} from '../../mixins'
export default {
  name: 'menulist',
  mixins: [mixins1],
  data () {
    return {
    }
  },
  created () {
    // 打印mixins中的数据
    // console.log(this.msg)
  }
}
</script>

<style scoped>

</style>
