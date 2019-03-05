<!--  -->
<template>
  <div class="showCon">
    <showmelist v-if="showme.length" :showme="showme"></showmelist>
    <pagination
      :total="total"
      :length="showme.length"
      @currentchange="handlecurrentchange"
      @prev="handlecurrentchange"
      @next="handlecurrentchange"
    ></pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import showmelist from 'common/showmelist'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  layout: 'default',
  components: {
    showmelist,
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 12,
      total: 0
    }
  },
  meta: {
    title: '秀秀我'
  },
  computed: {
    ...mapGetters(['showme'])
  },
  mounted() {
    this.$nextTick(() => {
      this.getShowme()
    })
  },
  methods: {
    async getShowme() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      const info = await this.$store.dispatch('showMe', { page, limit })
      this.$nuxt.$loading.finish()
      this.total = Number(info.total)
      // console.log(this.total)
    },
    handlecurrentchange(params) {
      this.page = params
      this.getShowme()
    }
  }
}
</script>
<style lang='less' scoped>
.showCon {
  width: 1210px;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 56px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 24px 20px 50px;
  height: 520px;
  /deep/.showmeList .showMeitem {
    margin-right: 135px;
    margin-bottom: 64px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
</style>
