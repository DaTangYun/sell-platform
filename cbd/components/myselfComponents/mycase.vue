<!--  -->
<template>
  <div class="case">
    <div class="send" @click="changeindex()">
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
            <div>
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
            <area-select id="specicalselect" v-model="selected" type="text" :data="pcaa" :level="2"></area-select>
          </no-ssr>
        </el-form-item>
        <el-form-item label="案例标题">
          <div class="input">
            <el-input></el-input>
          </div>
        </el-form-item>
        <el-form-item label="来源">
          <div class="input">
            <el-input></el-input>
          </div>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :limit="3"
          >
            <el-button size="small" type="primary">
              上传图片
            </el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="内容">
          <div class="inputtext">
            <el-input :autosize="{ minRows: 10, maxRows: 12}" type="textarea"></el-input>
          </div>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="cancel">
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
        :length="caseprofile.length"
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
      total: 0
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
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.caseprofiles()
    },
    changeindex() {
      this.noIndex = 1
    },
    cancel() {
      this.noIndex = 0
    }
  }
}
</script>
<style lang='less' scoped>
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
</style>
