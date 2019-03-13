<!--  -->
<template>
  <div>
    <div class="s-login-title">
      <h1>注册</h1>
      <p>
        欢迎注册云牛信息网通行证！
      </p>
    </div>
    <div class="s-form">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="手机号">
          <el-input v-model="formLabelAlign.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="formLabelAlign.repassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="formLabelAlign.captcha"></el-input>
          <span class="obtain" @click="getAuthCode">
            {{ codeTime }}
          </span>
          <span v-show="codeTime > 0" class="obtain2">
            秒后获取验证码
          </span> 
        </el-form-item>
      </el-form>
      <div class="checked">
        <el-checkbox v-model="checked">
          同意网站服务条款
        </el-checkbox>
      </div>
    </div>
    <button class="submit-btn" @click="getLogin">
      注册
    </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Validate from '../assets/js/validate'
export default {
  layout: 'login',
  data() {
    return {
      checked: true,
      sendAuthCode: true,
      time: 0,
      val: [],
      labelPosition: 'left',
      formLabelAlign: {
        mobile: '',
        password: '',
        repassword: '',
        captcha: ''
      },
      validateName: '',
      vtime: '获取验证码',
      timetimer: null,
      codeTime: '获取验证码',
      timer: null,
      code: ''
    }
  },
  head() {
    return {
      title: this.registerMeta.seo_title || '传帮带',
      meta: [
        { hid: 'registerMetadesc', name: 'description', content: this.registerMeta.seo_desc },
        { hid: 'registerMetaKeyword', name: 'keyword', content: this.registerMeta.seo_keyword },
        { hid: 'registerMetaContent', name: 'content', content: this.registerMeta.seo_content }
      ]
    }
  },
  computed: {
    ...mapGetters(['usergister', 'sms', 'registerMeta'])
  },
  methods: {
    getLogin() {
      if (!this.checked) {
        this.$message({
          message: '请勾选服务条款',
          duration: 3000
        })
      }
      const phoneflag = Validate.validatePhone(this.formLabelAlign.mobile)
      if (!phoneflag) {
        this.$message({
          message: '请填写正确的手机号',
          type: 'warning',
          duration: 2000
        })
        return
      }
      if (
        this.formLabelAlign.password.length === 0 ||
        this.formLabelAlign.password.length < 6
      ) {
        this.$message({
          type: 'warning',
          message: '请填写6位以上密码'
        })
        return
      }
      if (
        this.formLabelAlign.repassword.length === 0 ||
        this.formLabelAlign.repassword.length < 6
      ) {
        this.$message({
          type: 'warning',
          message: '请填写6位以上新密码'
        })
        return
      }
      if (this.formLabelAlign.password !== this.formLabelAlign.repassword) {
        this.$message({
          type: 'warning',
          message: '两次输入密码不同'
        })
      }
      if (!Validate.required(this.formLabelAlign.captcha)) {
        this.$message({
          type: 'warning',
          message: '请填写验证码'
        })
        return
      }
      this.getregister()
    },
    getAuthCode() {
      const CODE = '获取验证码'
      const date = +new Date()
      const minute = 1 * 60 * 1000
      const codeDate = localStorage.getItem('CODE_DATE')
      // const seconds = (date - codeDate) / 1000
      const residue = Math.round(60 - (date - codeDate) / 1000)
      if (codeDate != null) {
        if (date - codeDate > minute) {
          localStorage.setItem('CODE_DATE', date)
          if (this.codeTime === CODE) {
            this.codeTime = 60
            this.countDown()
            this.getsms()
          }
        } else {
          this.$message({
            duration: 1000,
            message: `请${residue}秒后再试`
          })
        }
      } else {
        localStorage.setItem('CODE_DATE', date)
        if (this.codeTime === CODE) {
          this.codeTime = 60
          this.countDown()
          this.getsms()
        }
      }
    },
    countDown() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.codeTime > 0) {
        this.codeTime = this.codeTime - 1
        this.timer = setTimeout(() => {
          this.countDown()
        }, 1000)
        this.$once('hook:beforeDestroy', () => {
          clearInterval(this.timer)
        })
      } else {
        clearTimeout(this.timer)
        this.codeTime = '获取验证码'
      }
    },
    async getregister() {
      const { mobile, password, repassword, captcha } = this
      const info = await this.$store.dispatch('logindata', {
        mobile,
        password,
        repassword,
        captcha
      })
      if (!info) {
        this.$message.error('验证码错误')
      }
    },
    async getsms() {
      const info = await this.$store.dispatch('smsdata', {
        mobile: this.formLabelAlign.mobile,
        event: 'register'
      })
      this.$message({
        type: 'warning',
        message: info
      })
    }
  }
}
</script>
<style lang="less" scoped>
.s-login-title {
  height: 193px;
  text-align: center;
  h1 {
    font-size: 44px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    text-align: center;
    height: 173px;
    line-height: 250px;
  }
  p {
    color: rgba(47, 53, 66, 1);
  }
}
.s-form {
  height: 100%;
  padding: 0 71px;
  margin-top: 10px;
  position: relative;
  .obtain,
  .obtain2 {
    position: absolute;
    right: 0;
    bottom: 0px;
    color: rgba(0, 160, 233, 1);
    cursor: pointer;
    width: 131px;
  }
  .obtain2 {
    right: -21px;
  }
  .checked {
    margin-top: 24px;
    font-size: 14px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
  }
}
.submit-btn {
  width: 275px;
  height: 48px;
  border: 1px solid rgba(164, 176, 190, 1);
  border-radius: 24px;
  color: rgba(0, 160, 233, 1);
  font-size: 18px;
  margin: 49px 0 0 155px;
  background-color: #f5f7fa;
  &:hover {
    background-color: rgba(0, 160, 233, 1);
    color: #f5f7fa;
    cursor: pointer;
  }
}
.inputzhuce[data-v-2339929c] {
  width: 358px;
  height: 76px;
  box-sizing: border-box;
  border: none;
  padding-top: 30px;
  color: rgba(47, 53, 66, 1);
  font-size: 16px;
  .el-input[data-v-2339929c] {
    border: 2px solid #f5f7fa;
    input {
      border: none !important;
    }
  }
}
</style>
