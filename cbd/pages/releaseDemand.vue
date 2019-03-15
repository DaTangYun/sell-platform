<!--  -->
<template>
  <div class="submit-message">
    <div class="w">
      <div class="submit-center">
        <div class="messageCon-title">
          发布需求
        </div>
        <div class="form">
          <el-form label-position="left" label-width="80px">
            <el-form-item label="所属地区">
              <no-ssr>
                <area-select id="specicalselect" v-model="selected" type="text" :data="pcaa" :level="2"></area-select>
              </no-ssr>
            </el-form-item>
            <el-form-item label="标题">
              <el-input></el-input>
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
            <el-form-item label="有效期">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="价格">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="价格">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button size="small" type="primary">
                  点击上传
                </el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="内容">
              <el-input type="textarea"></el-input>
            </el-form-item>
          </el-form>
          <div class="button">
            <el-button type="primary">
              确认
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pcaa } from 'area-data'
export default {
  meta: {
    title: '发布需求'
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
      value: '',
      selected: [],
      pcaa: pcaa
    }
  }
}
</script>
<style lang='less'>
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
    .el-input__inner {
      width: 345px;
      height: 32px;
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
.button {
  margin: 0 0 20px 85px;
}
</style>
