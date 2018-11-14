<template lang="pug">
  .page-wrap
    .content
      //- p(v-for='item in roles')
        h1 {{ item.name }}
        h3 {{ item.id }}
      h1 {{ roler.name }}
      h3 {{ roler.id }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['roler', 'roles'])
  }
}
</script>

<style lang="stylus" scoped>
.content
  padding 25vh 2em
  text-align center
</style>
