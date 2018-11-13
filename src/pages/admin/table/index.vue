<template lang="pug">
  .page-wrap
    .area.todo-list
      .area-title
        span 任务列表
      .area-comtent.bg-purple
        el-row.header(:gutter='10')
          el-col(:span='4')
            span.text
              | {{ taskCompleteNumber }} 个目标 
              span.finished-text 已完成
              | ，共 {{ taskTotalNumber }} 项
          el-col(:span='4')
            el-progress(:percentage='~~(taskCompleteNumber/taskTotalNumber*100)', color='#67c23a', style='display: inline')
              | ，共 {{ taskTotalNumber }} 项
          el-col(:span='6')
            el-input(placeholder='搜索任务', size='small', prefix-icon='el-icon-search', clearable, v-model='search')
          el-col.right-side(:span='10', style='padding-right: 28px;')
            el-button(type='primary', icon='el-icon-plus', circle, size='small', @click='handleClickAdd')
        el-table(:data='list', style='width: 100%', max-height='512')
          el-table-column(label='#', type='index', width='80')
          el-table-column(label='任务内容', prop='content', width='300')
          el-table-column(label='任务用时', prop='interval', width='200')
          el-table-column(label='任务状态', prop='state'
            :filters='[{ text: "已完成", value: 1 }, { text: "未完成", value: 0 }]'
            :filter-method='filterTask'
          )
            template(slot-scope='scope')
              el-tag(:type='scope.row.state ? "success" : "primary"', disable-transitions) {{ scope.row.state ? '已完成' : '未完成' }}
          el-table-column(width='160')
            template(slot-scope='scope')
              .operate
                el-button(type='primary', plain, icon='el-icon-edit', circle, size='small')
                el-button(type='primary', plain, icon='el-icon-delete', circle, size='small')
    add-task-dialog(ref='add-task-dialog')
    pretty-refresh(@refresh='fetch')
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddTaskDialog from './components/AddTaskDialog'

export default {
  mounted() {
    this.fetch()
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters('admin/task', [
      'tasks',
      'taskTotalNumber',
      'taskCompleteNumber'
    ]),
    list() {
      if (this.tasks)
        return this.tasks.filter(i => {
          if (this.search.trim()) {
            return i.content.toLowerCase().indexOf(this.search) != -1
          }
          return i
        })
      else return []
    }
  },
  methods: {
    ...mapActions('admin/task', ['fetch']),
    filterTask(value, row) {
      return row.state === value
    },
    handleClickAdd() {
      this.$refs['add-task-dialog'].show = true
    }
  },
  components: {
    AddTaskDialog
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
    .right-side
      text-align right
    .finished-text
      color #67c23a
    .text
      font-size .8em
  .done
    color #67c23a
  .wait
    color gray
  .operate
    text-align center
</style>
