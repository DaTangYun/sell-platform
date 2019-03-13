<template>
  <div class="w">
    <div class="cloudwisdom">
      <ul class="cloudwisdomui">
        <li v-for="item of helpcloud" :key="item.id" @click="tiaolianjie(item.url)">
          <div>
            <img :src="item.image">
            <!-- {{ item.image }} -->
          </div>
        </li>
      </ul>
      <pagination
        :total="total"
        :length="helpcloud.length"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    pagination
  },
  meta: {
    title: '云智慧'
  },
  data() {
    return {
      page: 1,
      limit: 12,
      total: 0
    }
  },
  head() {
    return {
      title: this.cloudMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.cloudMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.cloudMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.cloudMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['helpcloud', 'cloudMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.gethelpcloud()
    })
  },
  methods: {
    async gethelpcloud() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      const info = await this.$store.dispatch('helpcloudlist', { page, limit })
      this.$nuxt.$loading.finish()
      this.total = Number(info.total)
    },
    handlecurrentchange(params) {
      this.page = params
      this.gethelpcloud()
    },
    tiaolianjie(url) {
      window.open(url, '_blank ')
    }
  }
}
</script>
<style lang='less' scoped>
.cloudwisdom {
  width: 1210px;
  height: 908px;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 24px;
  padding-right: 0;
  margin-bottom: 30px;
  .cloudwisdomui {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      width: 291px;
      height: 168px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      border: 1px solid transparent;
      margin-bottom: 10px;
      transition: all 0.3s;
      cursor: pointer;
      div {
        width: 169px;
        height: 67px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:hover {
        border: 1px solid rgba(230, 230, 230, 1);
        box-shadow: 0px 5px 12px 0px rgba(5, 5, 5, 0.14);
        transform: translateY(-2px);
      }
    }
  }
}
</style>
