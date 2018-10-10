<template lang="pug">
  .login-box
    slot(name='prepend')
    el-form(:model='form', status-icon='', :rules='rules', ref='form', label-width='0')
      el-form-item(prop='account')
        el-input(type='text', v-model='form.account', autocomplete='off', placeholder='请输入', clearable='')
          span.text-spaced(slot='prepend') 账号
      el-form-item(prop='pass')
        el-input(type='password', v-model='form.pass', autocomplete='off', placeholder='请输入', clearable='')
          span.text-spaced(slot='prepend') 密码
      el-form-item
        el-button.button-inline(type='primary', @click='handleSubmit("form")')
          span.text-spaced 提交
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
    message: String
  },
  data() {
    return {
      form: {
        account: '',
        pass: ''
      },
      rules: {
        account: [
          { required: true, message: '请填写账号', trigger: 'blur' },
          {
            type: 'string',
            max: 64,
            min: 6,
            message: '长度 6~64 个字符',
            trigger: 'change'
          }
        ],
        pass: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          {
            type: 'string',
            max: 64,
            min: 6,
            message: '长度 6~64 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-box
  max-width 360px
  padding 0 1em
  .text-spaced
    display inline-block
    letter-spacing .5em
    text-indent .5em
  .button-inline
    width 100%
    .text-spaced
      display inline-block
      letter-spacing 1.5em
      text-indent 1.5em
</style>
