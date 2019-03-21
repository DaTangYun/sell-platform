<!--  -->
<template>
  <div class="submit-message">
    <div class="w">
      <div class="submit-center">
        <div class="messageCon-title">
          发布能帮会干
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
                  :label="item.title"
                  :value="item.title"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="!$route.query.id" label="分类">
              <el-select v-model="value" placeholder="请选择" @change="changez">
                <el-option
                  v-for="item in newnbhgfl"
                  :key="item.id"
                  :label="item.title"
                  :value="item.title"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="价格">
              <el-input v-model="price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="mobile"></el-input>
            </el-form-item>
            <el-form-item v-model="cover" label="封面图片">
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
import { mapGetters } from 'vuex'
import { pcaa } from 'area-data'
export default {
  meta: {
    title: '发布能帮会干'
  },
  components: {
    textpart
  },
  data() {
    return {
      value: '',
      newarr: [],
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
      abilityid: '',
      price: '',
      mobile: '',
      showcontent: '',
      textcontent: ''
    }
  },
  computed: {
    ...mapGetters(['abilityeditfl', 'newnbhgfl'])
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.id) {
        this.abilityeditfls()
      } else {
        this.addnbgffl()
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
    async addnbgffl() {
      await this.$store.dispatch('addnewnbhgfl')
    },
    async abilityeditfls() {
      const info = await this.$store.dispatch('abilityeditfl', {
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
        if (item.id === info.row.ability_id) {
          this.value = item.title
        }
      }
      this.title = info.row.title
      this.showcontent = info.row.desc
      this.imageUrl = info.row.image
      this.cover = info.row.image
      this.price = info.row.price
      this.mobile = info.row.mobile
      this.content = info.row.content
      this.abilityid = info.row.ability_id
    },
    async bceditlist() {
      const { title, price, mobile } = this
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
      const info = await this.$store.dispatch('changenbhg', {
        id: this.$route.query.id,
        title,
        ability_id: this.abilityid,
        image: this.cover,
        desc: this.content,
        price,
        mobile,
        content: this.textcontent,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      if (this.selected[0] === '0') {
        this.$message.error('请设置地区')
        return
      }
      if (this.content.trim() === '') {
        this.$message({
          type: 'warning',
          message: '描述必须'
        })
        return
      }
      if (this.textcontent.trim() === '') {
        this.$message({
          type: 'warning',
          message: '描述必须'
        })
        return
      }
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
      for (const item of this.newnbhgfl) {
        if (item.title === val) {
          this.abilityid = item.id
        }
      }
    },
    async addnewhead() {
      const { title, price, mobile } = this
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
      if (this.province === '') {
        this.$message.error('请设置地区')
        return
      }
      const regex = /^([0-9]*[1-9][0-9]*(.[0-9]+)?|[0]+.[0-9]*[1-9][0-9]*)$/
      if (!regex.test(this.price)) {
        this.$message.error('请设置大于0的金额')
        return
      }
      const info = await this.$store.dispatch('addnewabil', {
        price,
        title,
        ability_id: this.abilityid,
        image: this.cover,
        mobile,
        desc: this.content,
        content: this.textcontent,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      if (this.content.trim() === '') {
        this.$message({
          type: 'warning',
          message: '描述必须'
        })
        return
      }
      if (this.textcontent.trim() === '') {
        this.$message({
          type: 'warning',
          message: '内容必须'
        })
        return
      }
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
      // if (info) {
      //   this.$message({
      //     type: 'success',
      //     message: '添加成功'
      //   })
      //   window.history.back()
      // } else {
      //   this.$message.error('添加失败，请检查内容完整重新添加')
      // }
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.cover = file.response.data.url
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    },
    handletext(val) {
      this.textcontent = val
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
      width: 100%;
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
