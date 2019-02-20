<!--  -->
<template>
  <div class="exh">
    <div class="exh-left">
      <helpbox>
        <Topline :toplists="[0,1,2]" :bottomlist="[0,1,2]" :wids="'203'" :wid="'100%'" :hei="'144'"></Topline>
      </helpbox>
      <helpbox :head="'帮帮我'">
        <help :helplist="[0,1,2,3,4,5]" :wid="'203'" :hei="'144'"></help>
      </helpbox>
      <helpbox :head="'能帮会干'">
        <CanDoContent :discont="[0,1,2,3,4,5]" :wid="'203'" :hei="'144'"></CanDoContent>
      </helpbox>
    </div>
    <div class="exh-right">
      <mybox>
        <ul class="mycase">
          <li v-for="(item,index) in mycase" :key="index">
            <div>
              <img src="~assets/images/small.png" alt="">
            </div>
          </li>
        </ul>
      </mybox>
      <mybox :my="'我的团队'">
        <ul class="myteam">
          <li v-for="(item,index) in myteam" :key="index">
            <div class="img"></div>
            团队名称
          </li>
        </ul>
      </mybox>
      <mybox :my="'我的活动'">
        <ul class="wisdom-ul">
          <li v-for="(item,index) in list" :key="index" class="wisdom-li">
            <div class="wisdom-tri">
              <img src="../../assets/images/right.png" alt="">
            </div>
            <p>
              标题标题标题标题标题标题标题标题标题标题
            </p>
          </li>
        </ul>        
      </mybox>
      <mybox>
        <ul class="myacti">
          <li v-for="(item,index) in myacti" :key="index">
            <h4>
              昵称
            </h4>
            <p>
              内容内容内容内容内容内容内容
            </p>
          </li>
        </ul>
      </mybox>
    </div>
  </div>
</template>
<script>
import Topline from 'components/indexComponents/Topline'
import help from 'components/cloudComponents/help.vue'
import helpbox from 'components/myqzoneComponents/helpbox'
import mybox from 'components/myqzoneComponents/mybox'
import CanDoContent from 'common/CanDoContent'
export default {
  name: 'Exhibition',
  components: {
    Topline,
    helpbox,
    help,
    CanDoContent,
    mybox
  },
  data() {
    return {
      mycase: [0, 1, 2, 3, 4],
      myteam: [0, 1, 2, 3],
      list: [0, 1, 2, 3, 4],
      myacti: [0, 1, 2, 3, 4]
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
    margin-bottom: 15px;
    &:nth-child(2n-1) {
      margin-right: 8px;
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
    }
    p {
      color: #57606f;
      font-size: 14px;
    }
  }
}
</style>
