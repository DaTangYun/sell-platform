<!--  -->
<template>
  <div class="rulede">
    <div class="w">
      <div class="rd-top">
        <h4>
          {{ list.title }}
        </h4>
        <div class="rd-top-line">
          <span>
            发表日期：{{ list.createtime }}
          </span>
          <span>
            来源：{{ list.title }}
          </span>
        </div>
      </div>
      <div class="rd-bo">
        <p>
          {{ list.content }}
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
      list: []
    }
  },
  async asyncData(context) {
    if (context.query.flag === '财经法规') {
      await context.store.dispatch('fincetest', {
        scene: 'financeDetail',
        id: context.params.id
      })
    } else {
      await context.store.dispatch('casetest', {
        scene: 'casesDetail',
        id: context.params.id
      })
    }
  },
  head() {
    return {
      title:
        this.$route.query.flag === '财经法规'
          ? this.financeDetailtest.seo_title
          : this.caseDetailtest.seo_title,
      meta: [
        {
          hid: 'description',
          content:
            this.$route.query.flag === '财经法规'
              ? this.financeDetailtest.seo_desc
              : this.caseDetailtest.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          content:
            this.$route.query.flag === '财经法规'
              ? this.financeDetailtest.seo_keyword
              : this.caseDetailtest.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          content:
            this.$route.query.flag === '财经法规'
              ? this.financeDetailtest.seo_content
              : this.caseDetailtest.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'financedetail',
      'casedetail',
      'financeDetailMeta',
      'casesDetailMeta',
      'financeDetailtest',
      'caseDetailtest'
    ])
  },
  mounted() {
    this.$nextTick(() => {
      this.initMeta()
      if (this.$route.query.flag === '财经法规') {
        this.fince()
      } else {
        this.case()
      }
    })
  },
  methods: {
    async fince() {
      const info = await this.$store.dispatch('financedetail', {
        id: this.$route.params.id
      })
      this.list = info.detail
    },
    async case() {
      const info = await this.$store.dispatch('addcasedetail', {
        id: this.$route.params.id
      })
      this.list = info.detail
    },
    initMeta() {
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
