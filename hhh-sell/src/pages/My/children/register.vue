<template>
<div class="register-register">
  <form>
    <div class="content">
      <label>手机号：</label>
      <input type="text" placeholder="手机号" v-model="phone">
    </div>
    <div class="content">
      <label>验证码: </label>
      <input type="text" placeholder="请输入验证码" v-model="code">
      <button class="button1" @click="getcode()">验证码</button>
    </div>
    <div class="content">
      <label> 密码：</label>
      <input type="text" placeholder="请输入登录密码" v-model="password">
    </div>
    <div class="content">
      <label> 确认密码：</label>
      <input type="text" placeholder="确认密码" v-model="password1">
    </div>
    <button class="button2" @click="getregister">完成注册</button>
  </form>
</div>
</template>
<script>
import {
  // 导入获取验证码的的接口
  reqGetCode,
  // 导入注册的接口
  reqGetRegister
} from '../../../api'
export default {
  name: 'register',
  components: {},
  data () {
    return {
      // 收集表单数--手机号
      phone: '',
      // 验证码
      code: null,
      // 密码
      password: '',
      // 确认密码
      password1: ''
    }
  },
  methods: {
    // 获取验证码
    getcode: function () {
      reqGetCode().then((res) => {
        // 判断一下用户是否输入了手机号，如果输入了就执行下面
        if (this.phone) {
          // 把获取到的结果赋值
          let result = res.object
          // 打印获取到的结果
          // console.log(result)
          // 判断状态码是否为200
          if (result.code === 200) {
            // 把随机生成的验证码自动填入
            this.code = result.number
          }
        }
      })
    },
    // 点击注册
    getregister: function () {
      // 取出用户输入的数据
      const phone = this.phone
      const code = this.code
      const password = this.password
      const password1 = this.password1
      // 判断一下用户是否输入了号码，验证码，密码，确认密码。如果输入了进行点击注册
      if (phone && code && password && password1 && password === password1) {
        // 点击注册
        reqGetRegister().then((res) => {
          let result1 = res.object
          // 打印获取到的结果
          // console.log(result1)
          // 判断状态码是否为200，是的话派发时间
          if (result1.code === 200) {
            // 派发点击事件，并且将数据传递过去
            this.$store.dispatch('register', {phone, code, password, password1})
            // 路由跳转到登录页
            this.$router.push('/my/login')
            // 打印state中的数据看一下是否真的存储了
            // console.log(this.$store.getters.phone)
            // console.log(this.$store.getters.code)
            // console.log(this.$store.getters.password)
            // console.log(this.$store.getters.password1)
          }
        })
      }
    }
  }
}
</script>

<style lang="" scoped>
.register-register {
  background-color: gold;
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

/*form {*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  flex-wrap: wrap;*/
/*}*/
label {
  display: inline-block;
  text-align: right;
}

.content {
  position: relative;
  margin-bottom: 1rem;
}
input {
  width: 6rem;
  height: 0.8rem;
  box-sizing: border-box;
  position: absolute;
  left: 1.5rem;
}
.button1 {
  width: 1.5rem;
  height: 0.5rem;
  margin-left: 6.5rem;
}
.button2 {
  width: 8rem;
  height: 1rem;
  background-color: red;
}
</style>
