<template lang="pug">
  .wrap-page
    el-tooltip(effect='dark', content='来盗我QQ啊', placement='left')
      img.logo-image(alt='Pupil logo', src='@/assets/logo.png')
    login-box(style='margin: auto', message='hello')
      pretty-tips(slot='prepend', align='center', message='账号 admin，密码 admin')
</template>

<style lang="stylus" scoped>
.wrap-page
  margin 0 auto
  text-align center
  .logo-image
    height 130px
    margin 1em
</style>
