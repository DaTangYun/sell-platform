<!--  -->
<template>
  <div class="help">
    <div class="help-content">
      <ul>
        <nuxt-link v-for="(item,index) in dishelp" :key="index" tag="li" :to="{name: 'discont-help-id',params: {id: item.id}}">
          <div>
            <img :src="item.image" alt="">
          </div>
          <h5>                          
            {{ item.title }}
          </h5>
          <span>
            {{ item.desc }}         
          </span>
        </nuxt-link>
      </ul>
      <pagination
        :total="total"
        :length="dishelp.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
    <RightComponent :publish="publish" :tpath="tpath"></RightComponent>
  </div>
</template>
<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    pagination,
    RightComponent
  },
  meta: {
    title: '帮帮我'
  },
  data() {
    return {
      page: 1,
      limit: 12,
      total: 0,
      dishelp: [],
      publish: '发表需求',
      tpath: '/submitxq'
    }
  },
  head() {
    return {
      title: this.helpmeMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.helpmeMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.helpmeMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.helpmeMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['helpmelist', 'helpmeMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.helpmelists()
    })
  },
  methods: {
    async helpmelists() {
      const { page, limit } = this
      const info = await this.$store.dispatch('helpmelist', {
        page,
        limit,
        title: '',
        userId: ''
      })
      this.dishelp = info.ability
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.helpmelists()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.help {
  display: flex;
  margin-bottom: 56px;
  padding-bottom: 20px;
  box-sizing: border-box;
  .help-content {
    background-color: #fff;
    border-radius: 6px;
    width: 950px;
    margin-right: 12px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 24px;
    margin-bottom: 10px;
    padding-bottom: 50px;
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 950px;
      li {
        margin-bottom: 32px;
        width: 284px;
        margin-right: 20px;
        box-sizing: border-box;
        cursor: pointer;
        &:nth-child(3n) {
          margin-right: 0px;
        }
        div {
          height: 201px;
          background: rgba(179, 179, 179, 1);
          border-radius: 6px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        h5 {
          width: 284px;
          color: #282d38;
          line-height: 20px;
          .ellipsis();
        }
        span {
          display: block;
          width: 284px;
          color: #77808f;
          font-size: 14px;
          .ellipsis();
        }
      }
    }
  }
}
</style>
