<!--公共组件对话框-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="handleClose"
    append-to-body="append-to-body">
    <el-form :model="form" :rules="rules" ref="ruleForm">
<!--      prop用来绑定规则-->
      <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth" prop="mobile">
        <el-input v-model="form.mobile" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
<!--       不能直接修改父组件传过来的props里面的值来关闭对话框-->
<!--    只能把值通过$emit传给父组件，然后父组件调用$emit来关闭对话框-->
    <el-button @click="hidden()">取消</el-button>
<!--      一个标签可以绑定两个点击事件-->
    <el-button type="primary" @click="hidden();submitForm('ruleForm')">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DiaLog',
  // 接收父组件传过来的visible，然后动态控制显示
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    // 接收父组件传过来的title
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 表单的数据
      form: {
        name: '',
        password: '',
        email: '',
        mobile: ''
      },
      formLabelWidth: '120px',
      // 表单的校验规则
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
          // pattern是input表单的属性用来写验证规则
          // { pattern: /^1[3456789]\d(9)$/, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 关闭弹窗二次确认
    handleClose () {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('dialog-hidden')
        })
        .catch(_ => {})
    },
    // 不能直接修改父组件传过来的props里面的值来关闭对话框
    // 只能把值通过$emit传给父组件，然后父组件调用$emit来关闭对话框
    hidden: function () {
      this.$emit('dialog-hidden')
    },
    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 请求接口，别忘了传入参数
          this.$api.reqAddUser(this.form)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
