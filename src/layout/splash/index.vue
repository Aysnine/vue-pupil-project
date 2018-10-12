<template lang="pug">
  el-container
    el-header.header
      //- // ! 隐藏 logo
      //- transition(name='el-fade-in-linear')
      //-   router-link(v-if='$route.path != "/welcome"', to='/')
      //-     img.logo(src='@/assets/logo-text.png')
      router-link(to='/')
        img.logo(src='@/assets/logo-text.png')
      pure-nav-menu(:routes='routes', align='right')
    el-main.main
      transition(name="fade-transform" mode="out-in")
        router-view
</template>

<script>
import routes from '@/router/modules/splash'

export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  padding 0
  width 100%
  position relative
  overflow hidden
.header
  line-height 60px
  width 100%
  max-width 1200px
  margin auto
  img.logo
    height 100%
  @media (max-width: 768px)
    padding 0
</style>
