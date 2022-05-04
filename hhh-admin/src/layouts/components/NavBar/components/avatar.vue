<template>
  <div class="avatar">
    <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="40" :src="this.$store.getters.avatar"></el-avatar>
        </span>
      <el-dropdown-menu slot="dropdown" @click="logOut">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
    }
  },
  methods: {
    // 退出登录
    logOut: function () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>
