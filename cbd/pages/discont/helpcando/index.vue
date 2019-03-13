<!--  -->
<template>
  <div class="discont">
    <div class="discont-cont">
      <ul class="cando">
        <nuxt-link
          v-for="(item,index) in help"
          :key="index"
          tag="li"
          :to="{name: 'discont-helpcando-id',params: {id: item.id}}"
          class="candoli"
        >
          <div class="canDome-li-content">
            <div class="ul-img">
              <img :src="item.image" alt="">
            </div>
            <p class="ul-title">
              {{ item.title }}
            </p>
            <div class="price">
              {{ item.price }}
            </div>
          </div>          
        </nuxt-link>
      </ul>
      <pagination
        :total="total"
        :length="help.length"
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
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    pagination,
    RightComponent
  },
  meta: {
    title: '能帮会干'
  },
  data() {
    return {
      help: [],
      page: 1,
      limit: 12,
      total: 0,
      pagesize: 0,
      show: 1,
      publish: '发表需求',
      tpath: '/submitxq'
    }
  },

  head() {
    return {
      title: this.abilityMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'abilityMetadesc',
          name: 'description',
          content: this.abilityMeta.seo_desc
        },
        {
          hid: 'abilityMetaKeyword',
          name: 'keyword',
          content: this.abilityMeta.seo_keyword
        },
        {
          hid: 'abilityMetaContent',
          name: 'content',
          content: this.abilityMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['dishelpdo', 'abilityMeta'])
  },
  mounted() {
    this.$nextTick(() => {
      this.dishelpdos()
    })
  },
  methods: {
    async dishelpdos() {
      const { page, limit } = this
      const info = await this.$store.dispatch('helpdolist', {
        page,
        limit,
        title: '',
        user_id: '',
        cate_id: ''
      })
      this.help = info.ability
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.dishelpdos()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.cando {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  width: 902px;
  .candoli {
    margin-right: 21px;
    cursor: pointer;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    .canDome-li-content {
      width: 284px;
      box-sizing: border-box;
      font-size: 16px;
      .ul-img {
        width: 100%;
        height: 201px;
        border-radius: 6px;
        margin-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ul-title {
        line-height: 26px;
        font-weight: 400;
        color: rgba(40, 45, 56, 1);
        font-size: 16px;
        .ellipsis();
        display: block;
      }
      .price {
        line-height: 22px;
        font-size: 14px;
        height: 32px;
        color: rgba(255, 99, 72, 1);
      }
    }
  }
}
.discont {
  margin-bottom: 56px;
  display: flex;
  height: 1553px;
  .discont-cont {
    width: 950px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
    height: 1343px;
  }
}
</style>
