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
            <span>卡片名称</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <div id="bar" class="bar"></div>
          </div>
          <div>
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
      卡片三
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
      卡片四
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
  mounted () {
    this.drawBar()
  },
  methods: {
    drawBar () {
      var myChart = this.$echarts.init(document.getElementById('bar'), 'dark')
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
    }
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

.box-card {
  width: 100%;
}
/*一定要设置echarts容易大小，不然不出来，这玩意和canvas一样*/
.bar {
  width : 500px;
  height : 300px;
}
</style>
