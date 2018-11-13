<template lang="pug">
  el-dialog(title='新建任务', :visible.sync='show')
    el-form(:model='form')
      el-form-item(label='任务内容', :label-width='formLabelWidth')
        el-input(v-model='form.content', maxlength='64', autocomplete='off')
      el-form-item(label='任务时长', :label-width='formLabelWidth')
        el-select(v-model='form.interval', placeholder='请选择')
          el-option(v-for='item in options.TaskInvertalOptions', :key='item.value', :label='item.label', :value='item.value')
    .dialog-footer(slot='footer')
      el-button(@click='handleCancel', size='small') 取 消
      el-button(type='primary', @click='handleSubmit', size='small') 确 定
</template>

<script>
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
      form: {
        content: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleCancel() {
      this.show = false
    },
    async handleSubmit() {
      // try {
      //   this.$store.dispatch('admin/tasks/')
      // }
      // this.show = false
    }
  }
}
</script>
