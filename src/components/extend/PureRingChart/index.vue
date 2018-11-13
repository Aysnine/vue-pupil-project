<template lang="pug">
  ve-ring(
    :colors='colors'
    :data='chartData'
    :settings='chartSettings'
    :height='height'
    :legend-visible='false'
  )
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
export default {
  props: ['height', 'data', 'labelMap'],
  data() {
    this.chartSettings = {
      roseType: 'radius',
      offsetY: '50%'
    }
    let colors = [
      '#9e86d3',
      '#c784d3',
      '#f45eba',
      '#fc6b6b',
      '#e88c5b',
      '#f9c15b',
      '#f8db56',
      '#abe374',
      '#53e59b',
      '#5cd8da',
      '#62a2e6'
    ]
    this.colors = colors
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1', 访问用户: 1 },
          { 日期: '2', 访问用户: 2 },
          { 日期: '3', 访问用户: 3 },
          { 日期: '4', 访问用户: 4 },
          { 日期: '5', 访问用户: 5 },
          { 日期: '6', 访问用户: 6 },
          { 日期: '7', 访问用户: 7 },
          { 日期: '8', 访问用户: 8 },
          { 日期: '9', 访问用户: 9 },
          { 日期: 'a', 访问用户: 10 },
          { 日期: 'b', 访问用户: 11 }
        ]
      }
    }
  },
  components: {
    VeRing
  }
}
</script>
