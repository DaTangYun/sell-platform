<!--  -->
<template>
  <div class="head">
    <div class="head-left">
      <cloudTitle :titlename="'信息需求'"></cloudTitle>
      <div class="headline-content">
        <ul class="headline-contentul">
          <li v-for="(item,index) in infolist" :key="index">
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
                  <img src="../../assets/images/eye.png" alt="">
                  {{ item.reading_count }}
                </span>
              </div>
            </div>
          </li>
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
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination
  },
  meta: {
    title: '信息'
  },
  data() {
    return {
      page: 1,
      limit: 5,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['infolist', 'infototal'])
  },
  mounted() {
    this.$nextTick(() => {
      this.infolists()
    })
  },
  methods: {
    async infolists() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      const info = await this.$store.dispatch('infolist', { page, limit })
      console.log(info)
      this.$nuxt.$loading.finish()
    },
    handlecurrentchange(params) {
      this.page = params
      this.infolists()
    }
  }
}
</script>
<style lang='less' scoped>
.head {
  width: 100%;
  height: 100%;
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
  ul {
    margin-bottom: 50px;
    li {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 11px 0;
      border-bottom: 1px dashed #e6e6e6;
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
