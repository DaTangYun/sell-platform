<!--  -->
<template>
  <div class="callme">
    <div class="w">
      <h3>
        {{ callme.title }}
      </h3>
      <!-- eslint-disable-next-line -->
      <div v-html="callme.content">
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '服务支持'
  },
  data() {
    return {
      id: 1
    }
  },
  head() {
    return {
      title: this.callmeDetailtest.seo.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.callmeDetailtest.seo.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.callmeDetailtest.seo.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.callmeDetailtest.seo.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['callme', 'pageMeta', 'callmeDetailtest'])
  },
  watch: {
    $route(route) {
      const { id } = route.query
      this.getcontact(id)
      this.$store.dispatch('callmetest', {
        scene: 'page',
        id
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initInfo()
    })
  },
  methods: {
    initInfo() {
      const { id } = this.$route.query
      this.getcontact(id)
    },
    async getcontact(id) {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('callme', { id })
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
<style lang='less' scoped>
.callme {
  background-color: #fff;
  min-height: 441px;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 50px;
}
h3 {
  margin-bottom: 20px;
  text-align: center;
}
.img {
  margin: 20px 0;
  display: flex;
  img {
    margin-right: 10px;
  }
}
p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:first-child {
    margin-bottom: 0px;
  }
  margin-bottom: 20px;
}
</style>
