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
          {{ item1.title }}}
        </span>
        <span>
          {{ item1.createtime }}}
        </span>
        <span>
          {{ item1.commission }}}以上
        </span>
        <span>
          面谈
        </span>
        <!-- <span>
          0个参与
        </span> -->
        <div v-if="item.status === 2">
          已审核
        </div>
        <div v-else-if="item.status === 1">
          审核中
        </div>
        <div v-else-if="item.status === 0">
          未审核
        </div>
        <!-- <span>
          待选择合作
        </span> -->
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
        '执行样式',
        // '交易状态',
        '状态',
        // '完成状态',
        '操作'
      ],
      page: 1,
      limit: 6,
      title: ''
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
      console.log(this.helpmeprofile)
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.helpmeprofiles()
    }
  }
}
</script>
<style lang='less' scoped>
.demand {
  .demand-top {
    background-color: #f1f2f6;
    color: #747d8c;
    height: 56px;
    line-height: 56px;
    span {
      padding: 0 27px;
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
        padding: 0 23px;
        line-height: 96px;
        &:first-child {
          width: 65px;
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
</style>
