<!--  -->
<template>
  <div class="word">
    <ul>
      <li v-for="(item,index) in documentlist.document" :key="index">
        <span class="bq">
          {{ item.name }}
        </span>
        <div class="word-content">
          <div class="word-title">
            {{ item.title }}
          </div>
          <span>
            {{ item.createtime }}
          </span>
          <span>
            {{ item.username }}
          </span>
        </div>
        <a v-show="item.url.length" class="word-img" :href="item.url"></a>
      </li>
    </ul>
    <pagination
      :total="total"
      :length="documentlist.length"
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
  name: 'Words',
  components: {
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['documentlist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.documentlists()
    })
  },
  methods: {
    async documentlists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('documentlist', {
        page,
        limit,
        title: '',
        user_id: '',
        cate_id: ''
      })
      this.total = Number(info.total)
    },
    handlecurrentchange(params) {
      this.page = params
      this.documentlists()
    }
  }
}
</script>
<style lang='less' scoped>
.word {
  ul {
    margin: 24px 16px;
    li {
      width: 100%;
      display: flex;
      height: 90px;
      border-bottom: 1px dashed #e6e6e6;
      position: relative;
      .bq {
        display: block;
        height: 30px;
        padding: 0 25px;
        margin: 30px 16px 0 8px;
        background-color: #f1f2f6;
        border-radius: 6px;
        text-align: center;
        color: #747d8c;
        line-height: 30px;
        font-size: 14px;
        width: 140px;
        overflow: hidden;
      }
      .word-content {
        width: 630px;
        box-sizing: border-box;
        padding-top: 15px;
        .word-title {
          color: #282d38;
          margin-bottom: 10px;
        }
        span {
          font-size: 14px;
          color: #77808f;
          margin-right: 32px;
        }
      }
      .word-img {
        display: block;
        width: 32px;
        height: 28px;
        position: absolute;
        top: 20px;
        right: 0;
        background-image: url(~assets/images/down.png);
        background-size: 100% 100%;
        &:hover {
          background-image: url(~assets/images/down2.png);
        }
      }
    }
  }
}
</style>
