<template lang="pug">
  .in-search-wrap
    .in-search-shadow(@click='handleInSearchShadow')
    .in-search-content
      el-input.input(ref='input', v-model='searchText', placeholder='请输入内容', prefix-icon='el-icon-search', clearable)
        el-button(slot='append', icon='el-icon-close', @click='handleInSearchShadow') 取消
      .results.bg-purple(@click='handleInSearchShadow')
        template(v-if='results.length')
          .result-item(v-for='item in results')
            router-link(:to='item.path')
              .title {{ item.title }}
              .subs
                template(v-if='item.item && item.item.length')
                  span.sub(v-for='sub in item.item')
                    router-link(:to='sub.path') {{ sub.title }}
                template(v-else)
                  span.sub
                    router-link(:to='item.path') {{ item.title }}
              .path {{ item.path }}
        .nothing(v-else) 未找到匹配项 😅
</template>

<script>
import routes from '@/router/modules/admin'
import path from 'path'

export default {
  mounted() {
    this.$refs.input.focus()
    this.maps = this.makeMaps(routes)
  },
  data() {
    return {
      inSearch: false,
      searchText: '',
      maps: []
    }
  },
  computed: {
    results() {
      let s = this.searchText.trim()
      if (s === '') return this.maps
      return this.maps.filter(
        i =>
          i.title.toLowerCase().indexOf(s) > -1 ||
          (i.item &&
            i.item.length &&
            i.item.some(one => one.title.toLowerCase().indexOf(s) > -1))
      )
    }
  },
  methods: {
    handleInSearchShadow() {
      this.inSearch = false
      this.$emit('close')
    },
    makeMaps(routes) {
      let r = []
      routes.map(i => {
        if (
          (!(i.meta && i.meta.title) || !i.meta) &&
          i.children &&
          i.children.length
        ) {
          i.children.map(one => {
            if (one.meta && one.meta.title)
              r.push({
                title: one.meta.title,
                path: path.join('/', i.path, one.path)
              })
          })
        } else {
          if (i.meta && i.meta.title) {
            let item = []
            if (i.children && i.children.length)
              i.children.map(one => {
                if (one.meta && one.meta.title)
                  item.push({
                    title: one.meta.title,
                    path: path.join('/', i.path, one.path)
                  })
              })
            r.push({ title: i.meta.title, path: path.join('/', i.path), item })
          }
        }
      })
      return r
    }
  }
}
</script>

<style lang="stylus" scoped>
.in-search-wrap
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background #f8f9ff
.in-search-shadow
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #f8f9ff99
.in-search-content
  position absolute
  text-align center
  padding 20px
  top 0
  left 0
  right 0
  bottom 0
  padding-top 10vh
  .input
    width 512px
  .nothing
    padding 20px
    color #99a
  .results
    overflow auto
    position absolute
    bottom 0
    left 40px
    right 40px
    height 60vh
    background #fff
    padding-top 10px
    border 1px solid #dee5f8
    border-top-left-radius 5px
    border-top-right-radius 5px
    .result-item
      text-align left
      padding 5px 20px
      cursor pointer
      transition background .25s
      .title
        font-size 16px
        font-weight bold
        color #606266
      .subs
        .sub
          margin-right 5px
          font-size 12px
          color #9e9e9e
      .path
          font-size 12px
          color #9e9e9e
      &:hover
        background #f5f7fa
        .subs
          .sub
            color #606266
        .path
            color #606266
</style>
