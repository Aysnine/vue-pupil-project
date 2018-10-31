<template lang="pug">
  .notfound-wrap
    p.title 404
    p.desc 页面不存在
    img.fun(src='@/assets/fun/0.png')
    p.desc
      router-link(to='/')
        el-button(type='primary', round, icon='el-icon-location-outline') 返回首页
      el-button(type='primary', plain, round, icon='el-icon-arrow-left', @click='$router.go(-1)') 上一页
</template>

<style lang="stylus" scoped>
.notfound-wrap
  padding 30px 0
  text-align center
  .fun
    max-width 360px
    max-height 360px
  .title
    font-size 4em
    font-weight bold
    margin 10px 0
.desc > *
  margin 1em
</style>
