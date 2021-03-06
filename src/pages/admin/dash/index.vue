<template lang="pug">
  .page-wrap
    .area.quick-data
      .area-title
        span 数据速览
      .area-content
        el-row.grid-row(:gutter='35')
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
          +item('文章数量', '{{ summary.total }} 篇')
            i.el-icon-edit
          +item('浏览总量', '{{ summary.views }} 次')
            i.el-icon-view
          +item('分享次数', '{{ summary.share }} 次')
            i.el-icon-share
          +item('消息通知', '{{ summary.msgs }} 条')
            i.el-icon-message
    el-row
      el-col(:span='14')
        .area.todo-list
          .area-title
            span 任务列表
            .area-right-side
              router-link(to='/admin/task')
                el-button(plain, size='small')
                  | 查看全部 
                  i.el-icon-d-arrow-right
          .area-content.bg-purple
            el-row.header(:gutter='10')
              el-col(:span='8')
                span.text
                  | {{ taskCompleteNumber }} 个目标 
                  span.finished-text 已完成
                  | ，共 {{ taskTotalNumber }} 项
              el-col(:span='10')
                el-progress(:percentage='~~(taskCompleteNumber/taskTotalNumber*100)', color='#67c23a', style='display: inline')
              el-col.right-side(:span='6', style='padding-right: 28px;')
                el-button(type='primary', icon='el-icon-plus', circle, size='small', @click='handleClickAdd')
            el-table.table-no-border(:data='tasks.slice(0, 5)', style='width: 100%', :show-header='false', height='345')
              el-table-column
                template(slot-scope='scope')
                  .item
                    .main-text {{ scope.row.content }}
                    .info-text(:class='[scope.row.state ? "done":"wait"]')
                      | {{ scope.row.state ? '已完成' : '未完成' }}  - {{ scope.row.interval }}
              el-table-column(width='160')
                template(slot-scope='scope')
                  .operate
                    el-button(v-if='scope.row.state', type='primary', plain, icon='el-icon-close', circle, size='small', @click='handleTaskStateRemark(scope.$index, scope.row)')
                    el-button(v-else, type='primary', plain, icon='el-icon-check', circle, size='small', @click='handleTaskStateFinished(scope.$index, scope.row)')
                    el-button(type='primary', plain, icon='el-icon-delete', circle, size='small', @click='handleClickDeleteTask(scope.$index, scope.row)')
      el-col(:span='10')
        .area
          .area-title
            span 数据统计
            .area-right-side
              router-link(to='/admin/summary')
                el-button(plain, size='small')
                  | 查看全部 
                  i.el-icon-d-arrow-right
          .area-content.bg-purple
            pure-line-chart(:stack='stack', :data='vistor', :labelMap='labelMap', height='405px')
    add-task-dialog(ref='add-task-dialog')
    pretty-refresh(@refresh='fetch')
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PureLineChart from '@/components/extend/PureLineChart'
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
    ...mapActions('admin/dash', ['fetch']),
    ...mapActions('admin/task', [
      'submitDeleteTask',
      'submitStateFinished',
      'submitStateRemark'
    ]),
    handleClickAdd() {
      this.$refs['add-task-dialog'].open()
    },
    handleClickDeleteTask(index, row) {
      this.$confirm('确认删除', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.submitDeleteTask(row.id)
            .then(rst => {
              this.$message.success(rst.msg || '删除成功')
            })
            .catch(err => {
              this.$message.error(err.msg || '删除失败')
            })
        })
        .catch(() => {
          // ...
        })
    },
    async handleTaskStateFinished(index, row) {
      try {
        let rst = await this.submitStateFinished(row.id)
        this.$message.success(rst.msg || '已标记为 已完成')
      } catch (err) {
        this.$message.error(err.msg || '标记失败')
      }
    },
    async handleTaskStateRemark(index, row) {
      try {
        let rst = await this.submitStateRemark(row.id)
        this.$message.success(rst.msg || '已标记为 未完成')
      } catch (err) {
        this.$message.error(err.msg || '标记失败')
      }
    }
  },
  components: {
    PureLineChart,
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
    .right-side
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
    .done
      color #67c23a
    .wait
      color gray
  .operate
    text-align center
</style>
