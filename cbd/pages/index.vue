<template>
  <section class="index">
    <div class="w">
      <div class="index-top">
        <TopHead :headlist="headlist.topline" :infolist="infolist.message"></TopHead>
        <BigSlider></BigSlider>
        <div class="index-top-right">
          <PublishinTopic></PublishinTopic>
          <Cooperative></Cooperative>
        </div>
      </div>
      <CanDoBox :desc="'云传'" class="specical-box" :list="['头条','信息']" :tzurl="'cloud-cloudhead'" @showMe="showMeMessage">
        <div v-if="headlist.length&& !show" class="message">
          <Topline :list="headlist" :hein="'cloudhead'"></TopLine>
        </div>
        <div v-if="infolist.length && show" class="message">
          <Topline :list="infolist" :hein="'cloudinfo'"></TopLine>
        </div>
      </CanDoBox>
      <div class="showMeContain">
        <CanDoBox :desc="'智帮'" :list="['秀秀我']" :tzurl="'help-show'">
          <showmelist v-if="showme.length" :showme="showme"></showmelist>
        </CanDoBox>
        <div class="showMeRight">
          <wisdomBank :wis="'财经法规'" :smallurl="'help-wisdombank'">
          </wisdomBank>
          <jingdiananli></jingdiananli>        
        </div>
      </div>
      <div class="showMeContain">
        <CanDoBox :desc="'惠带'" :list="['能帮会干']" :tzurl="'discont-helpcando'">
          <CanDoContent :dishelpdo="help"></CanDoContent>
        </CanDoBox>
        <div class="showMeRight">
          <div class="q">
            <helpme v-if="helpmelist.length" :helpmelist="helpmelist"></helpme>
          </div>
          <WisdomBank :wis="'优惠活动'" :smallurl="'discont-active'" class="preferential">
          </WisdomBank>
        </div>
      </div>
    </div>
  </section> 
</template>
<script>
import CanDoBox from 'components/indexComponents/CanDoBox'
import CanDoContent from 'common/CanDoContent'
import WisdomBank from 'components/indexComponents/WisdomBank'
import jingdiananli from 'components/indexComponents/jingdiananli'
import Topline from 'components/indexComponents/Topline'
import helpme from 'components/indexComponents/helpme'
import TopHead from 'components/indexComponents/TopHead'
import BigSlider from 'components/indexComponents/BigSlider'
import Cooperative from 'common/Cooperative'
import PublishinTopic from 'common/PublishinTopic'
import showmelist from 'common/showmelist'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    CanDoBox,
    CanDoContent,
    WisdomBank,
    Topline,
    TopHead,
    BigSlider,
    Cooperative,
    PublishinTopic,
    showmelist,
    jingdiananli,
    helpme
  },
  data() {
    return {
      canDoList: [0, 1, 2, 3, 4, 5],
      imgUrl: require('assets/images/small.png'),
      arr: ['能帮会干', '信息', '头条'],
      show: 0,
      list: [],
      headss: [],
      infoss: 0,
      help: [],
      helpmelistss: []
    }
  },
  head() {
    return {
      title: this.homeMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.homeMeta.seo_desc
        },
        {
          hid: 'descriptionkeyword',
          name: 'keyword',
          content: this.homeMeta.seo_keyword
        },
        {
          hid: 'descriptioncontent',
          name: 'content',
          content: this.homeMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'showme',
      'dishelpdo',
      'headlist',
      'infolist',
      'helpmelist',
      'homeMeta'
    ])
  },
  created() {
    this.setlist()
  },
  mounted() {
    this.$nextTick(() => {
      this.getShowme()
      this.headinfo()
      this.dishelpdos()
      this.helpmelists()
    })
  },
  methods: {
    showMeMessage(data) {
      this.show = data
    },
    async getShowme() {
      await this.$store.dispatch('showMe', { page: 1, limit: 12 })
    },
    async headinfo() {
      await this.$store.dispatch('headlist', {
        page: 1,
        limit: 10,
        cate_id: '',
        title: '',
        user_id: ''
      })
      await this.$store.dispatch('infolist', {
        page: 1,
        limit: 10,
        cate_id: '',
        title: '',
        user_id: ''
      })
    },
    setlist() {
      this.headss = this.headlist.topline
    },
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
    },
    async helpmelists() {
      await this.$store.dispatch('helpmelist', {
        page: 1,
        limit: 6,
        title: '',
        userId: ''
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.index {
  background-color: #f1f2f6;
  padding-bottom: 10px;
  box-sizing: border-box;
  .index-top {
    width: 100%;
    margin: 0 0 32px;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
  }
  .specical-box {
    width: 100%;
    .message {
      width: 100%;
    }
    .title {
      width: 100%;
      background-color: skyblue;
    }
  }
  .can-do-List {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 3px;
    .can-do-item {
      margin-right: 24px;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
  .showMeContain {
    width: 100%;
    display: flex;
    .showMeRight {
      width: 248px;
      .preferential {
        margin-top: 12px;
        width: 248px;
        border-radius: 6px;
        box-sizing: border-box;
        background-color: #fff;
      }
    }
  }
  .wisdom-ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .wisdom-li {
      height: 31px;
      display: flex;
      line-height: 31px;
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
}
</style>
