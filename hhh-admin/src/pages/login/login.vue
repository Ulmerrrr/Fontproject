<template>
  <div class="login-container">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form">

      <div class="title-container">
        <h3 class="title">请登录</h3>
      </div>

      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm" class="button">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        // 收集用户名和密码
        username: '',
        pass: '',
        checkPass: ''
      },
      loading: false,
      rules: {
        username: [
          {required: true, validator: validateUsername, trigger: 'blur'}
        ],
        pass: [
          {required: true, validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 登录业务：发请求，带着用户名与密码给服务器（成功与失败）
    submitForm () {
      this.$store.dispatch('login')
        .then(() => {
          // 登录成功进行路由的跳转
          this.$router.push('layouts')
        })
      // 这里是在验证表单元素（用户名与密码）的是否符合规则
      // this.$refs.ruleForm.validate(valid => {
      //   // 如果符合验证规则
      //   if (valid) {
      //     // 按钮会有一个loading效果
      //     this.loading = true
      //     // 派发一个action:login,带着用户名与密码的载荷
      //     this.$store.dispatch('login', this.ruleForm)
      //       .then(() => {
      //         // 登录成功进行路由的跳转
      //         this.$router.push('login')
      //         // loading效果结束
      //         this.loading = false
      //       })
      //       .catch(() => {
      //         this.loading = false
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bgc-theme;
  position: absolute; /*设置绝对定位，脱离文档流，使背景铺满整个界面*/
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 40px;
    margin: 0 auto;
    overflow: hidden;
    /*  border: 1px solid black;*/
    .title-container {
      /*border: 1px solid black;*/
      margin: 30px auto 40px auto;

      .title {
        font-size: 26px;
        color: blue;
        text-align: center;
      }
    }

    .button {
      width: 100%;
      height: 35px;
      position: absolute;
      bottom: -50px;
    }
  }
}
</style>
