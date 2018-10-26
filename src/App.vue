<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  beforeCreate() {
    this.$store
      .dispatch('app/init')
      .then(res => {
        if (res && res.msg) this.$message.success(res.msg)
      })
      .catch(err => {
        if (err && err.msg) this.$message.error(err.msg)
      })
  }
}
</script>
