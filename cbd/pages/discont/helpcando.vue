<!--  -->
<template>
  <div class="discont">
    <div class="discont-cont">
      <CanDoContent :dishelpdo="help"></CanDoContent>
      <pagination
        :total="total"
        :length="help.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
  </div>   
</template>
<script>
import CanDoContent from 'common/CanDoContent'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CanDoContent,
    pagination
  },
  meta: {
    title: '能帮会干'
  },
  data() {
    return {
      help: [],
      page: 1,
      limit: 15,
      total: 0,
      pagesize: 0
    }
  },
  computed: {
    ...mapGetters(['dishelpdo'])
  },
  mounted() {
    this.$nextTick(() => {
      this.dishelpdos()
    })
  },
  methods: {
    async dishelpdos() {
      const { page, limit } = this
      const info = await this.$store.dispatch('helpdolist', {
        page,
        limit,
        title: '',
        user_id: '',
        cate_id: ''
      })
      this.help = info.ability
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.dishelpdos()
    }
  }
}
</script>
<style lang='less' scoped>
.discont {
  display: flex;
  margin-bottom: 56px;
  .discont-cont {
    width: 950px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
  }
}
</style>
