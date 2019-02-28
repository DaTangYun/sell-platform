<!--  -->
<template>
  <div class="cloudhead w">
    <div class="head-left">
      <cloudTitle @changecate="changecate"></cloudTitle>
      <div class="headline-content">
        <Cloudcontent></Cloudcontent>
        <pagination
          :total="headtotal"
          :length="headlist.length"
          :pagesize="limit"
          :currentpage="currentpage"
          @currentchange="handlecurrentchange"
          @prev="handlecurrentchange"
          @next="handlecurrentchange"
        ></pagination>
      </div>
    </div>
    <RightComponent></RightComponent>
  </div>
</template>
<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import Cloudcontent from 'components/cloudComponents/Cloudcontent.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination,
    Cloudcontent,
    RightComponent
  },
  meta: {
    title: '头条'
  },
  data() {
    return {
      page: 1,
      limit: 5,
      total: 0,
      cateid: 0,
      currentpage: 1
    }
  },
  computed: {
    ...mapGetters(['headlist', 'headtotal'])
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
      await this.$store.dispatch('headlist', {
        page,
        limit,
        cate_id: this.cateid,
        title: ''
      })
      this.$nuxt.$loading.finish()
    },
    handlecurrentchange(params) {
      this.page = params
      this.currentpage = params
      this.headinfo()
    },
    changecate(val) {
      this.cateid = val.cate_id
      this.currentpage = val.page
    }
  }
}
</script>
<style lang='less' scoped>
.cloudhead {
  display: flex;
}
.head-left {
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
