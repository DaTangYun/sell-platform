<!--  -->
<template>
  <div class="demand">
    <send :send="{title:'发布新需求', path:'/submitxq'}"></send>
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in helpmeprofile" :key="index1">
        <span>
          {{ item1.title }}
        </span>
        <span>
          {{ item1.createtime }}
        </span>
        <span>
          {{ item1.commission }}以上
        </span>
        <span>
          {{ item1.start_time }}至{{ item1.end_time }}
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
          <nuxt-link :to="{name: 'submitxq', query: {id: item1.id}}" tag="div">
            编辑
          </nuxt-link>
          <div @click="deletewd(item1.id)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <div class="pag">
      <pagination
        :total="total"
        :length="helpmeprofile.length"
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
import send from 'components/myselfComponents/send'
export default {
  name: 'Demand',
  components: {
    pagination,
    send
  },
  data() {
    return {
      demand: [
        '需求标题',
        '发布时间',
        '佣金范围',
        '时间范围',
        // '交易状态',
        '状态',
        // '完成状态',
        '操作'
      ],
      page: 1,
      limit: 6,
      title: '',
      total: 0
    }
  },
  computed: {
    ...mapGetters(['helpmeprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.helpmeprofiles()
    })
  },
  methods: {
    async helpmeprofiles() {
      const { page, limit, title } = this
      const info = await this.$store.dispatch('helpmprofile', {
        page,
        limit,
        title
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.helpmeprofiles()
    },
    async deletewd(vid) {
      await this.$store
        .dispatch('deletehelp', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.helpmeprofiles()
        })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.demand {
  height: 904px;
  position: relative;
  .demand-top {
    background-color: #f1f2f6;
    color: #747d8c;
    height: 56px;
    line-height: 56px;
    span {
      padding: 0 53px;
    }
  }
  .demand-bottom {
    margin-bottom: 30px;
    li {
      border-bottom: 1px dashed #e6e6e6;
      height: 96px;
      box-sizing: border-box;
      display: flex;
      span {
        padding: 0 23px;
        line-height: 96px;
        text-align: center;
        &:first-child {
          width: 155px;
          display: inline-block;
          line-height: 96px;
          .ellipsis();
        }
        &:nth-child(2) {
          width: 124px;
          line-height: 24px;
          padding-top: 20px;
          padding-left: 10px;
        }
        &:nth-child(3) {
          margin-right: 50px;
          width: 97px;
          .ellipsis();
        }
        &:nth-child(4) {
          width: 124px;
          line-height: 24px;
          padding-top: 20px;
          padding-left: 10px;
        }
        &:nth-child(5) {
          width: 100px;
          margin-right: 20px;
        }
      }
      div {
        margin-left: 10px;
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
