<!--  -->
<template>
  <div class="submit-message">
    <div class="w">
      <div class="submit-center">
        <div class="messageCon-title">
          发布信息
        </div>
        <div class="form">
          <el-form label-position="left" label-width="80px">
            <el-form-item label="所属地区">
              <no-ssr>
                <area-select id="specicalselect" v-model="selected" type="all" :data="pcaa" :level="2"></area-select>
              </no-ssr>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item v-if="$route.query.id" label="分类">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in newarr"
                  :key="item.id"
                  :label="item.cate_name"
                  :value="item.cate_name"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="!$route.query.id" label="分类">
              <el-select v-model="value" placeholder="请选择" @change="changez">
                <el-option
                  v-for="item in cloudInfo"
                  :key="item.id"
                  :label="item.cate_name"
                  :value="item.cate_name"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-model="cover" label="图片">
              <el-upload
                class="avatar-uploader my-uploader"
                :action="`${action}/api/common/upload`"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl.length" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <el-button size="small" type="info" plain>
                  更换图片
                </el-button>
              </el-upload> 
            </el-form-item>
            <el-form-item label="内容">
              <textpart class="textpart" :showcontent="showcontent" @handletext="handletext"></textpart>
            </el-form-item>            
            <el-form-item label="描述">
              <el-input v-model="content" type="textarea"></el-input>
            </el-form-item>
            <!-- <tinymce ref="editor" :height="500" v-model="content"/> -->
          </el-form>
          <div class="button">
            <el-button type="primary" @click="sendhead">
              确认
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import textpart from 'common/Textpart'
import base from '@/api/base'
import { pcaa } from 'area-data'
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '发布信息'
  },
  components: {
    textpart
  },
  data() {
    return {
      value: '',
      selected: [],
      pcaa: pcaa,
      content: '',
      desc: '',
      fenlei: '',
      title: '',
      cover: '',
      fl: [],
      flvalue: '',
      id: 34,
      province: '',
      provincecode: '',
      citycode: '',
      city: '',
      areacode: '',
      area: '',
      imageUrl: '',
      action: '',
      messagecateid: '',
      newarr: [],
      textcontent: '',
      showcontent: ''
    }
  },
  computed: {
    ...mapGetters(['sendinfo', 'bcinfoedit', 'cloudInfo', 'addinfo'])
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.id) {
        this.infoedit()
      }
    })
  },
  methods: {
    sendhead() {
      if (this.$route.query.id) {
        this.bceditlist()
      } else {
        this.addnewhead()
      }
    },
    async infoedit() {
      const info = await this.$store.dispatch('sendinfolist', {
        id: this.$route.query.id
      })
      this.newarr = info.cate
      if (info.row.province_code) {
        this.selected = [
          info.row.province_code,
          info.row.city_code,
          info.row.area_code
        ]
      }
      for (const item of info.cate) {
        if (item.id === info.row.message_cate_id) {
          this.value = item.cate_name
        }
      }
      this.title = info.row.title
      this.showcontent = info.row.desc
      this.cover = info.row.cover
      this.imageUrl = info.row.cover
      this.content = info.row.content
      this.messagecateid = info.row.message_cate_id
    },
    async bceditlist() {
      const { title, cover } = this
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
      const info = await this.$store.dispatch('bcinfoit', {
        id: this.$route.query.id,
        title,
        message_cate_id: this.messagecateid,
        cover,
        desc: this.content,
        content: this.showcontent,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      if (info.code === 0) {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      } else {
        this.$message({
          type: 'success',
          message: info.msg
        })
        window.history.back()
      }
    },
    changez(val) {
      for (const item of this.cloudInfo) {
        if (item.cate_name === val) {
          this.messagecateid = item.id
        }
      }
    },
    async addnewhead() {
      const { title } = this
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
      const info = await this.$store.dispatch('addinfolist', {
        title,
        message_cate_id: this.messagecateid,
        cover: this.cover,
        desc: this.content,
        content: this.showcontent,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      if (info.code === 0) {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      } else {
        this.$message({
          type: 'success',
          message: info.msg
        })
        window.history.back()
      }
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.cover = file.response.data.url
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    },
    handletext(val) {
      this.showcontent = val
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
