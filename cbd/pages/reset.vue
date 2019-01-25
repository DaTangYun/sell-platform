<!--  -->
<template>
  <div>
    <div class="s-login-title">
      <h1>重置密码</h1>
    </div>
    <div class="s-form">
      <div class="s-from-row">
        <span>手机号 ：</span>
        <input type="text">
      </div>
      <div class="s-from-row">
        <span>验证码 ：</span>
        <input type="text">
        <div class="obtain">
          获取验证码
        </div>
      </div>
      <div class="s-from-row">
        <span>新密码 ：</span>
        <input type="text">
      </div>
    </div>
    <button class="submit-btn" @click="goLogin">
      提交
    </button>
  </div>
</template>
<script>
export default {
  layout: 'login',
  methods: {
    goLogin() {
      this.$router.push('/login')
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
    border-bottom: 1px solid rgba(164, 176, 190, 1);
    width: 100%;
    position: relative;
    span {
      padding: 0 8px;
      height: 100%;
      display: inline-block;
      line-height: 156px;
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
    .obtain {
      position: absolute;
      right: 0;
      bottom: 10px;
      color: rgba(0, 160, 233, 1);
      cursor: pointer;
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
