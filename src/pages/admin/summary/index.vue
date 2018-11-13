<template lang="pug">
  .page-wrap
    el-row
      el-col(:span='8')
        .area
          .area-title
            span 曲线
          .area-content.bg-purple
            pure-line-chart(:stack='stack', :data='vistor', :labelMap='labelMap', height='240px')
      el-col(:span='8')
        .area
          .area-title
            span 水球
          .area-content.bg-purple
            pure-boll-chart(height='240px', :percent='0.5')
      el-col(:span='8')
        .area
          .area-title
            span 环图
          .area-content.bg-purple
            pure-ring-chart(:data='vistor', :labelMap='labelMap', height='240px')
    el-row
      el-col(:span='24')
        .area
          .area-title
            span K 线
          .area-content.bg-purple
            pure-kline-chart(height='280px')
    pretty-refresh
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PureLineChart from '@/components/extend/PureLineChart'
import PureRingChart from '@/components/extend/PureRingChart'
import PureBollChart from '@/components/extend/PureBollChart'
import PureKlineChart from '@/components/extend/PureKlineChart'
import AddTaskDialog from '../task/components/AddTaskDialog'
import EditTaskDialog from '../task/components/EditTaskDialog'

export default {
  mounted() {
    this.fetch()
  },
  data() {
    this.stack = { 用户: ['访问用户', '下单用户'] }
    this.labelMap = { date: '日期', times: '访问量' }
    return {}
  },
  computed: {
    ...mapGetters('admin/dash', ['summary']),
    ...mapGetters('admin/summary', ['vistor']),
    ...mapGetters('admin/task', [
      'tasks',
      'taskTotalNumber',
      'taskCompleteNumber'
    ])
  },
  methods: {
    ...mapActions('admin/summary', ['fetch'])
  },
  components: {
    PureLineChart,
    PureRingChart,
    PureBollChart,
    PureKlineChart,
    AddTaskDialog,
    EditTaskDialog
  }
}
</script>

<style lang="stylus" scoped>
.grid-row
  margin-bottom 20px
  .grid-col
    margin-bottom 20px
    width 300px
    border-radius 4px
  &:last-child
    margin-bottom 0

.grid-content
  border-radius 4px
  min-height 36px

.quick-data
  .grid-content
    cursor pointer
    padding 10px
  .text
    float left
    height 60px
    line-height 30px
    padding-left 20px
    .title
      color #9c9c9c
      display block
    .main
      color #6e6e6e
      display block
      font-size 1.5em
      line-height 20px
      font-weight bold
  .icon
    float right
    height 60px
    width 60px
    line-height 60px
    background #7297ff
    text-align center
    color #fff
    font-size 1.5em
    border-radius 10px
  .clear
    clear:both

.todo-list
  .header
    height 60px
    line-height 60px
    padding-left 20px
    padding-right 20px
    border-bottom 1px solid #eff3ff
    .col-date
      text-align right
    .finished-text
      color #67c23a
    .text
      font-size .8em
  .item
    padding 0 10px
    .main-text
      font-size 1em
    .info-text
      font-size .75em
  .operate
    text-align center
</style>
