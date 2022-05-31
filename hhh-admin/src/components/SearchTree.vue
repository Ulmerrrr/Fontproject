<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[1]"
      :default-checked-keys="[5]"
      :props="defaultProps">
    </el-tree>
    <el-button type="primary" round @click="save">保存</el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchTree',
  props: {
    // 接收父组件传过来权限值相关数据
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    save: function () {
      this.$api.reqEditUserPer().then(res => {
      })
    }
  }
}
</script>

<style scoped>

</style>
