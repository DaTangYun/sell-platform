<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'帮帮我'">
      <div class="helpme">
        <help :helplist="helpmelistss"></help>
      </div>
      <pagination
        :total="total"
        :length="helpmelistss.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </helpbox>  
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import help from 'components/cloudComponents/help.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    helpbox,
    help,
    pagination
  },
  data() {
    return {
      helpmelistss: [],
      limit: 6,
      total: 0,
      page: 1
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
        userId: this.$route.params.id
      })
      this.total = info.total
      this.helpmelistss = this.helpmelist
    },
    handlecurrentchange(params) {
      this.page = params
      this.helpmelists()
    }
  }
}
</script>
<style lang='less' scoped>
.helpme {
  border-bottom: 1px dashed #e1e2e6;
  margin-bottom: 10px;
  min-width: 548px;
}
</style>
