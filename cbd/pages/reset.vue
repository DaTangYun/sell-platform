<!--  -->
<template>
  <div>
    <div class="s-login-title">
      <h1>重置密码</h1>
    </div>
    <el-form class="s-form">
      <div class="s-from-row">
        <span>手机号 ：</span>
        <el-input v-model="formLabelAlign.mobile" type="text"></el-input>
      </div>
      <div class="s-from-row">
        <span>验证码 ：</span>
        <el-input v-model="formLabelAlign.captcha" type="text"></el-input>
        <span class="obtain" @click="getAuthCode">
          {{ codeTime }}
        </span>
        <span v-show="codeTime > 0" class="obtain2">
          秒后获取验证码
        </span> 
      </div>
      <div class="s-from-row">
        <span>新密码 ：</span>
        <el-input v-model="formLabelAlign.newpassword" type="password"></el-input>
      </div>
    </el-form>
    <button class="submit-btn" @click="submitpass">
      提交
    </button>
  </div>
</template>
<script>
import Validate from '../assets/js/validate'
export default {
  layout: 'login',
  data() {
    return {
      formLabelAlign: {
        mobile: '',
        captcha: '',
        newpassword: ''
      },
      sendAuthCode: true,
      time: 0,
      validateName: '',
      vtime: '获取验证码',
      timetimer: null,
      codeTime: '获取验证码',
      timer: null,
      code: ''
    }
  },
  methods: {
    async submitpass() {
      const phoneflag = Validate.validatePhone(this.formLabelAlign.mobile)
      if (!phoneflag) {
        this.$message({
          message: '请填写正确的手机号',
          type: 'warning',
          duration: 2000
        })
        return
      }
      if (!Validate.required(this.formLabelAlign.captcha)) {
        this.$message({
          type: 'warning',
          message: '请填写验证码'
        })
        return
      }
      if (
        !Validate.required(this.formLabelAlign.newpassword) ||
        this.formLabelAlign.newpassword.length < 6
      ) {
        this.$message({
          type: 'warning',
          message: '请填写6位以上密码'
        })
        return
      }
      const info = await this.$store.dispatch('userresetpwd', {
        mobile: this.formLabelAlign.mobile,
        password: this.formLabelAlign.newpassword,
        captcha: this.formLabelAlign.captcha
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
        this.$router.push('/login')
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    },
    getAuthCode() {
      const phoneflag = Validate.validatePhone(this.formLabelAlign.mobile)
      if (!phoneflag) {
        this.$message({
          message: '请填写正确的手机号',
          type: 'warning',
          duration: 2000
        })
        return
      }
      const CODE = '获取验证码'
      const date = +new Date()
      const minute = 1 * 60 * 1000
      const codeDate = localStorage.getItem('CODE_RESETDATA')
      // const seconds = (date - codeDate) / 1000
      const residue = Math.round(60 - (date - codeDate) / 1000)
      if (codeDate != null) {
        if (date - codeDate > minute) {
          localStorage.setItem('CODE_RESETDATA', date)
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
        localStorage.setItem('CODE_RESETDATA', date)
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
    async getsms() {
      if (this.formLabelAlign.mobile === '') {
        this.$message.error('请输入手机号')
        return
      }
      const info = await this.$store.dispatch('smsdata', {
        mobile: this.formLabelAlign.mobile,
        event: 'resetpwd'
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.s-login-title {
  h1 {
    height: 201px;
    font-size: 44px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    text-align: center;
    line-height: 281px;
  }
}
.s-form {
  height: 100%;
  padding: 0 71px;
  .s-from-row {
    margin: 0 auto;
    display: flex;
    height: 96px;
    width: 100%;
    position: relative;
    span {
      padding: 0 8px;
      height: 100%;
      display: inline-block;
      width: 20%;
      color: rgba(87, 96, 111, 1);
    }
    input {
      height: 95px;
      box-sizing: border-box;
      border: none;
      background-color: #f5f7fa;
      padding-top: 58px;
      width: 80%;
      font-size: 16px;
      color: rgba(47, 53, 66, 1);
    }
    .obtain,
    .obtain2 {
      position: absolute;
      right: -24px;
      bottom: -7px;
      color: #00a0e9;
      cursor: pointer;
      width: 152px;
    }
    .obtain2 {
      right: -43px;
    }
  }
}
.submit-btn {
  width: 275px;
  height: 48px;
  border: 1px solid rgba(0, 160, 233, 1);
  border-radius: 24px;
  color: rgba(0, 160, 233, 1);
  font-size: 18px;
  margin: 68px 0 0 155px;
  background-color: #f5f7fa;
  &:hover {
    background-color: rgba(0, 160, 233, 1);
    color: #f5f7fa;
    cursor: pointer;
  }
}
</style>
