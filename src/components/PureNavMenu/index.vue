<template lang="pug">
  el-menu.pure-nav-menu(
    :router='true'
    mode='horizontal'
    :default-active='$route.path'
    menu-trigger='hover'
    :style='{float: align}'
  )
    template(v-for='item in routes', v-if='!(item.meta && item.meta.hide) && item.children')
      menu-item(v-if='item.children.length===1 && !item.children[0].children', :key='item.children[0].name', :item='item')
      menu-items(v-else, :key='item.name', :item='item')
</template>

<script>
import MenuItem from './components/MenuItem'
import MenuItems from './components/MenuItems'

export default {
  name: 'PureNavMenu',
  props: {
    routes: {
      type: Array
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'none'].indexOf(val) != -1
      },
      default: 'none'
    }
  },
  components: {
    MenuItem,
    MenuItems
  }
}
</script>

<style lang="stylus" scoped>
.pure-nav-menu
  border none
</style>
