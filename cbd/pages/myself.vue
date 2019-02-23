<!--  -->
<template>
  <div class="w">
    <div class="myself">
      <div class="myself-left">
        <div class="nicheng">
          <div class="nicheng-img">
            <img src="" alt="">
          </div>
          <h4>昵称</h4>
        </div>
        <div class="my">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
            <el-menu-item index="1">
              我的发布
            </el-menu-item>
            <el-menu-item index="2">
              能帮会干
            </el-menu-item>
            <el-menu-item index="3">
              我的团队
            </el-menu-item>
            <el-menu-item index="4">
              我的活动
            </el-menu-item>
            <el-menu-item index="5">
              我的交易
            </el-menu-item>
            <el-menu-item index="6">
              我的评价
            </el-menu-item>
            <el-menu-item index="7">
              安全设置
            </el-menu-item>
            <el-menu-item index="8">
              账号设置
            </el-menu-item>
            <el-menu-item index="9">
              退出
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="myself-right">
        <div v-if="bankindex == 1" class="firstpart">
          <ul class="tabs">
            <li
              v-for="(item,index1) in tabsParam"
              :key="index1"             
              :class="{active:index1 ==nowIndex}"
              class="li-tab"
              @click="toggleTabs(index1)"          
            >
              {{ item }}
            </li>
          </ul>
          <div v-show="nowIndex===0" class="divTab">
            <headlist></headlist>
            <pagination></pagination>
          </div>
          <div v-show="nowIndex===1" class="divTab">
            <message></message>
            <pagination></pagination>
          </div>
          <div v-show="nowIndex===2" class="divTab">
            <file></file>
            <pagination></pagination>
          </div>
          <div v-show="nowIndex===3" class="divTab">
            <demand></demand>
            <pagination></pagination>
          </div>
          <div v-show="nowIndex===4" class="divTab">
            <mycase></mycase>
          </div>
        </div>
        <div v-if="bankindex == 2" class="secondpart">
          <secondpart></secondpart>
        </div>
        <div v-if="bankindex == 3" class="myteam">
          <myteam></myteam>
        </div>
        <div v-if="bankindex == 4" class="myteam">
          <myactivity></myactivity>
        </div>
        <div v-if="bankindex == 5" class="myteam">
          <transaction></transaction>
        </div>
        <div v-if="bankindex == 6" class="myteam">
          <mypingjia></mypingjia>
        </div>
        <div v-if="bankindex == 7" class="myteam">
          <safe></safe>
        </div>
        <div v-if="bankindex == 8" class="myteam">
          <setting></setting>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mycase from 'components/myselfComponents/mycase'
import headlist from 'components/myselfComponents/headlist'
import message from 'components/myselfComponents/message'
import file from 'components/myselfComponents/file'
import pagination from 'components/cloudComponents/pagination.vue'
import demand from 'components/myselfComponents/demand'
import secondpart from 'components/myselfComponents/secondpart'
import myteam from 'components/myselfComponents/myteam'
import myactivity from 'components/myselfComponents/myactivity'
import transaction from 'components/myselfComponents/transaction'
import mypingjia from 'components/myselfComponents/mypingjia'
import safe from 'components/myselfComponents/safe'
import setting from 'components/myselfComponents/setting'
export default {
  components: {
    headlist,
    message,
    file,
    pagination,
    demand,
    mycase,
    secondpart,
    myteam,
    myactivity,
    transaction,
    safe,
    mypingjia,
    setting
  },
  meta: {
    title: '个人中心'
  },
  data() {
    return {
      tabsParam: ['头条', '信息', '文档', '需求', '案例'],
      activeIndex: '1',
      activeName: 'first',
      nowIndex: 0,
      index: 1,
      bankindex: 1
    }
  },
  methods: {
    toggleTabs: function(index) {
      this.nowIndex = index
    },
    handleSelect(index) {
      this.bankindex = index
    }
  }
}
</script>
<style lang='less' scoped>
.myself {
  display: flex;
  margin-bottom: 56px;
  .myself-left {
    width: 248px;
    height: 982px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    margin-right: 12px;
    .nicheng {
      box-sizing: border-box;
      padding: 32px 44px;
      .nicheng-img {
        width: 160px;
        height: 160px;
        background: rgba(179, 179, 179, 1);
        border-radius: 50%;
      }
      h4 {
        text-align: center;
        margin-top: 18px;
      }
    }
  }
  .myself-right {
    position: relative;
    width: 950px;
    height: 1084px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    padding: 16px 16px;
    box-sizing: border-box;
    overflow: hidden;
    .tabs {
      display: flex;
      border-bottom: 2px solid #f1f2f6;
      li {
        box-sizing: border-box;
        padding: 0 51px 16px 40px;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid #00a0e9;
          color: #00a0e9;
        }
      }
    }
  }
}
</style>
