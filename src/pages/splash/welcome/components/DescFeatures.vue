<template lang="pug">
  div
    mixin item(title)
      el-col(:xs='24', :sm='12', :md='8', :lg='6', :xl='6')
        el-card(:body-style='{ padding: "0px" }', shadow='hover')
          if block
            block
          .bottom
            span.title= title
    el-row(:gutter='20')
      +item('支持移动端')
        img.preview(src='@/assets/desc/preview-reactive.png')
      +item('前台页面 + 后台管理')
        img.preview(src='@/assets/desc/preview-reactive.png')
      +item('简化 Mock 配置')
        img.preview(src='@/assets/desc/preview-reactive.png')
      +item('规范异步请求')
        img.preview(src='@/assets/desc/preview-reactive.png')
</template>

<style lang="stylus" scoped>
.el-row·
  margin-top 20px
  margin-bottom 20px
  padding 0 20px
  &:last-child
    margin-bottom 0
.el-col
  margin-bottom 20px
  border-radius 4px
.preview
  margin 2em 0
  width 100%
.title
  font-weight 100
.bottom
  padding 14px
  border-top 1px solid #ebeef5
</style>
