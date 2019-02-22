<!--  -->
<template>
  <div>
    <div class="setting-top">
      <h4>基本资料</h4>
    </div>
    <div class="setting-bo">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item>
          <upsetimage></upsetimage>
        </el-form-item>
        <el-form-item label="用户昵称">
          <div class="nich">
            <el-input v-model="formLabelAlign.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="个人签名">
          <div class="nich">
            <el-input v-model="formLabelAlign.qianming" type="textarea" :rows="7"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="button">
        保存
      </div> 
    </div>
  </div>
</template>
<script>
import upsetimage from 'common/upsetimage'
export default {
  name: 'Setting',
  components: {
    upsetimage
  },
  data() {
    return {
      formLabelAlign: {
        name: '',
        qianming: ''
      }
    }
  }
}
</script>
<style lang='less' scoped>
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

.nich {
  width: 376px;
}
</style>
