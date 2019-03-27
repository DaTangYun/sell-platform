<!--  -->
<template>
  <div class="exh">
    <div class="exh-left">
      <helpbox>
        <div class="topLine-ul-top">
          <ul>
            <nuxt-link v-for="(item,index) in headlist" :key="index" tag="li" :to="{name: 'cloud-cloudhead-id',params: {id: item.id}}">
              <div class="li-img">
                <img :src="item.cover" alt="">
              </div>
              <p>
                {{ item.title }}
              </p>
            </nuxt-link>
          </ul>
        </div>
        <div class="topLine-ul-bottom">
          <ul>
            <nuxt-link v-for="(item,index) in newlist" :key="index" tag="li" :to="{name: 'cloud-cloudhead-id',params: {id: item.id}}">
              <div>
                {{ item.cate_name }}
              </div>
              <p>
                {{ item.title }}
              </p>
              <span>
                {{ item.createtime }}
              </span>
            </nuxt-link>
          </ul>
        </div>
      </helpbox>
      <helpbox :head="'帮帮我'">
        <help :helplist="helpmelistss" :wid="'203'" :hei="'144'"></help>
      </helpbox>
      <helpbox :head="'能帮会干'">
        <CanDoContent :dishelpdo="help" :wid="'203'" :hei="'144'"></CanDoContent>
      </helpbox>
    </div>
    <div class="exh-right">
      <mybox>
        <ul class="mycase">
          <nuxt-link v-for="(item,index) in caselist" :key="index" :to="{ name: 'ruledetail-id', params: { id: item.id }, query: { flag: '案例' } }" tag="li">
            <div>
              <img :src="item.cover" alt="">
            </div>
          </nuxt-link>
        </ul>
      </mybox>
      <mybox :my="'团队'">
        <ul class="myteam">
          <nuxt-link v-for="(item,index) in dismyteam" :key="index" tag="li" :to="{name: 'myqzone-id-team',params: {id: $route.params.id}}">
            <div class="img"></div>
            {{ item.team_name }}
          </nuxt-link>
        </ul>
      </mybox>
      <mybox :my="'优惠活动'">
        <ul class="wisdom-ul">
          <nuxt-link v-for="(item,index) in activeyouhuilist.active" :key="index" tag="li" :to="{name: 'discont-active',params: {id: item.id}}" class="wisdom-li">
            <div class="wisdom-tri">
              <img src="../../assets/images/right.png" alt="">
            </div>
            <p>
              {{ item.title }}
            </p>
          </nuxt-link>
        </ul>        
      </mybox>
      <mybox :my="'评价'">
        <ul class="myacti">
          <li v-for="(item,index) in plarr" :key="index">
            <h4>
              {{ item.nickname }}
            </h4>
            <p>
              {{ item.content }}
            </p>
          </li>
        </ul>
      </mybox>
    </div>
  </div>
