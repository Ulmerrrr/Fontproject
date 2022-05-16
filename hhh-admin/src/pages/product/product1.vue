<template>
<div>
<!--  按钮权限-->
  <div class="button">
    <el-button type="primary" v-show="userButtons.indexOf('btn1') !== -1 ">当前用户可以展示的按钮1</el-button>
    <el-button type="warning" v-show="userButtons.indexOf('btn2') !== -1 ">当前用户可以展示的按钮2</el-button>
    <el-button type="danger" v-show="userButtons.indexOf('btn3') !== -1 ">当前用户可以展示的按钮3</el-button>
  </div>
<!--  插槽的使用（把父组件的内容分发到子组件）-->
<!--  样式由父组件提供，数据由子组件提供-->
<!--  https://segmentfault.com/a/1190000013277423-->
  <div class="product1">
    <Product11>
      <!-- 单个插槽 | 默认插槽 | 匿名插槽-->
      <div clas="product11">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
    </Product11>
    <Product12>
      <!--  具名插槽-->
      <div clas="product12" slot="product12">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
    </Product12>
    <Product13>
      <!--  作用域插槽（带数据的）,数据由子组件提供-->
      <div clas="product13" slot-scope="user">
           <span v-for="item in user.data" :key="item">{{item}}</span>
      </div>
    </Product13>
  </div>
</div>
</template>

<script>
// 引入组件
import Product11 from './product11'
import Product12 from './product12'
import Product13 from './product13'
export default {
  components: {
    Product11,
    Product12,
    Product13
  },
  name: 'product1',
  data () {
    return {
      //
    }
  },
  computed: {
    // 取出用户的按钮权限
    userButtons () {
      return this.$store.getters.userButtons
    }
  }
}
</script>

<style lang="scss" scoped>
.product1 {
  background-color: red;
}
</style>
