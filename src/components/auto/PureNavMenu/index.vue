<template lang="pug">
  el-menu.pure-nav-menu(
    :router='true'
    :mode='mode'
    :default-active='$route.path'
    menu-trigger='hover'
    text-color='#74828f'
    active-text-color='#409EFF'
    :style='{float: align}'
    :class='mode'
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
    },
    mode: {
      require: false,
      default: 'horizontal'
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
