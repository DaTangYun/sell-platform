<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'能帮会干'">
      <CanDoContent :dishelpdo="help"></CanDoContent>
      <pagination
        :total="total"
        :length="help.length"
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
import CanDoContent from 'common/CanDoContent'
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Helpcando',
  components: {
    helpbox,
    CanDoContent,
    pagination
  },
  data() {
    return {
      help: [],
      limit: 6,
      page: 1,
      total: 0
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
        user_id: this.$route.params.id,
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
.helpme {
  border-bottom: 1px dashed #e1e2e6;
  margin-bottom: 10px;
}
</style>
