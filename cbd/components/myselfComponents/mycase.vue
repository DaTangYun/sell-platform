<!--  -->
<template>
  <div class="case">
    <div v-show="fbindex" class="send" @click="changeindex">
      发布新案例
    </div>
    <div v-if="noIndex===0">
      <div class="demand-top">
        <span v-for="(item,index) in demand" :key="index">
          {{ item }}
        </span>
      </div>
      <ul class="demand-bottom">
        <li v-for="(item1,index1) in caseprofile" :key="index1">
          <span>
            {{ item1.title }}
          </span>
          <span v-if="item1.status === '2'">
            已审核
          </span>
          <span v-else-if="item1.status === '1'">
            审核中
          </span>
          <span v-else-if="item1.status === '0'">
            未审核
          </span>
          <div class="lidiv">
            <div @click="bianji(item1.id)">
              编辑
            </div>
            <div>
              删除
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="noIndex===1" class="mycase">
      <el-form :label-position="'left'" label-width="80px">
        <el-form-item label="所属地区">
          <no-ssr>
            <area-select id="specicalselect" v-model="selected" type="all" :data="pcaa" :level="2"></area-select>
          </no-ssr>
        </el-form-item>
        <el-form-item label="案例标题">
          <div class="input">
            <el-input v-model="title"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="作者">
          <div class="input">
            <el-input v-model="author"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="来源">
          <div class="input">
            <el-input v-model="source"></el-input>
          </div>
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
          </el-upload> 
        </el-form-item>
        <el-form-item label="内容">
          <div class="inputtext">
            <el-input v-model="content" :autosize="{ minRows: 10, maxRows: 12}" type="textarea"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="addnewcase">
          确定
        </el-button>
        <el-button type="info" @click="cancel">
          取消
        </el-button>
      </div>
    </div>
    <div class="pag">
      <pagination
        :total="total"
        :length="arr.length"
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
import { pcaa } from 'area-data'
import { mapGetters } from 'vuex'
export default {
  name: 'Mycase',
  components: {
    pagination
  },
  data() {
    return {
      cases: [0, 1, 2],
      noIndex: 0,
      selected: [],
      pcaa: pcaa,
      demand: ['标题', '状态', '操作'],
      page: 1,
      limit: 6,
      title: '',
      total: 0,
      author: '',
      cover: '',
      source: '',
      content: '',
      province: '',
      provincecode: 0,
      citycode: 0,
      city: '',
      areacode: 0,
      area: '',
      imageUrl: '',
      action: '',
      arr: [],
      bjindex: false,
      edit: '',
      sendid: 0,
      fbindex: true
    }
  },
  computed: {
    ...mapGetters(['caseprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.caseprofiles()
    })
  },
  methods: {
    async caseprofiles() {
      const { page, limit, title } = this
      const info = await this.$store.dispatch('caseprofile', {
        page,
        limit,
        title
      })
      this.arr = info.cases
      this.total = info.total
    },
    async sendinfo() {
      const { title, author, content, source } = this
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
      const info = await this.$store.dispatch('addcases', {
        title,
        author,
        cover: this.cover,
        content,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area,
        source
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
        this.noIndex = 0
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    },
    addnewcase() {
      if (!this.edit) {
        // 编辑信息
        this.addnewcase = true
        this.bcbjinfo()
      } else {
        // 发布新信息
        this.sendinfo()
      }
    },
    handlecurrentchange(params) {
      this.page = params
      this.caseprofiles()
    },
    changeindex() {
      this.noIndex = 1
      this.selected = []
      this.edit = true
      this.title = ''
      this.author = ''
      this.cover = ''
      this.content = ''
      this.province = ''
      this.city = ''
      this.area = ''
      this.source = ''
      this.provincecode = ''
      this.citycode = ''
      this.areacode = ''
      this.province_code = ''
      this.city_code = ''
      this.area_code = ''
      this.bjindex = false
    },
    cancel() {
      this.noIndex = 0
      this.fbindex = true
    },
    bianji(vid) {
      this.fbindex = false
      this.edit = false
      this.noIndex = 1
      this.bjindex = true
      this.bjcaseinfo(vid)
      this.sendid = vid
    },
    handleAvatarSuccess(res, file, index) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.cover = file.response.data.url
    },
    handleonchange(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.cover = file.response.data.url
    },
    initAction() {
      this.action = process.client ? '' : base.dev
    },
    async bjcaseinfo(vid) {
      const info = await this.$store.dispatch('getcaseinfo', {
        id: vid
      })
      if (info.row.province_code) {
        this.selected = [
          info.row.province_code,
          info.row.city_code,
          info.row.area_code
        ]
      }
      this.author = info.row.author
      this.source = info.row.source
      this.title = info.row.title
      this.desc = info.row.desc
      this.imageUrl = info.row.cover
      this.content = info.row.content
    },
    async bcbjinfo() {
      const { title, author, content, source, cover } = this
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
      const info = await this.$store.dispatch('qdcaseinfo', {
        id: this.sendid,
        title,
        author,
        cover,
        content,
        province: this.province,
        province_code: this.provincecode,
        city_code: this.citycode,
        city: this.city,
        area_code: this.areacode,
        area: this.area,
        source
      })
      if (info.code === 1) {
        this.$message.success(info.msg)
        this.fbindex = true
        this.noIndex = 0
      } else {
        this.$message({
          type: 'warning',
          message: info.msg
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.case {
  position: relative;
}
.send {
  cursor: pointer;
  position: absolute;
  top: -42px;
  right: 29px;
  color: #00a0e9;
}
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  padding: 0 10px;
  box-sizing: border-box;
  span {
    display: inline-block;
    text-align: center;
    width: 306px;
  }
}
.demand-bottom {
  height: 904px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    span {
      // padding: 0 23px;
      width: 306px;
      text-align: center;
      line-height: 96px;
      &:first-child {
        display: inline-block;
        line-height: 20px;
        margin-top: 25px;
        .ellipsis();
      }
      &:nth-child(5) {
        margin-left: 37px;
      }
    }
    div {
      margin-left: 10px;
      width: 306px;
      text-align: center;
      cursor: pointer;
      &:first-child {
        color: #747d8c;
        margin-top: 20px;
        margin-bottom: 21px;
        &:hover {
          color: #00a0e9;
        }
      }
      &:last-child {
        color: #ff6b81;
      }
    }
  }
}
.mycase {
  box-sizing: border-box;
  padding: 0 20px;
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
