<template>
  <div class="cloudhead w">
    <div class="head-left">
      <cloudTitle :title="title" @changecate="changecate"></cloudTitle>
      <div v-show="headlist.length" class="headline-content">
        <Cloudcontent></Cloudcontent>
        <pagination
          :total="headtotal"
          :length="headlist.length"
          :pagesize="limit"
          :currentpage="currentpage"
          @currentchange="handlecurrentchange"
          @prev="handlecurrentchange"
          @next="handlecurrentchange"
        ></pagination>
      </div>
      <div v-show="!headlist.length" class="spaceimg">
        <img src="@/assets/images/space.png" alt="">
      </div>
    </div>
    <RightComponent :publish="publish" :tpath="tpath"></RightComponent>
  </div>
</template>
<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import Cloudcontent from 'components/cloudComponents/Cloudcontent.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination,
    Cloudcontent,
    RightComponent
  },
  meta: {
    title: '头条'
  },
  data() {
    return {
      page: 1,
      limit: 5,
      total: 0,
      cateid: 0,
      currentpage: 1,
      title: '',
      publish: '发表头条',
      tpath: '/submitheads'
    }
  },
  head() {
    return {
      title: this.topline.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.topline.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.topline.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.topline.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['headlist', 'headtotal', 'topline'])
  },
  watch: {
    $route(route) {
      this.title = route.query.title
      this.headinfo()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.inittitle()
    })
  },
  methods: {
    inittitle() {
      const { title } = this.$route.query
      if (!title) {
        this.title = ''
      } else {
        this.title = title
      }
      this.headinfo()
    },
    async headinfo() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      await this.$store.dispatch('headlist', {
        page,
        limit,
        cate_id: this.cateid,
        title: this.title
      })
      this.$nuxt.$loading.finish()
    },
    handlecurrentchange(params) {
      this.page = params
      this.currentpage = params
      this.headinfo()
    },
    changecate(val) {
      this.cateid = val.cate_id
      this.currentpage = val.page
    }
  }
}
</script>
<style lang='less' scoped>
.cloudhead {
  display: flex;
}
.head-left {
  .headline-content {
    position: relative;
    width: 950px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    padding: 24px 24px 40px;
    box-sizing: border-box;
    height: 1397px;
  }
}
.spaceimg {
  position: relative;
  img {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
