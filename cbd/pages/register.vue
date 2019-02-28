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
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="formLabelAlign.type"></el-input>
          <span v-show="sendAuthCode" class="obtain" @click="getAuthCode">
            获取验证码
          </span>
          <span v-show="!sendAuthCode" class="obtain">
            {{ time }}秒后发送验证码
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
        name: '',
        region: '',
        type: ''
      }
    }
  },
  computed: {
    ...mapGetters(['usergister'])
  },
  methods: {
    getLogin() {
      if (!this.checked) {
        this.$message({
          message: '请勾选服务条款',
          duration: 3000
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
  margin-top: 10px;
  position: relative;
  .obtain {
    position: absolute;
    right: 0;
    bottom: 0px;
    color: rgba(0, 160, 233, 1);
    cursor: pointer;
    width: 131px;
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
