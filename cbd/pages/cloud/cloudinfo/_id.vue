<!--  -->
<template>
  <!-- 头条详情 -->
  <div class="big">
    <div class="headid w">
      <div class="headtop">
        <h4>
          {{ infodetail.title }}
        </h4>
        <div class="topspan">
          <span>
            所属类目：{{ infodetail.cate_name }}
          </span>
          <span>
            发布时间：{{ infodetail.createtime }}
          </span>
          <span>
            浏览次数： {{ infodetail.reading_count }}
          </span>
        </div>
      </div>
      <div class="headbot">
        <p>
          {{ infodetail.content }}             
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '信息'
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.messageDetailMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.messageDetailMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.messageDetailMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.messageDetailMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['infodetail', 'messageDetailMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.infodetails()
    })
  },
  methods: {
    async infodetails() {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('infodetail', {
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
  height: 500px;
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
