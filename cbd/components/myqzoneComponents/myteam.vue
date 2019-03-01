<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'我的团队'">
      <div class="team">
        <ul>
          <nuxt-link v-for="(item,index) in dismyteam" :key="index" tag="li" :to="{name: 'myqzone-id-team-td', params: {td: item.id,id: item.user_id}}">
            <div class="img">
              <img :src="item.image" alt="">
            </div>
            <p>
              {{ item.content }}
              {{ item.id }}
            </p>
          </nuxt-link>
        </ul>
      </div>
      <pagination
        :total="total"
        :length="dismyteam.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </helpbox>
    <nuxt-child />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import pagination from 'components/cloudComponents/pagination.vue'
import helpbox from 'components/myqzoneComponents/helpbox'
export default {
  name: 'Myteam',
  components: {
    helpbox,
    pagination
  },
  meta: {
    title: '团队详情'
  },
  data() {
    return {
      help: [],
      limit: 12,
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['dismyteam'])
  },
  mounted() {
    this.$nextTick(() => {
      this.myteam()
    })
  },
  methods: {
    async myteam() {
      const { page, limit } = this
      const info = await this.$store.dispatch('dismyteamlist', {
        page,
        limit,
        user_id: this.$route.params.id
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.myteam()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.team {
  ul {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    li {
      margin-right: 22px;
      margin-bottom: 10px;
      &:nth-child(3n) {
        margin-right: 0px;
      }
      .img {
        width: 284px;
        height: 201px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        .ellipsis();
        line-height: 30px;
      }
    }
  }
}
</style>
