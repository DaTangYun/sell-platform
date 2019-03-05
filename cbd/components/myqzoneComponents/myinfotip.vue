<!--  -->
<template>
  <div>
    <helpbox :head="'信息'" :wid="'950'">
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
        :total="total"
        :length="infolist.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </helpbox>
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Myheadtip',
  components: {
    helpbox,
    pagination
  },
  data() {
    return {
      page: 1,
      limit: 3,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['infolist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.headinfo()
    })
  },
  methods: {
    async headinfo() {
      this.$nuxt.$loading.start()
      const { page, limit } = this
      const info = await this.$store.dispatch('infolist', {
        page,
        limit,
        cate_id: this.$route.params.id,
        title: ''
      })
      this.total = info.total
      this.$nuxt.$loading.finish()
    },
    handlecurrentchange(params) {
      this.page = params
      this.headinfo()
    }
  }
}
</script>
<style lang='less' scoped>
ul {
  margin-bottom: 20px;
  min-height: 1040px;
  li {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding-top: 31px;
    height: 232px;
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
        min-height: 80px;
        overflow: hidden;
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
</style>
