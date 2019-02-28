<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in caselist" :key="index">
        <div class="case-img">
          <img :src="item.cover" alt="">
        </div>
        <p class="case-title">                            
          {{ item.title }}                 
        </p>
      </li>
    </ul>
    <pagination
      :total="total"
      :length="caselist.length"
      :pagesize="limit"
      @currentchange="handlecurrentchange"
      @prev="handlecurrentchange"
      @next="handlecurrentchange"
    ></pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Cases',
  components: {
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 6,
      cate_id: 0,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['caselist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.caselists()
    })
  },
  methods: {
    async caselists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('caselist', {
        page,
        limit,
        title: '',
        userId: this.$route.params.id
      })
      this.total = Number(info.total)
    },
    handlecurrentchange(params) {
      this.page = params
      this.caselists()
    }
  }
}
</script>
<style lang='less' scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  li:nth-child(3n) {
    margin-right: 0px;
  }
  li {
    width: 284px;
    margin-right: 18px;
    margin-bottom: 10px;
    .case-img {
      width: 284px;
      height: 201px;
      background: rgba(179, 179, 179, 1);
      border-radius: 6px;
      margin-right: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .case-title {
      color: #282d38;
      line-height: 25px;
    }
  }
}
</style>
