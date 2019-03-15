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
            <span v-show="sendAuthCode" class="obtain" @click="getAuthCode">
              获取验证码
            </span>
            <span v-show="!sendAuthCode" class="obtain">
              {{ time }}秒后发送验证码
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
      }
    }
  },
  computed: {
    ...mapGetters(['sms'])
  },
  methods: {
    getAuthCode() {
      this.getsms()
      this.sendAuthCode = false
      this.time = 60
      const timetimer = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          this.sendAuthCode = true
          clearInterval(timetimer)
        }
      }, 1000)
    },
    async getsms() {
      await this.$store.dispatch('smsdata', {
        mobile: this.formLabelAlign.tel,
        event: 'register'
      })
    },
    async submitmobile() {
      await this.$store.dispatch('userchangemobile', {
        mobile: this.formLabelAlign.tel,
        capthca: this.formLabelAlign.yan
      })
    },
    async submitpass() {
      await this.$store.dispatch('userchangepass', {
        oldpassword: this.formLabelAlign.password,
        password: this.formLabelAlign.newpassword,
        repassword: this.formLabelAlign.repassword
      })
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
</style>
