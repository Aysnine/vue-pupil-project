<template lang="pug">
  el-dialog(title='编辑任务', :visible.sync='show')
    el-form(:model='form', ref='form')
      el-form-item(label='任务内容', :label-width='formLabelWidth', required)
        el-input(v-model='form.content', placeholder='请输入', maxlength='64', autocomplete='off')
      el-form-item(label='任务时长', :label-width='formLabelWidth', required)
        el-select(v-model='form.interval', placeholder='请选择')
          el-option(v-for='item in options.TaskInvertalOptions', :key='item.value', :label='item.label', :value='item.value')
    .dialog-footer(slot='footer')
      el-button(@click='handleCancel', size='small') 取 消
      el-button(type='primary', @click='handleSubmit', size='small') 确 定
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false,
      options: {
        TaskInvertalOptions: [
          { value: '1 h', label: '1 h' },
          { value: '2 h', label: '2 h' },
          { value: '3 h', label: '3 h' },
          { value: '5 h', label: '5 h' },
          { value: '7 h', label: '7 h' },
          { value: '8 h', label: '8 h' }
        ]
      },
      id: '',
      form: {
        content: this.$env__is_preview ? '测试文本' : '',
        interval: this.$env__is_preview ? '7 h' : ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    ...mapActions('admin/task', ['submitEditTask']),
    open({ content, interval, id }) {
      this.form.id = id
      this.form.content = content
      this.form.interval = interval
      this.show = true
    },
    handleCancel() {
      this.show = false
    },
    async handleSubmit() {
      try {
        let rst = await this.submitEditTask(this.form)
        this.$message.success(rst.msg || '添加成功')
      } catch (err) {
        this.$message.error(err.msg || '添加失败')
      }
      this.show = false
    }
  }
}
</script>
