<template>
  <section class="index">
    <div class="w">
      <div class="index-top">
        <TopHead></TopHead>
        <BigSlider></BigSlider>
        <div class="index-top-right">
          <PublishinTopic :publish="'发表需求'"></PublishinTopic>
          <Cooperative></Cooperative>
        </div>
      </div>
      <CanDoBox :desc="'云传'" class="specical-box" :list="['头条','信息']" @showMe="showMeMessage">
        <div v-if="show == 0" class="message">
          <Topline></TopLine>
        </div>
        <div v-if="show == 1" class="title">
          666
        </div>
      </CanDoBox>
      <div class="showMeContain">
        <CanDoBox :desc="'智帮'" :list="['秀秀我']" :to="{name:'help-show'}">
          <showmelist></showmelist>
        </CanDoBox>
        <div class="showMeRight">
          <wisdomBank :wis="'智慧库'">
            <Wisdomcbox></Wisdomcbox>
          </wisdomBank>
          <Cloudwisdom></Cloudwisdom>
        </div>
      </div>
      <div class="showMeContain">
        <CanDoBox :desc="'惠带'" :list="['能帮会干']" :to="'/discont/helpcando'">
          <CanDoContent></CanDoContent>
        </CanDoBox>
        <div class="showMeRight">
          <WisdomBank :wis="'帮帮我'">
            <Wisdomcbox :url="imgUrl"></Wisdomcbox>
          </WisdomBank>
          <WisdomBank :wis="'优惠活动'" class="preferential">
            <ul class="wisdom-ul">
              <li v-for="(item,index) in list" :key="index" class="wisdom-li">
                <div class="wisdom-tri">
                  <img src="../assets/images/right.png" alt="">
                </div>
                <p>
                  国家税务总局公告2018年国家税务总局公告2018年
                </p>
              </li>
            </ul>
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
import Topline from 'components/indexComponents/Topline'
import TopHead from 'components/indexComponents/TopHead'
import BigSlider from 'components/indexComponents/BigSlider'
import Cloudwisdom from 'components/indexComponents/cloudwisdom'
import Wisdomcbox from 'common/Wisdomcbox'
import Cooperative from 'common/Cooperative'
import PublishinTopic from 'common/PublishinTopic'
import showmelist from 'common/showmelist'
import { mapGetters } from 'vuex'
import store from '@/store/index'
export default {
  name: 'Home',
  components: {
    CanDoBox,
    CanDoContent,
    WisdomBank,
    Wisdomcbox,
    Topline,
    TopHead,
    BigSlider,
    Cooperative,
    PublishinTopic,
    Cloudwisdom,
    showmelist
  },
  data() {
    return {
      canDoList: [0, 1, 2, 3, 4, 5],
      imgUrl: require('assets/images/small.png'),
      arr: ['能帮会干', '信息', '头条'],
      show: 0,
      list: [0, 1, 2, 3, 4, 5, 6]
    }
  },
  computed: {
    ...mapGetters(['showmelist', 'showerror'])
  },
  created() {
    this.initError()
  },
  mounted() {
    this.$nextTick(() => {
      // this.getShowme()
    })
  },
  methods: {
    showMeMessage(data) {
      this.show = data
    },
    initError() {
      if (this.showerror.length) {
        this.$message.error({ message: this.showerror, duration: 1000 })
      }
    },
    getShowme() {
      this.$store.dispatch('showMeList', { page: 1, limit: 12 }).then(() => {
        // commit('showMeList', data)
      })
    }
  },
  asyncData() {
    store()
      .dispatch('showMeList', { page: 1, limit: 12 })
      .then(() => {
        // commit('showMeList', data)
      })
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
      height: 500px;
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
