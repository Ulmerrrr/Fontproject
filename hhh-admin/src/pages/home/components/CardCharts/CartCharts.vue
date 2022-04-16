<!--卡片图表-->
<template>
<div class="card">
  <!--  这里用到了layouts组件-->
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-purple">
<!--        使用了card组件-->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片一</span>
          </div>
          <div id="lineCharts" class="lineCharts">
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片二</span>
          </div>
          <div id="barCharts" class="barCharts">
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片三</span>
          </div>
          <div id="doughnutCharts" class="doughnutCharts">
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片四（结合百度地图）</span>
          </div>
          <div id="barCharts4" class="barCharts2">
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'CartCharts',
  data () {
    return {
    }
  },
  methods: {
    drawLine () {
      var myChart = this.$echarts.init(document.getElementById('lineCharts'), 'infographic')
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawBar () {
      var myChart = this.$echarts.init(document.getElementById('barCharts'), 'dark')
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawDoughnut  () {
      var myChart = this.$echarts.init(document.getElementById('doughnutCharts'), 'dark')
      var option = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawLine()
    this.drawBar()
    this.drawDoughnut()
  }
}
</script>

<style lang="scss" scoped>
/*layouts布局样式*/
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/*card组件样式*/
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

/*一定要设置echarts容易大小，不然不出来，这玩意和canvas一样*/
.lineCharts {
  width : 200px;
  height : 100px;
}
.barCharts {
  width : 200px;
  height : 100px;
}
.doughnutCharts {
  width : 200px;
  height : 100px;
}
</style>
