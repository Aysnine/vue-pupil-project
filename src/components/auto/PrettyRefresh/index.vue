<template lang="pug">
  el-button.pretty-refresh-button(icon='el-icon-refresh', size='small', circle, @click='handleClick')
</template>

<script>
export default {
  name: 'PrettyRefresh',
  methods: {
    handleClick() {
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="stylus" scoped>
.pretty-refresh-button
  position absolute
  right 10px
  top 10px
</style>
