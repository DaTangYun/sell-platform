<!-- 
 -->
<template>
  <div>
    <div class="wode">
      <h4>
        优惠活动
      </h4>
      <activity :activelist="disactive"></activity>
      <pagination
        :total="total"
        :length="disactive.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
import activity from 'components/discontComponents/activity.vue'
export default {
  name: 'Wodehuodong',
  components: {
    activity,
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      disactive: [],
      activeName: 'first'
    }
  },
  computed: {
    ...mapGetters(['useractiveprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.activelists()
      // this.useractivelist()
    })
  },
  methods: {
    async activelists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('activelist', {
        page,
        limit,
        title: '',
        user_id: this.$route.params.id
      })
      console.log(info)
      this.disactive = info.active
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.activelists()
    },
    async useractivelist() {
      const { page, limit } = this
      const info = await this.$store.dispatch('useractiveprofile', {
        page,
        limit
      })
      console.log(info)
      this.total = info.total
    }
  }
}
</script>
<style lang='less' scoped>
.wode {
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 6px;
  width: 984px;
  height: 884px;
  h4 {
    font-size: 20px;
    padding-left: 20px;
  }
}
</style>
