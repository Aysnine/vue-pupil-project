<template lang="pug">
  ve-line(
    :colors='colors'
    :data='data'
    :extend='chartExtend'
    :grid='grid'
    :legend-visible='false'
    :settings='chartSettings'
    :xAxis='xAxis'
    :yAxis='yAxis'
    :height='height'
  )
</template>

<script>
import VeLine from 'v-charts/lib/line.common'

export default {
  props: ['height', 'stack', 'data', 'labelMap'],
  data() {
    this.chartSettings = {
      stack: this.stack,
      labelMap: this.labelMap,
      area: true
    }
    this.grid = {
      top: 30,
      bottom: 30,
      left: 20,
      right: 0
    }
    this.xAxis = [
      {
        axisTick: false,
        axisLabel: {
          color: '#9c9c9c'
        },
        type: 'category',
        boundaryGap: false
      }
    ]
    this.yAxis = [
      {
        axisLabel: {
          color: '#9c9c9c'
        },
        axisTick: false,
        splitLine: {
          lineStyle: {
            color: '#e7edff'
          }
        }
      }
    ]
    let colors = ['#7297ff']
    this.colors = colors
    this.chartExtend = {
      series: {
        areaStyle: {
          normal: {
            color: '#7297ff33'
          }
        }
      }
    }
    return {}
  },
  components: {
    VeLine
  }
}
</script>
