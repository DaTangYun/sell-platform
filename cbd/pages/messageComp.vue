<!--  -->
<template>
  <div class="submit-message">
    <div class="w">
      <div class="submit-center">
        <div class="messageCon-title">
          发布头条
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
            <el-form-item label="分类">
              <el-select v-model="flvalue" placeholder="请选择">
                <el-option
                  v-for="item in newarr"
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
            <el-form-item label="描述">
              <textpart class="textpart" :showcontent="showcontent" @handletext="handletext"></textpart>
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
import textpart from 'common/Textpart'
import base from '@/api/base'
import { pcaa } from 'area-data'
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '发布头条'
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
      toplinecateid: 0,
      province: '',
      provincecode: 0,
      citycode: 0,
      city: '',
      areacode: 0,
      area: '',
      imageUrl: '',
      action: '',
      newarr: [],
      showcontent: '',
      textcontent: ''
    }
  },
  computed: {
    ...mapGetters(['headedit', 'bcheadedit'])
  },
  watch: {
    selected() {
      // console.log(this.selected)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.headeditlist()
    })
  },
  methods: {
    sendhead() {
      this.bceditlist()
    },
    async headeditlist() {
      const info = await this.$store.dispatch('headedit', {
        id: this.$route.query.id
      })
      console.log(info)
      this.newarr = info.cate
      if (info.row.province_code) {
        this.selected = [
          info.row.province_code,
          info.row.city_code,
          info.row.area_code
        ]
      }
      const id = info.cate.map(item => {
        return item.id
      })
      this.flvalue = info.cate[id.indexOf(info.row.topline_cate_id)].cate_name
      this.fl = info.cate
      this.title = info.row.title
      this.showcontent = info.row.desc
      this.imageUrl = info.row.cover
      this.content = info.row.content
      this.toplinecateid = info.row.topline_cate_id
    },
    async bceditlist() {
      const { title, content } = this
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
      await this.$store.dispatch('bcheadedit', {
        id: this.$route.query.id,
        title,
        topline_cate_id: this.toplinecateid,
        cover: this.cover,
        desc: this.textcontent,
        content,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      this.$message({
        type: 'success',
        message: '修改成功'
      })
      window.history.back()
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.cover = file.response.data.url
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    },
    handletext(val) {
      // console.log(val)
      this.textcontent = val
    }
  }
}
</script>
<style lang='less'>
@import 'vue-area-linkage/dist/index.css';
.ima {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
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
      width: 527px;
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
