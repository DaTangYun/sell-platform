<!--  -->
<template>
  <div class="myqzone">
    <div class="w">
      <div class="myband">
        当前位置：
        <nuxt-link to="/">
          首页
        </nuxt-link>
        >
        个人空间
      </div>
      <div class="myqzone-top">
        <div class="mqzone-t">
          <img :src="usershowmeinfo.avatar" alt="">
        </div>
        <div v-if="usershowmeinfo.is_identy" class="vip">
          <h3>
            {{ usershowmeinfo.nickname }}
          </h3>
          <img :src=" usershowmeinfo.is_identy == 1 ? srcs : nosrc" alt="">
        </div>
        <p>
          {{ usershowmeinfo.bio }}
        </p>
      </div>
      <div class="myqzone-bot">
        <nuxt-child />
      </div>
    </div>    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '个人空间'
  },
  data() {
    return {
      activeIndex: '1',
      bankindex: 1,
      i: 1,
      srcs: require('assets/images/vip.png'),
      nosrc: require('assets/images/vipm.png'),
      showteam: true,
      detailid: 0,
      flag: {}
    }
  },
  head() {
    return {
      title: this.test.seo.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.test.seo.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.test.seo.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.test.seo.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['usershowmeinfo', 'showDetailMeta', 'test'])
  },
  async asyncData(context) {
    await context.store.dispatch('test', {
      scene: 'profile',
      id: context.params.id
    })
    // context.app.head.title = info.seo.seo_title
  },
  mounted() {
    this.$nextTick(() => {
      this.userlist()
    })
  },
  methods: {
    async userlist() {
      await this.$store.dispatch('usershowmeinfo', {
        user_id: this.$route.params.id
      })
    },
    handleSelect(index) {
      this.bankindex = index
    },
    async myteamdetai() {
      console.log(this.detailid)
      const info = await this.$store.dispatch('dismyteamdetail', {
        id: this.detailid
      })
      console.log(info)
    },
    showdetail(item) {
      this.showteam = false
      this.detailid = item.id
      this.myteamdetai()
    },
    back() {
      this.showteam = true
    }
  }
}
</script>
<style lang='less' scoped>
.myqzone {
  background-image: url('~assets/images/cloud.png');
  background-size: 100% 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  .myband {
    margin: 0 0 20px 0;
    color: #fff;
    font-size: 12px;
    a {
      color: #fff;
    }
  }
}
.myqzone-top {
  width: 1210px;
  border-radius: 6px;
  background-image: url('~assets/images/smallcloud.png');
  text-align: center;
  box-sizing: border-box;
  padding: 24px 0;
  margin-bottom: 20px;
  background-size: 100% 100%;
  .mqzone-t {
    width: 100px;
    height: 100px;
    background: rgba(231, 228, 223, 1);
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-left: 550px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .vip {
    position: relative;
    margin: 19px 0 9px;
    img {
      position: absolute;
      top: 13px;
      right: 470px;
    }
  }
  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    margin-right: 23px;
  }
  p {
    display: block;
    color: #fff;
  }
}
.myqzone-bot {
  display: flex;
}
</style>
