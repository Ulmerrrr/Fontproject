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
      <el-button type="primary" icon="el-icon-search" @click.prevent="getUser()">搜索</el-button>
      <el-button type="primary" @click.prevent="addUser()">添加用户</el-button>
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
          <div class="edit">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">删除</el-button>
          </div>
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
<!--    对话框-->
<!--将对话框的显示状态和标题通过props传给子组件dialog-->  <!--  监听子组件的时间，并在父组件改变对话框的状态时-->
    <DiaLog
      :dialogVisible="visible"
      :title="title"
      @dialog-hidden="hidden"
      v-if="visible"
      :form="editForm">
<!--      v-if="visible"关闭时清空上一次填写的数据，打开后是新的表单-->
    </DiaLog>
  </el-card>
</template>

<script>
// 使用dayjs结合计算属性格式化时间
import {dateFormat} from '../../utils/filters'
// 引入对话框公共组件
import DiaLog from '../../components/DiaLog'
export default {
  name: 'user',
  components: {
    DiaLog
  },
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
        {prop: 'password', label: 'password'},
        {prop: 'id', label: 'id'},
        {prop: 'email', label: 'email'},
        {prop: 'mobile', label: 'mobile'}
      ],
      // 存放后端返回的数据
      tableData: [],
      // 控制对话框的显示和隐藏，把值通过props传给子组件dialog
      visible: false,
      // 对话框的标题
      title: '',
      // 编辑用户的数据
      editForm: {
        name: '',
        password: '',
        email: '',
        mobile: ''
      }
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
        // console.log(res)
        this.tableData = res.data.user
        this.queryForm.total = res.data.total
      }).catch(err => {
        console.log(err)
      })
    },
    // pageSize(每页条数) 改变时会触发,回调参数val为新的每页条数
    handleSizeChange (val) {
      // 初始化pagenum让每页条数改变后的新页面页码重置为1
      this.queryForm.pagenum = 1
      // 每页条数赋值
      this.queryForm.pagesize = val
      // 调用搜索方法
      this.getUser()
    },
    // currentPage（当前页的页码数）， 回调参数val是新的页码数
    handleCurrentChange (val) {
      // 新页码赋值
      this.queryForm.pagenum = val
      // 调用搜索方法
      this.getUser()
      console.log(val)
    },
    // 添加用户
    addUser: function () {
      // 改变父组件的visible值,控制显示，然后通过props传给子组件dialog，
      // 子组件要用v-bind:dialogVisible绑定父组件的值
      // 然后在子组件用props接收父组件传过来的值
      this.visible = true
      // 给title赋值然后传给子组件
      this.title = '添加用户'
    },
    // 关闭对话框
    hidden: function () {
      this.visible = false
      // console.log('船只了')
    },
    // 编辑用户(row是当前行的信息)
    handleEdit (row) {
      // 改变父组件的visible值,控制显示，然后通过props传给子组件dialog，
      this.visible = true
      // 给title赋值然后传给子组件
      this.title = '编辑用户'
      // 赋值
      this.editForm = row
      // console.log(row)
    },
    // 删除用户（MessageBox 弹框组件）（row可以获取当前行用户的信息）
    handleDelete (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 调用接口删除，row可以获取当前行用户的信息，这里需要一个参数id
        this.$api.reqDeleteUser(row.id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        // 删除后重新获取数据
        this.getUser()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
/*解决el-col里面嵌套el-input出现的高度问题(深度选择器)*/
/*https://blog.csdn.net/song_yuejia/article/details/116645328*/
/*https://blog.csdn.net/qq_37600506/article/details/122703393*/
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
  .edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
}
.el-pagination {
  text-align: right;
}
</style>
