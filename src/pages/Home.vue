<template lang="pug">
  .wrap-page
    img.logo-image(alt='Pupil logo', src='../assets/logo.png')
    login-box(style='margin: auto', message='hello')
      pretty-tips(slot='prepend', align='center', message='账号 admin，密码 admin')
</template>

<script>
import LoginBox from '@/components/LoginBox.vue'
import PrettyTips from '@/components/PrettyTips.vue'

export default {
  name: 'home',
  components: {
    LoginBox,
    PrettyTips
  }
}
</script>

<style lang="stylus" scoped>
.wrap-page
  margin 50px auto
  text-align center
  .logo-image
    height 160px
    margin 1em
</style>
