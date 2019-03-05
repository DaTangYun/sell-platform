<!--  -->
<template>
  <div class="secondpart">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in activeprofil" :key="index1">
        <span>
          {{ item1.title }}
        </span>
        <span>
          {{ item1.min_amount }}元
        </span>
        <span>
          {{ item1.start_time }}至{{ item1.end_time }}
        </span>
        <span>
          {{ item1.active_count }}
        </span>
        <span>
          {{ item1.used_active_count }}
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
    <div class="pag">
      <pagination
        :total="total"
        :length="activeprofil.length"
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
export default {
  name: 'Secondpart',
  components: {
    pagination
  },
  meta: {
    title: '我组织的活动'
  },
  data() {
    return {
      demand: ['标题', '优惠金额', '使用期限', '领取次数', '使用次数', '操作'],
      demands: [0, 1, 2],
      page: 1,
      limit: 4,
      total: 0,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['activeprofil'])
  },
  mounted() {
    this.$nextTick(() => {
      this.activeprofils()
    })
  },
  methods: {
    async activeprofils() {
      const { page, limit } = this
      const info = await this.$store.dispatch('activeprofillist', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.activeprofils()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.secondpart {
  background-color: #fff;
}
.secondpart-top {
  position: relative;
  height: 73px;
}
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  span {
    &:first-child {
      display: inline-block;
      width: 146px;
      text-align: center;
    }
    padding: 0 40px;
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
      padding-right: 40px;
      line-height: 96px;
      width: 75px;
      text-align: center;
      &:first-child {
        width: 175px;
        display: inline-block;
        .ellipsis();
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
        padding: 0;
        min-width: 135px;
        text-align: center;
      }
      &:nth-child(3) {
        padding-right: 0;
        width: 135px;
        line-height: 30px;
        text-align: center;
        padding-top: 20px;
      }
      &:nth-child(5) {
        margin-right: 20px;
        color: #ff6b81;
      }
    }
    .lidiv {
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 38px;
      div {
        color: #ff6b81;
        &:first-child {
          color: #747d8c;
          margin-right: 10px;
          &:hover {
            color: #00a0e9;
          }
        }
      }
    }
  }
}
</style>
