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
              class="avatar-uploader my-uploader"
              :action="`${action}/api/common/upload`"
              :show-file-list="false"
              :on-success="(res,index)=>{return handleHeadSuccess(res, index)}"
            >
              <img v-if="headimage.length" :src="headimage" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <el-button size="small" type="info" plain>
                更换头像
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
              class="avatar-uploader my-uploader"
              :action="`${action}/api/common/upload`"
              :show-file-list="false"
              :on-success="(res,index)=>{return handleHeadS(res, index)}"
            >
              <img v-if="qyimage.length" :src="qyimage" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              <el-button size="small" type="info" plain>
                更换证件图片
              </el-button>
            </el-upload> 
          </div>
          <!-- <el-form-item label="过期时间:" class="yonghumingcheng">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item> -->
          <el-form-item label="所在地区:" class="yonghumingcheng">  
            <no-ssr>
              <area-select
                v-model="selected"
                type="all"
                :data="pcaa"
                :level="2"
                class="specicalselect"
                :placeholders="placeholders"
              ></area-select>
            </no-ssr>
          </el-form-item>
          <el-form-item label="个人签名">
            <el-input v-model="form.desc" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button id="firstsubmit" type="primary" @click="sendinfo">
              立即创建
            </el-button>
          </el-form-item>
        </el-form>        
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { pca, pcaa } from 'area-data'
export default {
  meta: {
    title: '认证会员'
  },
  middleware: 'auth',
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
      placeholders: ['省', '市', '区'],
      image: '',
      action: '',
      headimage: '',
      qyimage: '',
      htheadimage: '',
      htqyimage: ''
    }
  },
  head() {
    return {
      title: this.identMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.identMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.identMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.identMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['useridenty', 'identMeta'])
  },
  methods: {
    async sendinfo() {
      this.selected.map((item, index) => {
        if (index === 0) {
          this.province = Object.values(item)[0]
          this.provincecode = Object.keys(item)[0]
        } else if (index === 1) {
          this.city = Object.values(item)[0]
          this.citycode = Object.keys(item)[0]
        } else {
          this.area = Object.values(item)[0]
          this.areacode = Object.keys(item)[0]
        }
      })
      if (this.form.name === '') {
        this.$message.error('用户名称必须')
        return
      }
      // if (this.form.time === '') {
      //   this.$message.error('过期时间必须')
      //   return
      // }
      if (this.provincecode === '') {
        this.$message.error('省市区必须')
        return
      }
      if (this.radio === '') {
        this.$message.error('用户身份必须')
        return
      }
      if (this.form.desc === '') {
        this.$message.error('签名必须')
        return
      }
      if (this.htheadimage === '') {
        this.$message.error('头像必须')
        return
      }
      if (this.htqyimage === '') {
        this.$message.error('企业图像必须')
        return
      }
      if (this.selected.length === 0) {
        this.$message.error('省市区必须')
        return
      }
      const _this = this
      const info = await this.$store.dispatch('userind', {
        avatar: _this.htheadimage,
        nickname: _this.form.name,
        identy_images: _this.htqyimage,
        type: _this.radio,
        expiretime: _this.form.time,
        bio: _this.form.desc,
        province: _this.province,
        province_code: _this.provincecode,
        city_code: _this.citycode,
        city: _this.city,
        area_code: _this.areacode,
        area: _this.area
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
        window.history.back()
      } else {
        this.$message.error(info.msg)
        window.history.back()
      }
    },
    handleHeadS(res, index) {
      this.qyimage = URL.createObjectURL(index.raw)
      this.htqyimage = index.response.data.url
    },
    handleHeadSuccess(res, index) {
      this.headimage = URL.createObjectURL(index.raw)
      this.htheadimage = index.response.data.url
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
.avatar-uploader .el-upload {
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
</style>
