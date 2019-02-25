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
      <div class="s-from-row">
        <span>手机号 ：</span>
        <input type="text">
      </div>
      <div class="s-from-row">
        <span>密码 ：</span>
        <input type="password">
      </div>
      <div class="s-from-row">
        <span>确认密码 ：</span>
        <input type="password">
      </div>
      <div class="s-from-row">
        <span>验证码 ：</span>
        <input type="text">
        <span v-show="sendAuthCode" class="obtain" @click="getAuthCode">
          获取验证码
        </span>
        <span v-show="!sendAuthCode" class="obtain">
          {{ time }}秒后发送验证码
        </span>
      </div>
      <div class="checked">
        <el-checkbox v-model="checked">
          同意网站服务条款
        </el-checkbox>
      </div>
    </div>
    <button class="submit-btn" @click="getLogin">
      登录
    </button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'login',
  data() {
    return {
      checked: true,
      sendAuthCode: true,
      time: 0
    }
  },
  methods: {
    getLogin() {
      if (!this.checked) {
        this.$message({
          message: '请勾选服务条款',
          duration: 3000
        })
      } else {
        axios
          .post('/api/user/login')
          .then(res => {
            console.log(res)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getAuthCode() {
      this.sendAuthCode = false
      this.time = 60
      const timetimer = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          this.sendAuthCode = true
          clearInterval(timetimer)
        }
      }, 1000)
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
  .s-from-row {
    margin: 0 auto;
    display: flex;
    height: 77px;
    border-bottom: 1px solid rgba(164, 176, 190, 1);
    width: 100%;
    position: relative;
    span {
      padding: 0 8px;
      height: 100%;
      display: inline-block;
      line-height: 116px;
      width: 20%;
      font-size: 16px;
      color: rgba(87, 96, 111, 1);
    }
    input {
      height: 76px;
      box-sizing: border-box;
      border: none;
      background-color: #f5f7fa;
      padding-top: 38px;
      width: 80%;
      color: rgba(47, 53, 66, 1);
      font-size: 16px;
    }
    .obtain {
      position: absolute;
      right: 0;
      bottom: 10px;
      color: rgba(0, 160, 233, 1);
      cursor: pointer;
      width: 131px;
    }
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
</style>
