<template lang="pug">
  .page-wrap
    el-row
      el-col(:span='12')
        .area.todo-list
          .area-title
            span 普通表格
          .area-comtent.bg-purple
            el-table.table-no-border(:data='tableData.slice(0, 7)', style='width: 100%')
              el-table-column(fixed='', prop='date', label='日期', width='150')
              el-table-column(prop='name', label='姓名', width='120')
              el-table-column(prop='zip', label='邮编')
              el-table-column(width='160')
                template(slot-scope='scope')
                  .operate
                    el-button(type='primary', plain, icon='el-icon-edit', circle, size='small')
                    el-button(type='primary', plain, icon='el-icon-delete', circle, size='small')
      el-col(:span='12')
        .area.todo-list
          .area-title
            span 固定高度
          .area-comtent.bg-purple
            el-table.table-no-border(:data='tableData', style='width: 100%', height='440')
              el-table-column(fixed='', prop='date', label='日期', width='150')
              el-table-column(prop='name', label='姓名', width='120')
              el-table-column(prop='province', label='省份', width='120')
              el-table-column(prop='city', label='市区', width='120')
              el-table-column(prop='address', label='地址', width='300')
              el-table-column(prop='zip', label='邮编', width='120')
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
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
