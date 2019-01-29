<!--  -->
<template>
  <div class="submit-message">
    <div class="w">
      <band></band>
      <div class="submit-center">
        <div class="messageCon-title">
          发布信息
        </div>
        <div class="form">
          <el-form label-position="left" label-width="80px">
            <el-form-item label="所属地区">
              <div class="areainp">
              </div>
            </el-form-item>
            <el-form-item label="标题">
              <input type="text">
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="图片">
              <div class="tupian">
                <img src="" alt="">
              </div>
            </el-form-item>
            <el-form-item label="描述">
              <input type="text">
            </el-form-item>
            <el-form-item label="内容">
              <textarea name="" cols="30" rows="10"></textarea>
            </el-form-item>
            <el-form-item label="电话">
              <input type="number" name="">
            </el-form-item>
            <el-form-item label="联系人">
              <input type="text" name="">
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import band from 'common/band.vue'
export default {
  components: {
    band
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>
<style lang='less' scoped>
@import 'vue-area-linkage/dist/index.css';
.submit-center {
  box-sizing: border-box;
  padding-left: 203px;
  .messageCon-title {
    width: 100%;
    line-height: 108px;
    padding-left: 276px;
    box-sizing: border-box;
    font-size: 32px;
    color: rgba(40, 45, 56, 1);
  }
  .form {
    input {
      width: 345px;
      height: 32px;
      border: 1px solid #ddd;
    }
    .tupian {
      width: 226px;
      height: 170px;
      background: rgba(235, 235, 235, 1);
      border-radius: 6px;
    }
    textarea {
      width: 730px;
      height: 301px;
      resize: none;
    }
  }
}
</style>
