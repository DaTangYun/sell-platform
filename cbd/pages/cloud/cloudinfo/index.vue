<template>
  <div class="head w">
    <div class="head-left">
      <cloudTitle :titlename="'信息需求'" @changecate="changecate"></cloudTitle>
      <div v-show="infolist.length" class="headline-content">
        <ul class="headline-contentul">
          <nuxt-link v-for="(item,index) in infolist" :key="index" tag="li" :to="{name: 'cloud-cloudinfo-id',params: {id: item.id}}">
            <div class="headlineimg">
              <img :src="item.cover" alt="">
            </div>
            <div class="headlinelic">
              <h3>
                {{ item.title }}
              </h3>
              <p>
                {{ item.desc }}                      
              </p>
              <div class="headlispan">
                <span>
                  {{ item.cate_name }}
                </span>
                <span>
                  {{ item.createtime }}
                </span>
                <span>
                  <img src="@/assets/images/eye.png" alt="">
                  {{ item.reading_count }}
                </span>
              </div>
            </div>
          </nuxt-link>
        </ul>
        <pagination
          :total="infototal"
          :length="infolist.length"
          :pagesize="limit"
          @currentchange="handlecurrentchange"
          @prev="handlecurrentchange"
          @next="handlecurrentchange"
        ></pagination>
      </div>
    </div>
    <RightComponent :publish="publish" :tpath="tpath"></RightComponent>
  </div>
</template>
<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination,
    RightComponent
  },
  meta: {
    title: '信息'
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      cateid: 0,
      title: '',
      publish: '发表信息',
      tpath: '/submitxx'
    }
  },
  head() {
    return {
      title: this.messageMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'messageMetadesc',
          name: 'description',
          content: this.messageMeta.seo_desc
        },
        {
          hid: 'messageMetaKeyword',
          name: 'keyword',
          content: this.messageMeta.seo_keyword
        },
        {
          hid: 'messageMetaContent',
          name: 'content',
          content: this.messageMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['infolist', 'infototal', 'messageMeta'])
  },
  watch: {
    $route(route) {
      this.title = route.query.title
      this.infolists()
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
      this.infolists()
    },
    async infolists() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      await this.$store.dispatch('infolist', {
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
      this.infolists()
    },
    changecate(val) {
      this.cateid = val.cate_id
    }
  }
}
</script>
<style lang='less' scoped>
.head {
  width: 1210px;
  height: 100%;
  display: flex;
}
.head-index {
  width: 1210px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 56px;
  box-sizing: border-box;
  .head-left {
    width: 950px;
    margin-right: 12px;
  }
}
.headline-category {
  width: 950px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  span {
    color: #282d38;
    margin-right: 23px;
  }
  ul {
    display: flex;
    li {
      width: 82px;
      height: 31px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 21px;
      text-align: center;
      line-height: 31px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
  }
}
.headline-content {
  position: relative;
  width: 950px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 24px 24px 40px;
  box-sizing: border-box;
  height: 1397px;
  ul {
    margin-bottom: 50px;
    li {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 11px 0;
      border-bottom: 1px dashed #e6e6e6;
      cursor: pointer;
      .headlineimg {
        width: 226px;
        height: 170px;
        background-color: #ebebeb;
        margin-right: 19px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .headlinelic {
        h3 {
          line-height: 40px;
        }
        p {
          line-height: 26px;
          width: 657px;
        }
        .headlispan {
          margin-top: 20px;
          display: flex;
          color: #616975;
          line-height: 30px;
          span {
            &:first-child {
              display: block;
              width: 78px;
              height: 30px;
              background: rgba(241, 242, 246, 1);
              border-radius: 6px;
              color: #747d8c;
              text-align: center;
              line-height: 30px;
              margin-right: 56px;
            }
            &:last-child {
              margin-left: 56px;
              img {
                margin-right: 7px;
              }
            }
          }
        }
      }
    }
  }
  .pagnation {
    width: 902px;
    margin-top: 95px;
    text-align: center;
  }
}
</style>
