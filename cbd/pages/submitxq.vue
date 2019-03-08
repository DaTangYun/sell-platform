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
                <area-select id="specicalselect" v-model="selected" type="all" :data="pcaa" :level="2"></area-select>
              </no-ssr>
            </el-form-item>
            <el-form-item label="标题">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item v-if="$route.query.id" label="分类">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in catefl"
                  :key="item.id"
                  :label="item.title"
                  :value="item.title"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="!$route.query.id" label="分类">
              <el-select v-model="value" placeholder="请选择" @change="changez">
                <el-option
                  v-for="item in newarr"
                  :key="item.id"
                  :label="item.title"
                  :value="item.title"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="有效期">
              <el-date-picker
                v-model="starttime"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
              <span>
                至
              </span>
              <el-date-picker
                v-model="endtime"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="价格">
              <el-input v-model="commission"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="mobile"></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="contact"></el-input>
            </el-form-item>
            <el-form-item v-if="$route.query.id" v-model="image" label="图片">
              <div class="ima">
                <img :src="image" alt="">
              </div>
            </el-form-item>
            <el-form-item v-if="!$route.query.id" v-model="image" label="图片">
              <el-upload
                class="avatar-uploader my-uploader"
                :action="`${action}/api/common/upload`"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :on-change="handleonchange"
              >
                <img v-if="imageUrl.length" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload> 
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="desc" type="textarea"></el-input>
            </el-form-item>       
            <el-form-item label="内容">
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
import base from '@/api/base'
import { pcaa } from 'area-data'
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '发布需求'
  },
  // components: {
  //   Tinymce
  // },
  data() {
    return {
      value: '',
      selected: [],
      pcaa: pcaa,
      content: '',
      desc: '',
      fenlei: '',
      title: '',
      image: '',
      fl: [],
      flvalue: '',
      id: 34,
      cateid: 0,
      province: '',
      provincecode: 0,
      citycode: 0,
      city: '',
      areacode: 0,
      area: '',
      imageUrl: '',
      action: '',
      catefl: [],
      commission: '',
      mobile: '',
      contact: '',
      time: '',
      starttime: '',
      endtime: '',
      newarr: [],
      htimage: ''
    }
  },
  computed: {
    ...mapGetters(['helpedit', 'helpedid', 'helpadd', 'addhelp'])
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.id) {
        this.infoedit()
      } else {
        this.xqfl()
      }
    })
  },
  methods: {
    changez(val) {
      for (const item of this.newarr) {
        if (item.title === val) {
          this.cate_id = item.id
        }
      }
    },
    sendhead() {
      if (this.$route.query.id) {
        this.bceditlist()
      } else {
        this.addnewhelp()
      }
    },
    async xqfl() {
      const info = await this.$store.dispatch('helpadd')
      this.newarr = info.cate
    },
    async infoedit() {
      const info = await this.$store.dispatch('helpeditid', {
        id: this.$route.query.id
      })
      this.catefl = info.cate
      if (info.row.province_code) {
        this.selected = [
          info.row.province_code,
          info.row.city_code,
          info.row.area_code
        ]
      }
      for (const item of info.cate) {
        if (item.id === info.row.cate_id) {
          this.value = item.title
        }
      }
      this.title = info.row.title
      this.desc = info.row.desc
      this.image = info.row.image
      this.content = info.row.content
      this.cateid = info.row.cate_id
      this.commission = info.row.commission
      this.mobile = info.row.mobile
      this.contact = info.row.contact
      this.starttime = info.row.start_time
      this.endtime = info.row.end_time
    },
    async bceditlist() {
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
      const { title, image, desc, content, commission, mobile, contact } = this
      const info = await this.$store.dispatch('helpedit', {
        id: this.$route.query.id,
        title,
        cate_id: this.cateid,
        image,
        desc,
        content,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area,
        commission,
        mobile,
        start_time: this.starttime,
        end_time: this.endtime,
        contact
      })
      if (!info) {
        this.$message.error('请检查内容完整')
      } else {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
        window.history.back()
      }
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.image = file.response.data.url
    },
    handleonchange(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.uploadimage(file)
    },
    async uploadimage(file) {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('uploadimages', {
        file
      })
      this.$nuxt.$loading.finish()
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    },
    async addnewhelp() {
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
      const { title, image, desc, content, commission, mobile, contact } = this
      const info = await this.$store.dispatch('addhelplist', {
        title,
        cate_id: this.cateid,
        image,
        desc,
        content,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area,
        commission,
        mobile,
        start_time: this.starttime,
        end_time: this.endtime,
        contact
      })
      if (!info) {
        this.$message.error('请检查内容完整')
      } else {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
        window.history.back()
      }
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
    width: 610px;
    .el-input__inner {
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
.ima {
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
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
