<!--饼图-从后端获取数据-->
<template>
<div>
  <el-container>
    <el-header>饼图-从后端获取数据:{{pieCharts}}</el-header>
    <el-main>
      <div id="pieCharts" class="pieCharts"></div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'PieCharts',
  data () {
    return {
      pieCharts: []
    }
  },
  methods: {
    // 从后端获取饼图的数据
    getPieChartsData () {
      this.$api.reqGetPie().then(res => {
        if (res.code === 200) {
          // 打印结果
          console.log(res.data)
          // 遍历数据放到seriesData中
          for (let i = 0; i < res.data.length; i++) {
            let seriesData = []
            seriesData.push({
              value: res.data[i].value,
              name: res.data[i].name
            })
            this.pieCharts = seriesData
          }
        }
      })
    },
    // 初始化饼图
    drawPie () {
      var myChart = this.$echarts.init(document.getElementById('pieCharts'), 'infographic')
      // 监听页面大小变化，重新设置图表大小
      window.addEventListener('resize', function () {
        myChart.resize({
          width: document.getElementById('pieCharts').offsetWidth,
          height: document.getElementById('pieCharts').offsetHeight
        })
      })
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
            radius: '70%',
            // 把数据填充到饼图中
            data: this.pieCharts,
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
    // 获取饼图数据
    this.getPieChartsData()
    // 绘制饼图
    this.drawPie()
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
.pieCharts {
  width : 500px;
  height : 350px;
  margin: 0 auto;
}
</style>
