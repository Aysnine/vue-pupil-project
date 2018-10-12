<template lang="pug">
  el-menu-item(:index='item.path + "/" + item.children[0].path', :class='{"submenu-title-noDropdown":!isNest}')
    //- svg-icon(v-if='item.children[0].meta&&item.children[0].meta.icon', :icon-class='item.children[0].meta.icon')
    span.text(v-if='item.children[0].meta&&item.children[0].meta.title', slot='title') {{item.children[0].meta.title}}
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object
    },
    isNest: {
      type: Boolean,
      default: false
    }
  }
}
</script>
