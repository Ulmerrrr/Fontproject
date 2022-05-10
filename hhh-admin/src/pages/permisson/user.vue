<template>
  <el-card>
    <el-row :gutter="28" class="el-row">
      <el-col :span="10" class="el-col">
        <el-input
          v-model="queryForm.query"
          placeholder="搜索"
          class="el-input"
        ></el-input>
      </el-col>
      <el-button type="primary" icon="el-icon-search" @click="getUser()">搜索</el-button>
      <el-button type="primary" >添加用户</el-button>
    </el-row>
    <el-table :data="tableData" height="250" border style="width: 100%">
      <el-table-column :prop="item.prop" :label="item.label" width="180" v-for="(item) in options" :key="item.id"></el-table-column>
    </el-table>
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
      },
      // 自定义一个数组绑定表头
      options: [
        {prop: 'name', label: 'name'},
        {prop: 'role_name', label: 'role_name'},
        {prop: 'age', label: 'age'},
        {prop: 'id', label: 'id'}
      ],
      // 存放后端返回的数据
      tableData: []
    }
  },
  methods: {
    // 搜索用户
    getUser: function () {
      // 记得带上查询参数
      this.$api.reqGetUserList(this.queryForm.query).then(res => {
        console.log(res)
        this.tableData = res.data.user
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/*解决el-col里面嵌套el-input出现的高度问题
https://blog.csdn.net/song_yuejia/article/details/116645328*/
.el-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .el-col {
    background-color: red;
    height: 50px;
  }
  .el-input {
    height: 50px;
    background-color: pink;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
/*  重点在于(深度选择器的使用)：在 <el-input> 外设置一个 <div> 包裹住，
  并给<div>一个class类名，穿透一下，就可以改变el-input__inner。*/
  .el-col /deep/ .el-input__inner {
    /*height: 50px;
    line-height: 50px;*/
    background-color: gray;
  }
}
</style>
