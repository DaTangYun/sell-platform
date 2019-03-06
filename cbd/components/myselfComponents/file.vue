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
            {{ item.name }}
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
            <area-select id="specicalselect" v-model="selected" type="text" :data="pcaa" :level="2"></area-select>
          </no-ssr>
        </el-form-item>
        <el-form-item label="文档标题">
          <div class="input">
            <el-input></el-input>
          </div>
        </el-form-item>
        <el-form-item label="标签">
          <span v-for="(item1,index1) in biaoqian" :key="index1">
            {{ item1 }}
          </span>
        </el-form-item>
        <el-form-item label="上传文件">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
          >
            <el-button size="small" type="primary">
              点击上传
            </el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="submitwendang">
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
      biaoqian: ['合同', '合同', '合同', '合同'],
      selected: [],
      pcaa: pcaa,
      page: 1,
      limit: 4,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['documentprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.documentprofiles()
    })
  },
  methods: {
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
    },
    submitwendang() {
      this.noIndex = 0
    },
    async deletewd(vid) {
      console.log(vid)
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
    }
  }
}
</script>
<style lang='less' scoped>
.file {
  .send {
    cursor: pointer;
    position: absolute;
    top: -42px;
    right: 29px;
    color: #00a0e9;
  }
  ul {
    height: 960px;
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
          width: 456px;
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
    span {
      padding: 0 25px;
      line-height: 30px;
      display: inline-block;
      height: 30px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 10px;
    }
    .button {
      padding-left: 80px;
    }
  }
}
</style>
