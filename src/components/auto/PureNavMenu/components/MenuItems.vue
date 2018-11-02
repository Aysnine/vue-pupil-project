<template lang="pug">
  el-submenu(:index="item.name||item.path")
    template(slot='title')
      //- svg-icon(v-if='item.meta&&item.meta.icon', :icon-class='item.meta.icon')
      span.text(v-if='item.meta && item.meta.title', slot='title') {{item.meta.title}}
    template(v-for='child in item.children', v-if='!(item.meta && item.meta.hide)')

      // template(:key='child.path', v-for='item in [child]', v-if='(child.children&&child.children.length>0) && (!(item.meta && item.meta.hide) && item.children)')
      //   menu-item(v-if='item.children.length===1 && !item.children[0].children', :key='item.children[0].name', :item='item')
      //   menu-items(v-else, :key='item.name', :item='item')

      el-menu-item(:key='child.name', :index="item.path+'/'+child.path")
        //- svg-icon(v-if='child.meta&&child.meta.icon', :icon-class='child.meta.icon')
        span.text(v-if='child.meta&&child.meta.title', slot='title') {{child.meta.title}}
</template>

<script>
export default {
  name: 'MenuItems',
  props: {
    item: {
      type: Object
    }
  }
}
</script>
