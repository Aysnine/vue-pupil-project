<template lang="pug">
  .page-wrap
    .area.todo-list
      .area-title
        span 订单管理
      .area-comtent.bg-purple
        el-row.header
          el-col(:span='6')
            span.text
              | 2 个目标 
              span.finished-text 完成
              | ，共 10 项
          el-col(:span='8')
            el-progress(:percentage='20', color='#67c23a', style='display: inline')
          el-col.col-date(:span='10')
            el-date-picker(type='date', size='small', placeholder='选择日期')
        el-table(:data='tableData', style='width: 100%')
          el-table-column(prop='date', label='日期', sortable='', width='180', :filters='[{text: "2016-05-01", value: "2016-05-01"}, {text: "2016-05-02", value: "2016-05-02"}, {text: "2016-05-03", value: "2016-05-03"}, {text: "2016-05-04", value: "2016-05-04"}]', :filter-method='filterHandler')
          el-table-column(prop='name', label='姓名', width='180')
          el-table-column(prop='address', label='地址', :formatter='formatter')
          el-table-column(prop='tag', label='标签', width='100', :filters='[{ text: "家", value: "家" }, { text: "公司", value: "公司" }]', :filter-method='filterTag', filter-placement='bottom-end')
            template(slot-scope='scope')
              el-tag(:type='scope.row.tag === "家" ? "primary" : "success"', disable-transitions='') {{scope.row.tag}}
          el-table-column(prop='name', label='姓名', width='180')
            template(slot-scope='scope')
              .operate
                el-button(type='primary', plain, icon='el-icon-edit', circle, size='small')
                el-button(type='primary', plain, icon='el-icon-delete', circle, size='small')
    pretty-refresh
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
      ]
    }
  },
  methods: {
    formatter(row) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
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
