<template>
  <div class="my">
    <button class="login" @click="login">登录</button>
    <button class="register" @click="register">注册</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'my',
  components: {},
  data () {
    return {}
  },
  methods: {
    login: function () {
      this.$router.push('/my/login')
    },
    register: function () {
      this.$router.push('/my/register')
    }
  }
}
</script>

<style lang="" scoped>

</style>
