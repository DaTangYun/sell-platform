<template>
  <div class="activity">
    <div class="en">
      <activity :activelist="disactive"></activity>
      <pagination
        :total="total"
        :length="activeyouhuilist.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
    <RightComponent :publish="publish" :tpath="tpath"></RightComponent>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
import activity from 'components/discontComponents/activity.vue'
import RightComponent from 'components/headlineComponents/rightComponents.vue'
export default {
  components: {
    pagination,
    activity,
    RightComponent
  },
  meta: {
    title: '优惠活动'
  },
  data() {
    return {
      page: 1,
      limit: 9,
      total: 0,
      disactive: [],
      publish: '发表需求',
      tpath: '/submitxq'
    }
  },
  head() {
    return {
      title: this.activeMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.activeMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.activeMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.activeMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['activeyouhuilist', 'activeMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.activelists()
    })
  },
  methods: {
    async activelists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('activelist', {
        page,
        limit,
        title: '',
        userId: ''
      })
      this.disactive = this.activeyouhuilist.active
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.activelists()
    }
  }
}
</script>
<style lang='less' scoped>
.activity {
  width: 950px;
  background-color: #fff;
  margin-right: 12px;
  box-sizing: border-box;
  padding-bottom: 24px;
  display: flex;
  .en {
    width: 950px;
  }
}
</style>
