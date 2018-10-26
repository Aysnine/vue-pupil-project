<template lang="pug">
  el-container.container
    el-header.header
      router-link(to='/')
        img.logo(src='@/assets/logo-text.png')
      pure-nav-menu(:routes='routes', align='right')
    el-main.main
      transition(name="fade-transform" mode="out-in")
        router-view
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router/modules/splash'

export default {
  mounted() {
    this.updateNav()
  },
  data() {
    return {
      routes
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
    user() {
      this.updateNav()
    }
  },
  methods: {
    updateNav() {
      let val = this.user
      this.routes.find(i => i.redirect == 'login').meta.hide = val
        ? true
        : false
      this.routes.find(i => i.redirect == '/to/admin').meta.hide = val
        ? false
        : true
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
  height 100vh
.header
  line-height 60px
  width 100%
  max-width 1200px
  margin auto
  img.logo
    height 100%
  @media (max-width: 768px)
    padding 0
.main
  relative
  padding 0
</style>
