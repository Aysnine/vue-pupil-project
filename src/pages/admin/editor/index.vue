<template lang="pug">
  .page-wrap
    .area.todo-list
      .area-title
        span 富文本编辑
      .area-content.bg-purple
        quill-editor.editor(
          v-model='value'
          @text-change='textChangeHandler'
          @selection-change='selectionChangeHandler'
          @editor-change='editorChangeHandler'
        )
</template>

<script>
import QuillEditor from '@/components/extend/QuillEditor'
import value from './value'

export default {
  data() {
    return {
      value
    }
  },
  methods: {
    handleAddRow() {
      this.value += '<p style="color: #409EFF;">我是新增的行</p>'
    },
    textChangeHandler(/* delta, oldDelta, source */) {
      // console.group('QuillEditor textChangeHandler')
      // console.log(delta, oldDelta, source)
      // console.groupEnd()
    },
    selectionChangeHandler(/* range, oldRange, source */) {
      // console.group('QuillEditor selectionChangeHandler')
      // console.log(range, oldRange, source)
      // console.groupEnd()
    },
    editorChangeHandler(/* eventName, ...args */) {
      // console.group('QuillEditor editorChangeHandler')
      // console.log(eventName, args)
      // console.groupEnd()
    }
  },
  components: {
    QuillEditor
  }
}
</script>

<style lang="stylus" scoped>
.editor
  height calc(100vh - 240px)
</style>
