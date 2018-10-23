<template lang="pug">
  el-container
    el-header.header
      div(style='float: left')
        router-link(to='/')
          img(height='60', src='@/assets/logo-text.png')
      //- pure-nav-menu(:routes='routes', align='left')
      el-button(type='text')
        | Logout
        i.el-icon-arrow-right.el-icon--right

    el-container
      el-aside.aside(width='240px')
        el-scrollbar(:native="true")
          pure-nav-menu(:routes='routes', mode='vertical', style="height: calc(100vh - 60px); position: relative; border: none")
      el-main(style='height: calc(100vh - 60px)')
        transition(name="fade-transform" mode="out-in")
          router-view
</template>

<script>
import routes from '@/router/modules/admin'

export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  font-size 12px
  line-height 60px
  text-align right
  color #333
  background-color #fff
  &:after
    content ''
    absolute left bottom
    width 100%
    height 1px
    background-color #e2e5ef
    z-index 1
.aside
  position relative
  &:after
    content: ''
    absolute top right bottom
    width 1px
    height 100%
    background-color #e2e5ef
    z-index 1
</style>
