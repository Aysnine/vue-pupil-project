<template lang="pug">
  .notfound-wrap
    p.title 404
    img.fun(src='/images/fun/0')
    p.desc 页面不存在
    p.desc
      router-link(to='/')
        el-button(type='primary', round='', icon='el-icon-location-outline') 返回首页
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
</style>
