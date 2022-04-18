<template>
<div>
  <card-charts></card-charts>
  <bai-map></bai-map>
  <pie-charts></pie-charts>
  <radar-charts></radar-charts>
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
export default {
  name: 'home',
  // 注册组件
  components: {
    CardCharts,
    BaiMap,
    PieCharts,
    RadarCharts
  }
}
</script>

<style scoped>

</style>
