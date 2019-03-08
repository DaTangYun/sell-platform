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
        <el-input v-model="formmobile" type="number" placeholder="用户名/手机号" autocomplete="off">
        </el-input>
      </div>
      <div class="s-from-row">
        <el-input v-model="formPassword" type="password" placeholder="登录密码" autocomplete="off">
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
import { mapGetters } from 'vuex'
import Validate from '../assets/js/validate'
// const Cookie = process.client ? require('js-cookie') : undefined
export default {
  layout: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      formError: null,
      formmobile: '',
      formPassword: '',
      redirectURL: '/',
      mobile: 13023025235,
      password: 123456,
      path: ''
    }
  },
  computed: {
    ...mapGetters(['logindata'])
  },
  mounted() {
    this.$nextTick(() => {
      this.initPath()
    })
  },
  methods: {
    initPath() {
      const path = decodeURI(this.$route.query.authUrl)
      console.log(path)
      this.path = path
    },
    handleGoReset() {
      this.$router.push('/reset')
    },
    handleGoRegister() {
      this.$router.push('/register')
    },
    async logindatas() {
      const { mobile, password } = this
      await this.$store.dispatch('logindata', {
        mobile,
        password
      })
    },
    async login() {
      const flag = this.validate()
      if (!flag) {
        return
      }
      const info = await this.$store.dispatch('logindata', {
        mobile: this.formmobile,
        password: this.formPassword
      })
      if (!info) {
        this.$message.error('账号或密码不正确')
      } else {
        this.$message.success('登录成功')
        window.history.back()
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    validate() {
      const mobile = this.formmobile
      const password = this.formPassword
      const phoneflag = Validate.validatePhone(mobile)
      const space = Validate.validateSpace(password)
      if (!phoneflag) {
        this.$message({
          message: '手机号码格式不正确',
          type: 'warning',
          duration: 2000
        })
        return false
      }
      if (space) {
        this.$message({
          message: '密码不能为空',
          type: 'warning',
          duration: 2000
        })
        return false
      }
      return true
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
