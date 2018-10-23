<template lang="pug">
  .login-box
    slot(name='prepend')
    el-form(:model='form', status-icon, :rules='rules', ref='form', label-width='0')
      el-form-item(prop='account')
        el-input(type='text', v-model='form.account', autocomplete='off', placeholder='请输入', clearable)
          span.text-spaced(slot='prepend') 账号
      el-form-item(prop='pass')
        el-input(type='password', v-model='form.pass', autocomplete='off', placeholder='请输入', clearable)
          span.text-spaced(slot='prepend') 密码
      el-form-item(prop='identify')
        el-row(:gutter='24')
          el-col(:span='12')
            identify-code(ref='identify', clickable, :backgroundColorMin='240', :contentWidth='152', :contentHeight='40')
          el-col(:span='12')
            el-input(type='text' v-model='form.identify', autocomplete='off', placeholder='请输入图片内容')
      el-form-item
        el-button.button-inline(type='primary', @click='handleSubmit("form")')
          span.text-spaced 提交
    slot(name='append')
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
    message: String
  },
  mounted() {
    // * for preview
    if (this.$env === 'development') {
      this.form.account = 'admin'
      this.form.pass = 'admin'
      this.form.identify = this.$refs['identify'].identifyCode
    }
  },
  data() {
    const identifyValidator = (rule, value, callback) => {
      if (value === this.$refs['identify'].identifyCode) {
        callback()
      } else {
        callback(new Error('验证码错误!'))
      }
    }
    return {
      form: {
        account: '',
        pass: '',
        identify: ''
      },
      rules: {
        account: [
          { required: true, message: '请填写账号', trigger: 'blur' },
          {
            type: 'string',
            max: 32,
            min: 5,
            message: '长度 5~32 个字符',
            trigger: 'change'
          }
        ],
        pass: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          {
            type: 'string',
            max: 32,
            min: 5,
            message: '长度 5~32 个字符',
            trigger: 'change'
          }
        ],
        identify: [
          {
            required: true,
            message: '请填写图片中出现的内容',
            trigger: 'blur'
          },
          {
            validator: identifyValidator
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$store
            .dispatch('login', {
              account: this.form.account,
              pass: this.form.pass
            })
            .then(res => {
              this.$message.success(res.msg || 'emmm...')
              this.$router.push('/admin/dash')
            })
            .catch(err => {
              this.$message.error(err.msg)
            })
        } else {
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
