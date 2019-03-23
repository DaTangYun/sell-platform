<!--  -->
<template>
  <div>
    <helpbox :head="'他的评价'" :wid="'950'">
      <div class="textarea">
        <el-input v-model="contentyh" type="textarea" :placeholder="'请输入内容'" :rows="'7'"></el-input>
        <el-button type="primary" class="publish-btn" @click="fbcomment">
          发布评论
        </el-button>
      </div>
      <ul class="pj">
        <li v-for="(item,index) in pl" :key="index" class="pjli">
          <div class="pjtitle">
            <h5>
              {{ item.nickname }}
            </h5>
            <span>
              {{ item.createtime }}
            </span>
          </div>
          <p class="pjcontent">
            {{ item.content }}
          </p>
        </li>
      </ul>
      <pagination
        :total="total"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </helpbox>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import helpbox from 'components/myqzoneComponents/helpbox'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Myevaluate',
  components: {
    helpbox,
    pagination
  },
  data() {
    return {
      mye: [0, 1, 2],
      limit: 6,
      page: 1,
      total: 0,
      pl: [],
      contentyh: ''
    }
  },
  computed: {
    ...mapGetters([
      'abilitydetail',
      'abilitylists',
      'abilitymessage',
      'abilityDetailMeta',
      'abilityDetailtest'
    ])
  },
  mounted() {
    this.$nextTick(() => {
      this.pinglun()
    })
  },
  methods: {
    async pinglun() {
      const { page, limit } = this
      const info = await this.$store.dispatch('abilityls', {
        page,
        limit,
        ability_id: this.$route.params.id
      })
      this.total = info.total
      this.pl = info.comment
    },
    handlecurrentchange(params) {
      this.page = params
      this.pinglun()
    },
    async addmember() {
      if (!this.contentyh) {
        this.$message.error('请填写内容')
      }
      const info = await this.$store.dispatch('addcom', {
        content: this.contentyh,
        ability_id: this.$route.params.id
      })
      if (info) {
        this.$message.success('评论成功')
        this.pinglun()
      } else {
        this.$message.error('评论频繁，请稍后')
      }
    },
    fbcomment() {
      this.addmember()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.textarea {
  width: 902px;
  border-radius: 6px;
  .publish-btn {
    margin-top: 20px;
  }
}
.pj {
  margin-bottom: 50px;
  .pjli {
    width: 902px;
    border-bottom: 1px dashed #e6e6e6;
    box-sizing: border-box;
    padding-bottom: 24px;
    padding-top: 10px;
    box-sizing: border-box;
    overflow: hidden;
    .pjtitle {
      margin-bottom: 14px;
      display: flex;
      h5 {
        padding-right: 68px;
        .ellipsis();
      }
      span {
        font-size: 14px;
        color: #57606f;
      }
    }
    .pjcontent {
      font-size: 14px;
      color: #57606f;
      // .ellipsis();
    }
  }
}
</style>
