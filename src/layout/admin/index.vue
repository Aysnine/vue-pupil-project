<template lang="pug">
  el-container
    el-header.header
      .left-side
        router-link(to='/')
          img(height='60', src='@/assets/logo-text.png')
      el-button(size='small', icon='el-icon-search', round, @click='handleFuncSearch') 功能索引
      el-button(size='small', round, @click='handleLogout')
        | 退出登录
        i.el-icon-arrow-right.el-icon--right
    el-container
      el-aside.aside(width='240px')
        el-scrollbar(v-if='hk', :native='true')
          pure-nav-menu.nav-menu(:routes='routes', mode='vertical')
      el-main.main
        transition(name='fade-transform', mode='out-in')
          keep-alive
            router-view(:class='{"is-hide": inSearch }')
        transition(name='fade-transform' mode='out-in')
          func-search(v-if='inSearch', ref='search', @close='onFuncSearchClose')
</template>

<script>
import FuncSearch from './components/FuncSearch'
import routes from '@/router/modules/admin'
import { mapGetters } from 'vuex'

const R = (f, s) =>
  s.map(i => (f(i), i.children && i.children.length ? R(f, i.children) : 0, i))

export default {
  data() {
    return {
      inSearch: false,
      hk: true
    }
  },
  computed: {
    ...mapGetters(['role']),
    routes() {
      // 遍及路由节点，按角色显示不同页面
      R(i => {
        if (i.meta && i.meta.role) {
          i.meta.hide = i.meta.role.indexOf(this.role) == -1
        }
      }, routes)
      return routes
    }
  },
  watch: {
    routes() {
      // ! 强制更新菜单，有待优化，暴力不可取
      this.hk = false
      this.$nextTick(() => {
        this.hk = true
      })
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
    onFuncSearchClose() {
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
  .left-side
    float left
  &:after
    content ''
    absolute left bottom
    width 100%
    height 1px
    background-color #e2e5ef
    z-index 1
.aside
  position relative
  .nav-menu
    height calc(100vh - 60px)
    position relative
    border none
  &:after
    content: ''
    absolute top right bottom
    width 1px
    height 100%
    background-color #e2e5ef
    z-index 1
.main
  position relative
  height calc(100vh - 60px)
  background-color #f8f9ff
  padding 0
  margin 0
  .is-hide
    opacity 0
</style>
