<!--  -->
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="修改手机" name="first">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="手机号">
            <div class="tel">
              <el-input v-model="form.tel"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="验证码">
            <div class="tel2">
              <el-input v-model="form.yan"></el-input>
            </div>
            <div class="huoqu">
              获取验证码
            </div>
          </el-form-item>
        </el-form>
        <div class="button">
          提交
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="旧密码">
            <div class="mima">
              <el-input v-model="formLabelAlign.name"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="新密码">
            <div class="mima">
              <el-input v-model="formLabelAlign.region"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="在输入">
            <div class="mima">
              <el-input v-model="formLabelAlign.type"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <div class="button">
          提交
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Safe',
  data() {
    return {
      activeName: 'first',
      form: {
        yan: '',
        tel: ''
      },
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
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
}
.mima {
  width: 376px;
  height: 47px;
}
</style>
