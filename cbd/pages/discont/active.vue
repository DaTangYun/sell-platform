<template>
  <div class="w">
    <div class="box">
      <div class="activity">
        <ul class="activity-ul">
          <li v-for="(item,index) in active" :key="index" class="activity-li">
            <div class="activity-li-left">
              <div class="top">
                <h4>活动标题</h4>
                <span>昵称</span>
                <span>2018-12-07</span>
              </div>
              <div class="bottom">
                WTO是多边机构，不是美国一家开的。WTO成员是平等的，不是美国一家说了算的权
              </div>
            </div>
            <div :class="item.flag ? 'oldpage' :'nowpage'" class="activity-li-right " @click="item.flag = false;item.take = '已领取'">
              <div class="right-content">
                <div class="right-content-left">
                  <h5>
                    标题标题标题标题标题
                  </h5>
                  <div>
                    2018/12/31过期
                  </div>
                </div>
              </div>
              <div class="right-content-right">
                <div class="calc">
                  满1000减999
                </div>
                <span>
                  {{ item.take }}
                </span>
              </div>
            </div>
          </li>
        </ul>
        <pagination></pagination>
      </div>
      <RightComponent></RightComponent>
    </div>
  </div>
</template>

<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    RightComponent,
    pagination
  },
  data() {
    return {
      active: [
        { id: 1, flag: true, take: '领取' },
        { id: 2, flag: true, take: '领取' },
        { id: 3, flag: true, take: '领取' },
        { id: 4, flag: true, take: '领取' }
      ],
      selectItem: 0
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.box {
  display: flex;
  margin-bottom: 139px;
}
.activity {
  width: 950px;
  background-color: #fff;
  margin-right: 12px;
  box-sizing: border-box;
  padding-bottom: 24px;
  .activity-ul {
    box-sizing: border-box;
    padding: 0 24px 0;
    margin-bottom: 40px;
    .activity-li {
      display: flex;
      height: 126px;
      border-bottom: 1px dashed #e6e6e6;
      padding-top: 24px;
      box-sizing: border-box;
      .activity-li-left {
        .top {
          margin-bottom: 20px;
          h4 {
            display: inline-block;
            width: 327px;
          }
          span {
            font-size: 14px;
            color: #616975;
            &:last-child {
              margin-left: 115px;
            }
          }
        }
        .bottom {
          color: #616975;
        }
      }
      .activity-li-right {
        width: 249px;
        margin-left: 55px;
        background-size: 100% 100%;
        box-sizing: border-box;
        display: flex;
        padding-top: 12px;
        padding-left: 12px;
        cursor: pointer;
        .right-content {
          padding: 6px 0 0 6px;
          box-sizing: border-box;
          .right-content-left {
            h5 {
              color: #282d38;
              margin-bottom: 13px;
              width: 123px;
              .ellipsis();
            }
            div {
              color: #747d8c;
              font-size: 14px;
            }
          }
        }
        .right-content-right {
          width: 77px;
          height: 66px;
          margin-left: 30px;
          div {
            color: #fff;
            width: 48px;
            font-size: 14px;
          }
          span {
            color: #fff;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.nowpage {
  background-image: url('~assets/images/juan2.png');
}
.oldpage {
  background-image: url('~assets/images/juan.png');
}
</style>
