<!--  -->
<template>
  <div class="w">
    <div class="authen">
      <div class="authen-title">
        认证会员
      </div>
      <div class="authen-form">
        <el-form :label-position="labelPosition" label-width="80px">
          <div class="my-ploader1">
            <el-upload
              class="avatar-uploader my-uoploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <el-button size="small">
                上传头像
              </el-button>
            </el-upload>  
          </div>
          <el-form-item label="用户名称:" class="yonghumingcheng">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <div class="admins">
            <el-radio v-model="radio" label="1">
              个人用户
            </el-radio>
            <el-radio v-model="radio" label="2">
              企业用户
            </el-radio>            
          </div>
          <div class="my-uploadertest">
            <el-upload
              class="avatar-uploader my-uploader2"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <p>
                上传身份证/营业执照
              </p>            
            </el-upload>   
          </div>
          <el-form-item label="过期时间:" class="yonghumingcheng">
            <el-input v-model="form.time"></el-input>
          </el-form-item>
          <el-form-item label="所在地区:" class="yonghumingcheng">
            <area-select
              v-model="selected"
              type="text"
              :data="pcaa"
              :level="2"
              class="specicalselect"
              :placeholders="placeholders"
            ></area-select>
          </el-form-item>
          <el-form-item label="个人签名">
            <el-input v-model="form.desc" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button id="firstsubmit" type="primary" @click="onSubmit">
              立即创建
            </el-button>
          </el-form-item>
        </el-form>        
      </div>
    </div>
  </div>
</template>
<script>
import { pca, pcaa } from 'area-data'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        time: ''
      },
      imageUrl: '',
      imageUrl2: '',
      radio: '1',
      labelPosition: 'left',
      selected: [],
      pca: pca,
      pcaa: pcaa,
      placeholders: ['省', '市', '区']
    }
  },
  methods: {
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(index)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit() {
      console.log('submit')
    }
  }
}
</script>
<style lang='less'>
.authen {
  width: 100%;
  height: 1243px;
  border-radius: 6px;
  background-color: #fff;
  margin-top: 52px;
  margin-bottom: 289px;
  box-sizing: border-box;
  .authen-title {
    height: 60px;
    width: 100%;
    line-height: 60px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 20px;
    color: #282d38;
    border-bottom: 2px solid #f1f2f6;
  }
}
.my-ploader1 {
  .my-uoploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    width: 160px;
    height: 160px;
    background-color: #b3b3b3;
    box-sizing: border-box;
    margin: 24px 28px 24px 0;
    .avatar-uploader .el-upload {
      background-color: #f1f2f6;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-icon-plus:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.yonghumingcheng {
  margin-top: 40px;
}
.authen {
  .authen-form {
    .el-form {
      padding-left: 28px;
      .el-input__inner {
        width: 376px;
      }
    }
    .el-textarea__inner {
      width: 968px;
      height: 185px;
      resize: none;
    }
    #firstsubmit {
      width: 376px;
      height: 47px;
    }
  }
}
.my-uploadertest {
  margin-top: 20px;
  .avatar-uploader .el-upload {
    width: 185px;
    height: 117px;
    border: 1px solid rgba(225, 226, 230, 1);
    border-radius: 6px;
    position: relative;
    .avatar-uploader .el-upload {
      background-color: #f1f2f6;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 130px;
      line-height: 130px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-icon-plus:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.specicalselect .area-select .area-selected-trigger {
  padding: 0px 3px 19px 51px;
  line-height: 30px;
}
</style>
