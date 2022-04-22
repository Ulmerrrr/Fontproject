<template>
<div>
  <card-charts></card-charts>
  <bai-map></bai-map>
  <pie-charts></pie-charts>
<!--  3：组织option，用户传参。这里使用props传参，先把父组件的option绑定到子组件optionchildren上，然后在子组件用props接收-->
  <radar-charts :optionchildren="option"></radar-charts>
</div>
</template>

<script>
// 引入CardCharts组件
import CardCharts from './components/CardCharts/CartCharts.vue'
// 引入BaiduMap组件
import BaiMap from './components/BaiMap/BaiMap.vue'
// 引入饼图组件
import PieCharts from './components/PieCharts/PieCharts.vue'
// 引入雷达图组件
import RadarCharts from './components/RadarCharts/RadarCharts.vue'
// 引入雷达图配置项
import {radarOptions1} from './components/RadarCharts/options'
export default {
  name: 'home',
  // 注册组件
  components: {
    CardCharts,
    BaiMap,
    PieCharts,
    RadarCharts
  },
  data () {
    return {
      // 雷达图配置项
      option: radarOptions1
    }
  }
}
</script>

<style scoped>

</style>
