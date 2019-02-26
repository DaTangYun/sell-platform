<!--  -->
<template>
  <div class="rules">
    <ul class="rules-span">
      <li v-for="(item,index) in helpwis.cate" :key="index">
        {{ item.name }}
      </li>
    </ul>
    <ul class="rules-news">
      <li v-for="(item,index) in helpwis.finance" :key="index" @click="handledetail(index)">
        <div></div>
        <p>
          {{ item.title }}
        </p>
        <span>
          {{ item.createtime }}
        </span>
      </li>
    </ul>
    <pagination
      :total="total"
      :length="helplength"
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
  name: 'Ruless',
  components: {
    pagination
  },
  data() {
    return {
      total: 0,
      page: 1,
      limit: 12,
      helplength: 0
    }
  },
  computed: {
    ...mapGetters(['helpwis'])
  },
  mounted() {
    this.$nextTick(() => {
      this.financelist()
    })
  },
  methods: {
    handledetail(index) {
      const id = 1
      this.$router.push({ path: `/ruledetail/${id}`, query: { title: index } })
    },
    async financelist() {
      const { page, limit } = this
      await this.$store.dispatch('financelist', {
        page,
        limit,
        cate_id: '',
        title: ''
      })
      this.total = Number(this.helpwis.total)
      this.helplength = this.helpwis.finance.length
      console.log(this.helplength)
    },
    handlecurrentchange(params) {
      console.log(params)
      this.page = params
      this.financelist()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.rules {
  padding: 24px;
  box-sizing: border-box;
  .rules-span {
    box-sizing: border-box;
    display: flex;
    li {
      height: 30px;
      background-color: #f1f2f6;
      padding: 0 25px;
      margin-right: 10px;
      color: #747d8c;
      font-size: 14px;
      line-height: 30px;
      cursor: pointer;
    }
  }
  .rules-news {
    margin-top: 24px;
    border-bottom: 1px dashed #e6e6e6;
    height: 441px;
    margin-bottom: 30px;
    li {
      height: 20px;
      margin-bottom: 10px;
      display: flex;
      cursor: pointer;
      &:hover div {
        background-color: #00a0e9;
      }
      &:hover p,
      &:hover span {
        color: #00a0e9;
      }
      div {
        width: 6px;
        height: 6px;
        background: #ff4757;
        border-radius: 50%;
        margin-top: 12px;
        margin-right: 12px;
      }
      p {
        .ellipsis();
        color: #282d38;
        width: 606px;
        display: block;
        margin-right: 140px;
        font-size: 16px;
      }
      span {
        font-size: 14px;
        color: #77808f;
      }
    }
  }
}
</style>
