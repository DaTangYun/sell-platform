<template>
  <div>
    <div class="s-login-title">
      <h1>登录</h1>
      <div class="jump">
        还没有账号？
        <div @click="handleGoRegister">
          立即注册
        </div>
      </div>
    </div>
    <div ref="loginFormRef" class="s-form">
      <div class="s-from-row">
        <el-input v-model="loginForm.username" type="number" placeholder="用户名/手机号" autocomplete="off">
        </el-input>
      </div>
      <div class="s-from-row">
        <el-input v-model="loginForm.password" type="password" placeholder="登录密码" autocomplete="off">
        </el-input>
        <div class="forget" @click="handleGoReset">
          忘记密码？
        </div>
      </div>
    </div>
    <button class="submit-btn" @click="login">
      登录
    </button>
  </div>
</template>
<script>
import '../assets/js/validate.js'
export default {
  layout: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {},
    handleGoReset() {
      this.$router.push('/reset')
    },
    handleGoRegister() {
      this.$router.push('/register')
    }
  }
}
</script>
<style lang="less" scoped>
.s-login-title {
  height: 256px;
  text-align: center;
  h1 {
    height: 201px;
    font-size: 44px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(50, 50, 50, 1);
    text-align: center;
    line-height: 281px;
  }
  .jump {
    div {
      display: inline-block;
      cursor: pointer;
      &:hover {
        color: rgba(0, 160, 233, 1);
      }
    }
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
    input {
      height: 95px;
      box-sizing: border-box;
      border: none;
      background-color: #f5f7fa;
      width: 100%;
      color: rgba(47, 53, 66, 1);
      padding: 58px 0 0px 8px;
      font-size: 16px;
    }
    .forget {
      position: absolute;
      bottom: -24px;
      right: 0;
      &:hover {
        color: rgba(0, 160, 233, 1);
        cursor: pointer;
      }
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
  margin: 93px 0 0 155px;
  background-color: #f5f7fa;
  &:hover {
    background-color: rgba(0, 160, 233, 1);
    color: #f5f7fa;
    cursor: pointer;
  }
}
</style>
