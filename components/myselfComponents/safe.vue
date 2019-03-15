<!--  -->
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="修改手机" name="first" class="first">
        <el-form ref="form" :model="formLabelAlign" label-width="80px">
          <el-form-item label="手机号">
            <div class="tel">
              <el-input v-model="formLabelAlign.tel"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="验证码">
            <div class="tel2">
              <el-input v-model="formLabelAlign.yan"></el-input>
            </div>
            <span class="obtain" @click="getAuthCode">
              {{ codeTime }}
            </span>
            <span v-show="codeTime > 0" class="obtain2">
              秒后获取验证码
            </span> 
          </el-form-item>
        </el-form>
        <div class="button" @click="submitmobile">
          提交
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="旧密码">
            <div class="mima">
              <el-input v-model="formLabelAlign.password" type="password"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="新密码">
            <div class="mima">
              <el-input v-model="formLabelAlign.newpassword" type="password"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="在输入">
            <div class="mima">
              <el-input v-model="formLabelAlign.repassword" type="password"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <div class="button" @click="submitpass">
          提交
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'login',
  data() {
    return {
      checked: true,
      sendAuthCode: true,
      time: 0,
      val: [],
      labelPosition: 'left',
      activeName: 'first',
      formLabelAlign: {
        tel: '',
        yan: '',
        newpassword: '',
        mobile: '',
        password: '',
        captcha: '',
        repassword: ''
      },
      vtime: '获取验证码',
      timetimer: null,
      codeTime: '获取验证码',
      timer: null,
      code: ''
    }
  },
  computed: {
    ...mapGetters(['sms'])
  },
  methods: {
    getAuthCode() {
      if (this.formLabelAlign.tel === '') {
        this.$message({
          type: 'warning',
          message: '请输入手机号'
        })
        return
      }
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
    async getsms() {
      if (this.formLabelAlign.tel === '') {
        this.$message({
          type: 'warning',
          message: '请输入手机号'
        })
        return
      }
      const info = await this.$store.dispatch('smsdata', {
        mobile: this.formLabelAlign.tel,
        event: 'changemobile'
      })
      if (info.code === 1) {
        this.$message.success({
          message: info.msg,
          duration: 1000
        })
      } else {
        this.$message({
          type: 'warning',
          message: info.msg,
          duration: 1000
        })
      }
    },
    async submitmobile() {
      if (this.formLabelAlign.tel === '') {
        this.$message({
          type: 'warning',
          message: '请填写正确的手机号'
        })
        return
      }
      if (this.formLabelAlign.yan === '') {
        this.$message({
          type: 'warning',
          message: '请填写验证码'
        })
        return
      }
      const info = await this.$store.dispatch('userchangemobile', {
        mobile: this.formLabelAlign.tel,
        capthca: this.formLabelAlign.yan
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    },
    async submitpass() {
      if (this.formLabelAlign.password === '') {
        this.$message({
          type: 'warning',
          message: '请填写旧密码'
        })
        return
      }
      if (this.formLabelAlign.newpassword === '') {
        this.$message({
          type: 'warning',
          message: '请填写新密码'
        })
        return
      }
      if (this.formLabelAlign.repassword === '') {
        this.$message({
          type: 'warning',
          message: '请填写在输入密码'
        })
        return
      }
      const info = await this.$store.dispatch('userchangepass', {
        oldpassword: this.formLabelAlign.password,
        password: this.formLabelAlign.newpassword,
        repassword: this.formLabelAlign.repassword
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
<style lang='less' scoped>
.tel {
  width: 376px;
}
.tel2 {
  width: 221px;
  display: inline-block;
}
.huoqu {
  display: inline-block;
  cursor: pointer;
  width: 155px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  color: #fff;
  background-color: #00a0e9;
  border-radius: 6px;
}
.button {
  width: 376px;
  height: 47px;
  background: rgba(0, 160, 233, 1);
  border-radius: 6px;
  margin-left: 80px;
  text-align: center;
  line-height: 47px;
  color: #fff;
  cursor: pointer;
}
.mima {
  width: 376px;
  height: 47px;
}
.first {
  position: relative;
}
.obtain {
  position: absolute;
  color: #fff;
  cursor: pointer;
  width: 130px;
  height: 40px;
  display: inline-block;
  background-color: #00a0e9;
  border-radius: 6px;
  text-align: center;
  line-height: 40px;
  margin-left: 10px;
}
.obtain2 {
  position: absolute;
  color: #fff;
  right: 0;
  bottom: 0;
}
</style>
