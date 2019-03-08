<!--  -->
<template>
  <div>
    <ul class="shenqingtop">
      <li v-for="(item1,index1) in shenqingtop" :key="index1">
        {{ item1 }}
      </li>
    </ul>
    <ul class="shenqingbo">
      <li v-for="(item,index2) in teamlist" :key="index2">
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.excellence }}
        </span>
        <span>
          {{ item.mobile }}
        </span>
        <span>
          {{ item.createtime }}
        </span>
        <span v-if="item.status === '2'">
          已审核
        </span>
        <span v-else-if="item.status === '1'">
          审核中
        </span>
        <span v-else-if="item.status === '0'">
          未审核
        </span>
        <div class="mbutton">
          <div>
            详情
          </div>
          <div>
            删除
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '申请加入人员'
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      shenqingtop: ['姓名', '擅长服务类型', '电话', '申请时间', '状态', '操作']
    }
  },
  computed: {
    ...mapGetters(['teamlist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.fince()
    })
  },
  methods: {
    async fince() {
      const { page, limit } = this
      const info = await this.$store.dispatch('dismyteamlistmy', {
        page,
        limit,
        id: this.$route.params.teamid
      })
      console.log(info)
    }
  }
}
</script>
<style lang='less' scoped>
.shenqingtop {
  background-color: #f1f2f6;
  display: flex;
  li {
    width: 153px;
    text-align: center;
    height: 56px;
    line-height: 56px;
  }
}
.shenqingbo {
  li {
    display: flex;
    height: 62px;
    border-bottom: 1px solid #e1e2e6;
    span {
      display: block;
      width: 153px;
      text-align: center;
      line-height: 62px;
    }
    .mbutton {
      display: flex;
      line-height: 56px;
      div {
        cursor: pointer;
        &:first-child {
          margin-left: 40px;
          margin-right: 10px;
          color: #00a0e9;
        }
        &:last-child {
          color: #ff6b81;
        }
      }
    }
  }
}
</style>
