<!--  -->
<template>
  <div class="secondpart">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <myactivepart v-if="useractiveprofile.length" :useractiveprofile="useractiveprofile"></myactivepart>
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
import myactivepart from 'components/myselfcomponents/myactivepart.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Secondpart',
  components: {
    pagination,
    myactivepart
  },
  meta: {
    title: '我参与的活动'
  },
  data() {
    return {
      demand: ['标题', '优惠金额', '使用期限', '状态', '操作'],
      demands: [0, 1, 2],
      page: 1,
      limit: 6,
      total: 0,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['useractiveprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      console.log(11)
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
      console.log(info)
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
</style>
