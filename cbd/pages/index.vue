<template>
  <section class="index">
    <div class="w">
      <Dialog></Dialog>
      <div class="index-top">
        <topHead></topHead>
        <bigSlider></bigSlider>
        <div class="index-top-right">
          <publishinTopic :publish="'发表需求'"></publishinTopic>
          <cooperative></cooperative>
        </div>
      </div>
      <can-do-box :desc="'云传'" class="specical-box" :list="['头条','信息']" @showMe="showMeMessage">
        <div v-if="show == 0" class="message">
          <topLine></topLine>
        </div>
        <div v-if="show == 1" class="title">
          666
        </div>
      </can-do-box>
      <div class="showMeContain">
        <can-do-box :desc="'智帮'" :list="['秀秀我']">
          <ul class="showmeList">
            <li v-for="item of showMeList" :key="item" class="showMeitem">
              <showMeContent></showMeContent>
            </li>
          </ul>
        </can-do-box>
        <div class="showMeRight">
          <wisdomBank :wis="'智慧库'">
            <wisdomBankCont></wisdomBankCont>
          </wisdomBank>
          <wisdomBank class="cloud-i" :wis="'云智慧'">
            <ul class="cloud-ul">
              <li v-for="(item,index) in cloudlis" :key="index" class="cloud-li">
                <img src="../assets/images/small.png" alt="">
              </li>
            </ul>
          </wisdomBank>
        </div>
      </div>
      <div class="showMeContain">
        <can-do-box :desc="'惠带'" :list="['能帮会干']">
          <ul class="can-do-List">
            <li v-for="item of canDoList" :key="item" class="can-do-item">
              <canDoContent></canDoContent>
            </li>
          </ul>
        </can-do-box>
        <div class="showMeRight">
          <wisdomBank :wis="'帮帮我'">
            <wisdomBankCont :url="imgUrl"></wisdomBankCont>
          </wisdomBank>
          <wisdomBank :wis="'优惠活动'" class="preferential">
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
          </wisdomBank>
        </div>
      </div>
    </div>
  </section> 
</template>
<script>
import canDoBox from 'components/indexComponents/canDoBox'
import canDoContent from 'common/canDoContent'
import showMeContent from 'common/showMeContent'
import wisdomBank from 'components/indexComponents/wisdomBank'
import topLine from 'components/indexComponents/topLine'
import topHead from 'components/indexComponents/topHead'
import bigSlider from 'components/indexComponents/bigSlider'
import Dialog from 'components/indexComponents/Dialog'
import wisdomBankCont from 'common/wisdomBankCont'
import cooperative from 'common/cooperative'
import publishinTopic from 'common/publishinTopic'
export default {
  name: 'Home',
  components: {
    canDoBox,
    canDoContent,
    showMeContent,
    wisdomBank,
    wisdomBankCont,
    topLine,
    topHead,
    bigSlider,
    cooperative,
    publishinTopic,
    Dialog
  },
  data() {
    return {
      canDoList: [0, 1, 2, 3, 4, 5],
      showMeList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      imgUrl: require('assets/images/small.png'),
      arr: ['能帮会干', '信息', '头条'],
      show: 0,
      list: [0, 1, 2, 3, 4, 5, 6],
      cloudlis: [0, 1, 2, 3]
    }
  },
  methods: {
    showMeMessage(data) {
      this.show = data
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
    .showmeList {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .showMeitem {
        display: flex;
        margin-right: 50px;
        margin-bottom: 72px;
        box-sizing: border-box;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
        &:nth-of-type(9) {
          margin-bottom: 40px;
        }
        &:nth-of-type(10) {
          margin-bottom: 40px;
        }
        &:nth-of-type(11) {
          margin-bottom: 40px;
        }
        &:nth-of-type(12) {
          margin-bottom: 40px;
        }
      }
    }
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
  .cloud-i {
    margin-top: 12px;
    width: 248px;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: #fff;
    .cloud-ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .cloud-li {
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
