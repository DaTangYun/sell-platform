<!--  -->
<template>
  <div>
    <div class="head-left">
      <cloudTitle></cloudTitle>
      <div class="headline-content">
        <Cloudcontent></Cloudcontent>
        <pagination
          :total="total"
          :length="headlist.length"
          :pagesize="limit"
          @currentchange="handlecurrentchange"
          @prev="handlecurrentchange"
          @next="handlecurrentchange"
        ></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import Cloudcontent from 'components/cloudComponents/Cloudcontent.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination,
    Cloudcontent
  },
  meta: {
    title: '头条'
  },
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['banquan', 'headlist', 'headcate'])
  },
  mounted() {
    this.$nextTick(() => {
      this.headinfo()
    })
  },
  methods: {
    async headinfo() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      const info = await this.$store.dispatch('headlist', { page, limit })
      this.total = info.total
      this.$nuxt.$loading.finish()
    },
    handlecurrentchange(params) {
      this.page = params
      this.headinfo()
    }
  }
}
</script>
<style lang='less' scoped>
.head-left {
  width: 950px;
  .headline-content {
    position: relative;
    width: 950px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    padding: 24px 24px 40px;
    box-sizing: border-box;
  }
}
</style>
