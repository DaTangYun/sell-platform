<!--  -->
<template>
  <!-- 头条详情 -->
  <div class="big">
    <div class="headid w">
      <div class="headtop">
        <h4>
          {{ headdetail.title }}
        </h4>
        <div class="topspan">
          <span>
            所属类目：{{ headdetail.cate_name }}
          </span>
          <span>
            发布时间：{{ headdetail.createtime }}
          </span>
          <span>
            浏览次数： {{ headdetail.reading_count }}
          </span>
        </div>
      </div>
      <div class="headbot">
        <p>
          {{ headdetail.content }}             
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '头条'
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['headdetail', 'toplineDetailMeta', 'headDetailMeta'])
  },
  async asyncData(context) {
    await context.store.dispatch('headtest', {
      scene: 'toplineDetail',
      id: context.params.id
    })
    // context.app.head.title = info.seo.seo_title
  },
  head() {
    return {
      title: this.headDetailMeta.seo.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.headDetailMeta.seo.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.headDetailMeta.seo.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.headDetailMeta.seo.seo_content
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.headdetails()
    })
  },
  methods: {
    async headdetails() {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('headdetail', {
        id: this.$route.params.id
      })
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
<style lang='less' scoped>
.big {
  background-color: #fff;
}
.headid {
  background-color: #fff;
  min-height: 500px;
  box-sizing: border-box;
  padding: 0 20px;
}
.headtop {
  height: 123px;
  text-align: center;
  border-bottom: 1px dashed #f1f2f6;
  margin-bottom: 10px;
  h4 {
    line-height: 80px;
  }
  .topspan {
    span {
      margin-right: 44px;
      padding: 0 10px;
      color: #616975;
      font-size: 14px;
    }
  }
}
.headbot {
  p {
    line-height: 30px;
  }
}
</style>
