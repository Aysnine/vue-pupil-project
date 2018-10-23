<template lang="pug">
  .wrap-page
    .land
      el-tooltip.item(effect='dark', content='Excuse me ???', placement='left')
        img.logo-image(alt='Pupil logo', src='@/assets/logo.png')
      p.desc
        | Pupil，一套易用的
        span.mark ElementUI
        | 集成方案
      //- desc-features
</template>

<script>
import DescFeatures from './components/DescFeatures'

export default {
  components: {
    DescFeatures
  }
}
</script>

<style lang="stylus" scoped>
.wrap-page
  margin 0 auto
  padding 10px
  text-align center
  .logo-image
    height 200px
    margin 1em
  .desc
    font-size 18px
    line-height 28px
    color #888
    margin 3em 1em
.land
  max-width 1024px
  margin auto
.mark
  color #409eff
  padding 0 .25em
</style>
