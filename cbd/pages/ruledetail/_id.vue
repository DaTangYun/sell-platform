<!--  -->
<template>
  <div class="rulede">
    <div class="w">
      <div class="rd-top">
        <h4>
          {{ financedetail.title }}
        </h4>
        <div class="rd-top-line">
          <span>
            发表日期：{{ financedetail.createtime }}
          </span>
          <span>
            来源：{{ financedetail.title }}
          </span>
        </div>
      </div>
      <div class="rd-bo">
        <p>
          {{ financedetail.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '智慧库详情页'
  },
  data() {
    return {
      fin: []
    }
  },
  computed: {
    ...mapGetters(['financedetail'])
  },
  mounted() {
    this.$nextTick(() => {
      this.initMeta()
      this.fince()
    })
  },
  methods: {
    async fince() {
      await this.$store.dispatch('financedetail', {
        id: this.$route.params.id
      })
    },
    initMeta() {
      // const { title } = this.$route.query
      // this.meta.title = title
      if (this.$route.path === '/ruledetail') {
        document
          .querySelector('body')
          .setAttribute('style', 'background-color:#fff')
      }
    }
  }
}
</script>
<style lang='less' scoped>
.rd-top {
  text-align: center;
  border-bottom: 1px solid #e1e2e6;
  padding-top: 20px;
  padding-bottom: 10px;
  h4 {
    font-size: 24px;
    color: #282d38;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
  }
  span {
    color: #747d8c;
    margin-right: 15px;
  }
}
.rd-bo {
  box-sizing: border-box;
  padding: 20px 0;
}
.rulede {
  background-color: #fff;
  min-height: 442px;
}
</style>
