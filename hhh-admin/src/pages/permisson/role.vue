<!--角色管理(超级管理员可以在这里增加减少当前登录用户查看的页面和其他的权限，用到了tree组件)-->
<template>
  <div>
<!--    子组件绑定父组件的数据，然后在子组件用props接收父组件的数据-->
    <SearchTree :data="role_per"></SearchTree>
  </div>
</template>

<script>
// 引入封装的tree组件
import SearchTree from '../../components/SearchTree'
export default {
  name: 'role',
  components: {
    SearchTree
  },
  data () {
    return {
      // 角色权限值
      role_per: []
    }
  },
  created () {
    // 打印一下用户管理界面通过动态路由传过来的参数id
    const id = this.$route.params.id
    // console.log(id)
    // 根据id请求后端获取对应的角色权限信息
    this.$api.reqGetUserPer(id).then(res => {
      // 判断状态码
      if (res.code === 200) {
        // 获取角色权限信息
        this.role_per = res.data
        // console.log(this.role_per)
      }
    })
  }
}
</script>

<style scoped>

</style>
