<!--  -->
<template>
  <div class="file">
    <div class="send" @click="changeindex()">
      发布新文档
    </div>
    <ul v-show="noIndex===0">
      <li v-for="(item,index) in documentprofile" :key="index">
        <div class="file-left">
          <span>
            {{ item.name }}     
          </span>
          <h4>
            {{ item.title }}
          </h4>
          <span>
            {{ item.username }}
          </span>
        </div>
        <div class="file-right">
          <div v-if="item.status === 2">
            已审核
          </div>
          <div v-else-if="item.status === 1">
            审核中
          </div>
          <div v-else-if="item.status === 0">
            未审核
          </div>
          <div @click="deletewd(item.id)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <div v-show="noIndex===1" class="filecon">
      <el-form :label-position="'left'" label-width="80px">
        <el-form-item label="所属地区">
          <no-ssr>
            <area-select id="specicalselect" v-model="selected" type="all" :data="pcaa" :level="2"></area-select>
          </no-ssr>
        </el-form-item>
        <el-form-item label="文档标题">
          <div class="input">
            <el-input v-model="title"></el-input>
          </div>
        </el-form-item>
        <el-form-item v-model="cateid" label="标签" class="bq">
          <!-- eslint-disable-next-line -->
          <a v-for="(item1,index1) in docu" :key="index1" @click="fenleiid(item1,index1)" :class="activeid === index1 ? 'activelink' : ''">
            {{ item1.name }}
          </a>
        </el-form-item>
        <el-form-item v-model="url" label="上传文件">
          <el-upload
            class="upload-demo"
            :action="`${action}/api/common/upload`"
            :on-success="handleAvatarSuccess"
          >
            <el-button size="small" type="primary">
              点击上传
            </el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="addnewdocu">
          确定
        </el-button>
        <el-button type="info">
          取消
        </el-button>
      </div>
    </div>
    <div class="pag">
      <pagination
        :total="total"
        :length="documentprofile.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
  </div>
</template>
<script>
import base from '@/api/base'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
import { pcaa } from 'area-data'
export default {
  name: 'File',
  components: {
    pagination
  },
  data() {
    return {
      file: [0, 1, 2, 3],
      noIndex: 0,
      selected: [],
      pcaa: pcaa,
      page: 1,
      limit: 4,
      total: 0,
      cateid: 0,
      title: '',
      url: '',
      province: '',
      provincecode: 0,
      citycode: 0,
      city: '',
      areacode: 0,
      area: '',
      action: '',
      activeid: 0,
      docu: []
    }
  },
  computed: {
    ...mapGetters(['documentprofile', 'doerror', 'document'])
  },
  mounted() {
    this.$nextTick(() => {
      this.documentprofiles()
      this.initAction()
    })
  },
  methods: {
    fenleiid(item, index) {
      this.cateid = item.id
      this.activeid = index
    },
    async documentprofiles() {
      const { page, limit } = this
      const info = await this.$store.dispatch('documentprofile', {
        page,
        limit,
        cate_id: this.$route.params.id
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.documentprofiles()
    },
    changeindex(index) {
      this.noIndex = 1
      this.documentadd()
    },
    async deletewd(vid) {
      await this.$store
        .dispatch('deletewendang', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.documentprofiles()
        })
    },
    async documentadd() {
      const info = await this.$store.dispatch('docuadd')
      // console.log(info)
      this.docu = info.cate
    },
    handleAvatarSuccess(file, fileList) {
      if (file.code === 0) {
        this.$message({
          type: 'warning',
          message: file.msg
        })
        return
      }
      if (file.msg === '上传成功') {
        this.url = file.data.url
      }
    },
    async addnewdocu() {
      // this.noIndex = 0
      if (this.title === '') {
        this.$message({
          type: 'warning',
          message: '标题必须'
        })
        return
      }
      if (this.url === '') {
        this.$message({
          type: 'warning',
          message: '文件必须'
        })
        return
      }
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
      const { title, url } = this
      const info = await this.$store.dispatch('adddocument', {
        title,
        cate_id: this.cateid,
        url,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area
      })
      if (info.code === 1) {
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.title = ''
        this.cateid = 0
        this.url = ''
        this.province = ''
        this.city = ''
        this.area = ''
        this.noIndex = 0
        this.documentprofiles()
      } else {
        this.$message.error(info.msg)
      }
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.file {
  .send {
    cursor: pointer;
    position: absolute;
    top: -42px;
    right: 29px;
    color: #00a0e9;
  }
  ul {
    li {
      display: flex;
      box-sizing: border-box;
      padding: 0 16px;
      border-bottom: 1px dashed #e6e6e6;
      height: 108px;
      .file-left {
        display: flex;
        margin-right: 150px;
        line-height: 108px;
        span {
          color: #747d8c;
          font-size: 14px;
          display: block;
          width: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 101px;
          &:first-child {
            padding: 0 25px;
            // width: 78px;
            height: 30px;
            background-color: #f1f2f6;
            border-radius: 6px;
            line-height: 30px;
            margin-top: 39px;
            margin-right: 9px;
          }
          &:last-child {
            padding: 0 20px;
          }
        }
        h4 {
          color: #282d38;
          width: 400px;
          .ellipsis();
        }
      }
      .file-right {
        div {
          font-size: 14px;
          height: 37px;
          cursor: pointer;
          &:first-child {
            color: #747d8c;
            margin-top: 35px;
          }
          &:last-child {
            color: #ff6b81;
            &:hover {
              color: #ff6b81;
            }
          }
        }
      }
    }
  }
  .filecon {
    box-sizing: border-box;
    padding: 50px 0 0 38px;
    .input {
      width: 347px;
    }
    .bq {
      a {
        display: inline-block;
        padding: 0 25px;
        line-height: 30px;
        display: inline-block;
        height: 30px;
        background: rgba(241, 242, 246, 1);
        border-radius: 6px;
        margin-right: 10px;
        cursor: pointer;
        // &:hover {
        //   background-color: #00a0e9;
        //   color: #fff;
        // }
        // &:active {
        //   background-color: #00a0e9;
        //   color: #fff;
        // }
      }
      .activelink {
        background-color: #00a0e9;
        color: #fff;
      }
    }
    .button {
      padding-left: 80px;
    }
  }
}
</style>
