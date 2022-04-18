<!--调用百度地图-->
<template>
  <baidu-map :mapStyle= "mapStyle" class="bm-view" center="北京">
  </baidu-map>
</template>

<script>
export default {
  name: 'BaiMap',
  data () {
    return {
      // 自定义地图主题
      mapStyle: {
        styleJson: [
          {
            'featureType': 'land',
            'elementType': 'geometry',
            'stylers': {
              'color': '#e6e6e6'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#e6e6e6'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'color': '#999999'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'color': '#ffffff'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'color': '#d1d1d1'
            }
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': {
              'color': '#a4d3eb'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#999999'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry',
            'stylers': {
              'color': '#999999'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#ffffff',
              'weight': '1.5'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#000000'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
