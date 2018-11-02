<template lang="pug">
  .page-wrap
    el-row
      el-col(:span='14')
        .area.todo-list
          .area-title
            span 日程信息
          .area-content.bg-purple
            p hello
      el-col(:span='10')
        .area
          .area-title
            span 数据趋势
          .area-content.bg-purple
            p jello
</template>

<style lang="stylus" scoped>
.page-wrap
  padding-left 20px
  padding-right 20px
  min-width 1260px
</style>
