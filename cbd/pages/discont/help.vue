<!--  -->
<template>
  <div class="help">
    <div class="help-content">
      <help :helplist="dishelp"></help>
      <pagination
        :total="total"
        :length="helpmelist.length"
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
import help from 'components/cloudComponents/help.vue'
export default {
  components: {
    pagination,
    help
  },
  meta: {
    title: '帮帮我'
  },
  data() {
    return {
      page: 1,
      limit: 15,
      total: 0,
      dishelp: []
    }
  },
  computed: {
    ...mapGetters(['helpmelist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.helpmelists()
    })
  },
  methods: {
    async helpmelists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('helpmelist', {
        page,
        limit,
        title: '',
        userId: ''
      })
      this.dishelp = this.helpmelist
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.helpmelists()
    }
  }
}
</script>
<style lang='less' scoped>
.help {
  display: flex;
  margin-bottom: 56px;
  .help-content {
    background-color: #fff;
    border-radius: 6px;
    width: 950px;
    margin-right: 12px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 24px;
    margin-bottom: 10px;
  }
}
</style>
