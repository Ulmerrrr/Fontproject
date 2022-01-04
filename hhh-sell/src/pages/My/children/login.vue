<template>
<div class="login-contain">
  <form>
    <div class="user">
      <span class="span1"></span>
      <input type="text" placeholder="邮箱/用户名/手机号" v-model="user">
    </div>
    <div class="password">
      <span class="span2"></span>
      <input type="password" placeholder="请输入密码" v-model="pwd">
    </div>
    <button @click="getlogin">登录</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    getlogin: function f () {
      // 获取到用户输入的数据
      const user = this.user
      const pwd = this.pwd
      // 判断一下，如果用户输入了用户名和密码
      if (user && pwd) {
        // 派发登陆事件，传递参数（用户输入的用户名和密码）
        this.$store.dispatch('login', {user, pwd})
        this.$router.push('/home')
      } else {
        alert('请输入用户名和密码')
      }
    }
  }
}
</script>

<style lang="" scoped>
.login-contain {
  background-color: pink;
  width: 100%;
  height: 100%;
  position: fixed; /*这设置定位，左边和上边对齐*/
  left: 0;
  top: 0;
  z-index: 1; /*这里设置z-index，让登录注册显示在最高层，覆盖其他页面*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.span1 {
  float: left; /*设置浮动后，行内元素span可以变成块级元素，然后就可以设置宽高，这里也可以写成display:block*/
  width: 0.9rem;
  height: 0.9rem;
  background-image: url('../../.././assets/images/icons.png');  /*雪碧图的使用*/
  background-position: -0.3rem -5.2rem;
}

.span2 {
  float: left; /*设置浮动后，行内元素span可以变成块级元素，然后就可以设置宽高，这里也可以写成display:block*/
  width: 0.9rem;
  height: 0.9rem;
  background-image: url('../../.././assets/images/icons.png');  /*雪碧图的使用*/
  background-position: -2.0rem -5.2rem;
}
input {
  width: 6rem;
  height: 0.8rem;
}
button {
  width: 8rem;
  height: 1rem;
  background-color: red;
}

</style>
