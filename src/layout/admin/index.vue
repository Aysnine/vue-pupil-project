<template lang="pug">
  el-container
    el-header.header
      div(style='float: left')
        router-link(to='/')
          img(height='60', src='@/assets/logo-text.png')
      el-button(size='small', icon='el-icon-search', round, @click='handleFuncSearch') 功能索引
      el-button(size='small', round, @click='handleLogout')
        | 退出登陆
        i.el-icon-arrow-right.el-icon--right
    el-container
      el-aside.aside(width='240px')
        el-scrollbar(:native="true")
          pure-nav-menu(:routes='routes', mode='vertical', style="height: calc(100vh - 60px); position: relative; border: none")
      el-main(style='position: relative;height: calc(100vh - 60px); background-color: #f8f9ff')
        transition(v-if='inSearch', name="fade-transform" mode="out-in")
          func-search(ref='search', @close='onFuncSearchClose')
        transition(v-else, name="fade-transform" mode="out-in")
          router-view
</template>

<script>
import FuncSearch from './components/FuncSearch'
import routes from '@/router/modules/admin'

export default {
  data() {
    return {
      routes,
      inSearch: false
    }
  },
  methods: {
    handleLogout() {
      this.$store
        .dispatch('app/logout')
        .then(({ msg }) => {
          this.$message.success(msg)
          this.$router.push('/login')
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    handleFuncSearch() {
      this.inSearch = !this.inSearch
    },
    onFuncSearchClose(val) {
      this.inSearch = false
    }
  },
  components: {
    FuncSearch
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
