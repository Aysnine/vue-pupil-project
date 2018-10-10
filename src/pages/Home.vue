<template lang="pug">
  .wrap-page
    img.logo-image(alt='Pupil logo', src='../assets/logo.png')
    login-box(style='margin: auto', message='hello')
      pretty-tips(slot='prepend', align='center', message='账号 admin，密码 admin')
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>
.wrap-page
  margin 40px auto
  text-align center
  .logo-image
    height 160px
    margin 1em
</style>
