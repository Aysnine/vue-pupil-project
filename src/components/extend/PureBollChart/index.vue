<template lang="pug">
  ve-liquidfill(
    :data='chartData'
    :settings='chartSettings'
    :height='height'
    :tooltip-visible='false'
  )
</template>

<script>
import VeLiquidfill from 'v-charts/lib/liquidfill.common'

export default {
  props: ['height', 'percent'],
  data() {
    this.chartSettings = {
      wave: [[0.3, 0.2]],

      seriesMap: [
        {
          color: ['#7297ff'],
          backgroundStyle: {
            color: '#7297ff33',
            borderWidth: 3,
            borderColor: '#7297ff'
          },
          itemStyle: {
            opacity: 0.5,
            shadowColor: '#0000'
          },
          outline: false,
          label: {
            formatter(options) {
              return `${options.data.value}`
            },
            fontSize: 30,
            color: '#7297ff'
          },
          center: ['50%', '50%'],
          radius: '60%'
        }
      ]
    }
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: 'x',
            percent: this.percent
          }
        ]
      }
    }
  },
  components: {
    VeLiquidfill
  }
}
</script>
