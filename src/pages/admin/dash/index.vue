<template lang="pug">

  mixin item(title, main)
    el-col.grid-col(:span='6')
      .grid-content.bg-purple
        .text
          span.title= title
          span.main= main
        .icon
          span
            block
        .clear

  .page-wrap

    .area.quick-data
      .area-title
        span 数据速览
      .area-comtent
        el-row.grid-row(:gutter='35')
          +item('分享次数', '12312 次')
            i.el-icon-share
          +item('消息通知', '23 条')
            i.el-icon-message
          +item('文章数量', '1234 篇')
            i.el-icon-edit
          +item('浏览次数', '2354 次')
            i.el-icon-view

    el-row(:gutter='35')
      el-col(:span='14')
        .area.todo-list
          .area-title
            span 日程信息
            .area-right-side
              el-button(plain, size='small')
                | 查看全部 
                i.el-icon-d-arrow-right
          .area-comtent.bg-purple
            el-row.header(:gutter='10')
              el-col(:span='6')
                span.text
                  | 2 个目标 
                  span.finished-text 完成
                  | ，共 10 项
              el-col(:span='8')
                el-progress(:percentage='20', color='#67c23a', style='display: inline')
              el-col.col-date(:span='10')
                el-date-picker(type='date', size='small', placeholder='选择日期')
            el-table.table-no-border(:data='tableData', style='width: 100%', :show-header='false')
              el-table-column
                template(slot-scope='scope')
                  .item
                    .main-text 编写仪表盘界面
                    .info-text 已完成 - 12个小时的时间 - 3 个问题
              el-table-column(width='160')
                template(slot-scope='scope')
                  .operate
                    el-button(type='primary', plain, icon='el-icon-edit', circle, size='small')
                    el-button(type='primary', plain, icon='el-icon-delete', circle, size='small')
      el-col(:span='10')
        .area
          .area-title
            span 数据趋势
            .area-right-side
              el-button(plain, size='small')
                | 查看全部 
                i.el-icon-d-arrow-right
          .area-comtent.bg-purple
            ve-line(:data='chartData', :settings='chartSettings', :grid='grid', height='335px', :legend-visible='false', :xAxis='xAxis', :yAxis='yAxis', :colors='colors', :extend='chartExtend')
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      stack: { 用户: ['访问用户', '下单用户'] },
      area: true
    }
    this.grid = {
      top: 30,
      bottom: 30,
      left: 30,
      right: 1
    }
    this.xAxis = [
      {
        type: 'category',
        boundaryGap: false
      }
    ]
    this.yAxis = [
      {
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
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 1700, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.page-wrap
  padding-left 20px
  padding-right 20px
  min-width 1260px
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
.area-title
  margin 20px 0 20px
  font-weight 100
  color #4b4949
  font-size 22px
  .area-right-side
    float right

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
