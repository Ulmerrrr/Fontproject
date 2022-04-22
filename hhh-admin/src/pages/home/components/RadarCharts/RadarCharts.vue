<!--雷达图组件的封装-->

<!--为什么要封装echarts-->
<!--1：原生echarts不是vue组件风格，不爽  -->
<!--2：原生echart实现要准备dom，麻烦  -->
<!--3：原生echarts没有相应系统，太菜。)-->

<!--封装后组件的的基本功能-->
<!--1：准备dom，组件自动生成-->
<!--2：准备实例，组件自动生成-->
<!--3：组织option，用户传参-->
<!--4：应用option，组件自动应用-->
<template>
<div>
  <el-container>
    <el-header>雷达图的封装</el-header>
    <el-main>
      <div id="radarCharts" :style="RadarStyle"></div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'RadarCharts',
  // 1：准备dom，组件自动生成
  // Prop 可以让你在组件上注册一些自定义属性，然后通过v-bind绑定到html标签上
  // Prop 也可以接收父组件传递的参数，然后通过v-bind绑定到html标签上
  props: {
    // 定义宽高属性，类型为object，默认值为500和350，在组件中通过v-bind绑定到html标签上

    // 写法一：用prop验证的形式来写,用自定义验证函数的形式来写
    // RadarStyle: {
    //   type: Object,
    //   // 对象或数组默认值必须从一个工厂函数获取
    //   default: function () {
    //     return {
    //       width: '500px',
    //       height: '350px',
    //       margin: '0 auto'
    //     }
    //   }
    // }
    // 写法二：用prop验证的形式来写，然后使用计算属性来返回
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '350px'
    },
    margin: {
      type: String,
      default: '0 auto'
    },
    // 接收父组件传来的配置项
    optionchildren: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      // 定义节点id
      id: 'radarCharts',
      // 定义实例
      mychart: null
    }
  },
  computed: {
    // 计算图标容器宽高
    RadarStyle () {
      return {
        width: this.width,
        height: this.height,
        margin: this.margin
      }
    }
  },
  methods: {
  },
  mounted () {
    // 2：准备实例，组件自动生成
    this.myChart = this.$echarts.init(document.getElementById('radarCharts'), 'infographic')
    // 4：应用图表的配置数据radarOptions1，组件自动应用
    this.myChart.setOption(this.optionchildren)
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/*一定要设置echarts容易大小，不然不出来，这玩意和canvas一样*/
/*.radarCharts {
  width : 500px;
  height : 350px;
  margin: 0 auto;
}*/
</style>
