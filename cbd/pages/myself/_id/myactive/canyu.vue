<!--  -->
<template>
  <div class="secondpart">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in useractiveprofile" :key="index1">
        <span>
          {{ item.desc }}
        </span>
        <span>
          满{{ item.prefer_acount }}减{{ item.min_acount }}
        </span>
        <span>
          {{ item.start_time }}至{{ item.end_time }}
        </span>
        <div v-if="item.status === 2">
          已使用
        </div>
        <div v-else-if="item.status === 1">
          未使用
        </div>
        <div class="lidiv">
          <div>
            使用
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
        :length="useractiveprofile.length"
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
  data() {
    return {
      demand: ['标题', '优惠金额', '使用期限', '状态', '操作'],
      demands: [0, 1, 2],
      page: 1,
      limit: 4,
      total: 0,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['useractiveprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.userpro()
    })
  },
  methods: {
    async userpro() {
      const { page, limit } = this
      const info = await this.$store.dispatch('useractiveprofile', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.userpro()
    }
  }
}
</script>
<style lang='less' scoped>
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
      &:first-child {
        width: 65px;
        display: inline-block;
        line-height: 20px;
        margin-top: 25px;
        margin-right: 35px;
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
      }
      &:nth-child(3) {
        margin-right: 20px;
        padding-right: 30px;
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
