<template>
  <el-card>
    <el-row :gutter="1">
      <el-col :span="7">
        <el-input v-model="queryForm.query" placeholder="搜索"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      queryForm: {
        query: '',
        pagenum: 1,
        pagesize: 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
