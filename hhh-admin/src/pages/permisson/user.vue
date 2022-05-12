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
    <el-table :data="tableData" height="500" style="width: 100%" class="el-table">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        width="180"
        v-for="(item) in options"
        :key="item.id"
      >
      </el-table-column>
      <el-table-column
        prop="creat_time"
        label="creat_time"
        width="180"
      >
        <template slot-scope="scope">
<!--          使用dayjs结合计算属性格式化时间-->
          {{dateFormat(scope.row.creat_time)}}
<!--          或者使用过滤器filter-->
<!--          {{scope.row.creat_time | dateFormat}}-->
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryForm.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="queryForm.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=queryForm.total>
    </el-pagination>
  </el-card>
</template>

<script>
import {dateFormat} from '../../utils/filters'
export default {
  name: 'user',
  data () {
    return {
      queryForm: {
        // 查询参数
        query: '',
        // 当前页
        pagenum: 1,
        // 每页显示的条数
        pagesize: 2,
        // 总条数
        total: 0
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
  computed: {
    dateFormat: function () {
      return dateFormat
    }
  },
  methods: {
    // 搜索用户
    getUser: function () {
      // 记得带上查询参数
      this.$api.reqGetUserList(this.queryForm.query).then(res => {
        console.log(res)
        this.tableData = res.data.user
        this.queryForm.total = res.data.total
      }).catch(err => {
        console.log(err)
      })
    },
    handleEdit (index, row) {
      // console.log(index, row)
    },
    handleDelete (index, row) {
      // console.log(index, row)
    },
    // 处理页数改变
    handleSizeChange (val) {
      this.queryForm.pagesize = val
      this.getUser()
    },
    // 处理当前页数改变
    handleCurrentChange (val) {
      this.queryForm.pagenum = val
      this.getUser()
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
/*表格高度问题*/
.el-table {
  overflow: hidden;
/*  深度选择器，去除默认的padding*/
  /deep/ th {
    background-color: dimgray;
    height: 10px;
  }
  /deep/ td {
    background-color: pink;
  }
}
</style>
