<template lang="pug">
  #app
    transition(name="fade-transform" mode="out-in")
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