</template>
<script>
// import Topline from 'components/indexComponents/Topline'
import help from 'components/cloudComponents/help.vue'
import helpbox from 'components/myqzoneComponents/helpbox'
import mybox from 'components/myqzoneComponents/mybox'
import CanDoContent from 'common/CanDoContent'
import { mapGetters } from 'vuex'
export default {
  name: 'Exhibition',
  components: {
    // Topline,
    helpbox,
    help,
    CanDoContent,
    mybox
  },
  data() {
    return {
      myacti: [0, 1, 2, 3, 4],
      show: 0,
      list: [],
      headss: [],
      infoss: 0,
      help: [],
      helpmelistss: [],
      plarr: []
    }
  },
  computed: {
    ...mapGetters([
      'showme',
      'dishelpdo',
      'headlist',
      'infolist',
      'helpmelist',
      'caselist',
      'dismyteam',
      'activeyouhuilist'
    ]),
    newlist() {
      return this.headlist.slice(3)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.headlists()
      this.helpmelists()
      this.dishelpdos()
      this.caselists()
      this.myteam()
      this.pinglun()
      this.activelists()
    })
  },
  methods: {
    async pinglun() {
      const { page, limit } = this
      const info = await this.$store.dispatch('usercomment', {
        page,
        limit,
        user_id: this.$route.params.id
      })
      this.plarr = info.data.comment
    },
    async headlists() {
      await this.$store.dispatch('headlist', {
        page: 1,
        limit: 7,
        cate_id: '',
        title: '',
        user_id: this.$route.params.id
      })
    },
    async dishelpdos() {
      const info = await this.$store.dispatch('helpdolist', {
        page: 1,
        limit: 6,
        title: '',
        user_id: this.$route.params.id,
        cate_id: ''
      })
      this.help = info.ability
    },
    async helpmelists() {
      await this.$store.dispatch('helpmelist', {
        page: 1,
        limit: 6,
        title: '',
        userId: this.$route.params.id
      })
      this.helpmelistss = this.helpmelist
    },
    async caselists() {
      await this.$store.dispatch('caselist', {
        page: 1,
        limit: 5,
        title: '',
        userId: this.$route.params.id
      })
      this.list = this.caselist
    },
    async myteam() {
      await this.$store.dispatch('dismyteamlist', {
        page: 1,
        limit: 4,
        user_id: this.$route.params.id
      })
    },
    async activelists() {
      await this.$store.dispatch('activelist', {
        page: 1,
        limit: 5,
        title: '',
        user_id: this.$route.params.id
      })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.exh {
  display: flex;
  .exh-left {
    margin-right: 12px;
  }
}
.mycase {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 103px;
    height: 52px;
    cursor: pointer;
    margin-bottom: 15px;
    &:nth-child(2n-1) {
      margin-right: 8px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.myteam {
  li {
    display: flex;
    height: 35px;
    line-height: 21px;
    color: #57606f;
    font-family: SourceHanSansCN-Normal;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #00a0e9;
    }
    &:hover .img {
      background-image: url('~assets/images/team.png');
    }
    .img {
      width: 13px;
      height: 11px;
      margin-right: 6px;
      background-image: url('~assets/images/teamm.png');
      margin-top: 5px;
    }
  }
}
.wisdom-ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .wisdom-li {
    height: 40px;
    display: flex;
    line-height: 40px;
    border-bottom: 1px dashed #e1e2e6;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
    .wisdom-tri {
      position: relative;
      width: 21px;
      img {
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
      }
    }
    p {
      .ellipsis();
      width: 191px;
    }
  }
}
.myacti {
  li {
    height: 79px;
    border-bottom: 1px dashed #e1e2e6;
    box-sizing: border-box;
    padding-top: 5px;
    &:last-child {
      border-bottom: none;
    }
    h4 {
      margin-bottom: 10px;
      .ellipsis();
      width: 216px;
    }
    p {
      color: #57606f;
      display: block;
      width: 216px;
      font-size: 14px;
      .ellipsis();
    }
  }
}
.topLine-ul-top {
  overflow: hidden;
  ul {
    display: flex;
    margin-bottom: 27px;
    box-sizing: border-box;
    li {
      margin-right: 16px;
      cursor: pointer;
      .li-img {
        width: 203px;
        height: 144px;
        background: rgba(231, 228, 223, 1);
        border-radius: 6px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        .ellipsis();
        line-height: 40px;
        color: #282d38;
        width: 203px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.topLine-ul-bottom {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      margin-bottom: 16px;
      box-sizing: border-box;
      padding-left: 5px;
      cursor: pointer;
      div {
        padding: 0 10px;
        height: 31px;
        background: rgba(241, 242, 246, 1);
        border-radius: 6px;
        box-sizing: border-box;
        margin-right: 5px;
        color: #747d8c;
        text-align: center;
        line-height: 31px;
      }
      p {
        .ellipsis();
        width: 170px;
        display: block;
        box-sizing: border-box;
      }
      span {
        color: #77808f;
      }
    }
  }
}
</style>
