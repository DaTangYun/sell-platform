<!--  -->
<template>
  <div>
    <h4>
      我的评价
    </h4>
    <ul class="mye">
      <li v-for="(item,index) in abilitylists" :key="index">
        <div class="top">
          <h5>
            {{ item.title }}
          </h5>
          <span>
            {{ item.createtime }}
          </span>
        </div>
        <p>
          {{ item.content }}
        </p>
      </li>
    </ul>
    <pagination
      :total="total"
      :length="abilitylists.length"
      :pagesize="limit"
      @currentchange="handlecurrentchange"
      @prev="handlecurrentchange"
      @next="handlecurrentchange"
    ></pagination>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Mypingjia',
  components: {
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0,
      abilityid: 1
    }
  },
  computed: {
    ...mapGetters(['abilitylists'])
  },
  mounted() {
    this.$nextTick(() => {
      this.abilityl()
    })
  },
  methods: {
    async abilityl() {
      const { page, limit } = this
      const info = await this.$store.dispatch('abilityls', {
        page,
        limit,
        ability_id: this.abilityid
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.abilityl()
    }
  }
}
</script>
<style lang='less' scoped>
h4 {
  border-bottom: 1px solid #e1e2e6;
  padding-bottom: 20px;
}
.mye {
  margin-bottom: 30px;
  margin-top: 20px;
  li {
    height: 110px;
    border-bottom: 1px dashed #e1e2e6;
    box-sizing: border-box;
    padding-top: 20px;
    .top {
      margin-bottom: 15px;
      h5 {
        display: inline-block;
        margin-right: 60px;
        font-size: 16px;
        font-weight: 400;
      }
      span {
        color: #57606f;
        font-size: 14px;
      }
      p {
        color: #57606f;
        font-size: 14px;
      }
    }
  }
}
</style>
