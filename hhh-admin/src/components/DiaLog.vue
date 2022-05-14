<!--公共组件对话框-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
<!--       不能直接修改父组件传过来的props里面的值来关闭对话框-->
<!--    只能把值通过$emit传给父组件，然后父组件调用$emit来关闭对话框-->
    <el-button @click="hidden()">取消</el-button>
    <el-button type="primary" @click="hidden()">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DiaLog',
  data () {
    return {
    }
  },
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
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 不能直接修改父组件传过来的props里面的值来关闭对话框
    // 只能把值通过$emit传给父组件，然后父组件调用$emit来关闭对话框
    hidden: function () {
      this.$emit('hidden')
    }
  }
}
</script>

<style scoped>

</style>
