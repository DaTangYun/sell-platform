<!--  -->
<template>
  <div class="head">
    <div class="w">
      <band :bands="['首页','云传','信息需求']"></band>
      <div class="head-index">
        <div class="head-left">
          <div class="headline-category">
            <span>头条类别：</span>
            <ul>
              <li v-for="(item,index) in heads" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="headline-content">
            <ul class="headline-contentul">
              <li v-for="(item,index) in contentlis" :key="index">
                <div class="headlineimg">
                  <img src="" alt="">
                </div>
                <div class="headlinelic">
                  <h3>移动互联网架构开发</h3>
                  <p>
                    TO是多边机构，不是美国一家开的。WTO成员是平等的，不是美国一家说了算的权理事会
                    虽然注定是痴人说梦，但它也充分暴露了美方强权霸凌的嘴脸和唯我独尊的心态。据不权理，
                    了联合国教科文组织、联合国人权理事会。                       
                  </p>
                  <div class="headlispan">
                    <span>
                      生活服务
                    </span>
                    <span>
                      2018-12-07
                    </span>
                    <span>
                      <img src="../../assets/images/eye.png" alt="">
                      6666
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="pagnation">
              <el-pagination
                background
                layout="pager"
                :total="40"
              >
              </el-pagination>
            </div>
          </div>
        </div>
        <nuxt-link to="/messageComp">
          <RightComponent :publish="'发表需求'"></RightComponent>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
import band from 'components/common/band'
export default {
  layout: 'default',
  components: {
    band,
    RightComponent
  },
  data() {
    return {
      heads: ['待定011', '待定012', '待定013', '待定014', '待定015', '待定016'],
      contentlis: [0, 1, 2, 3, 4]
    }
  }
}
</script>
<style lang='less' scoped>
.head {
  border-bottom: 4px solid #00a0e9;
}
.head-index {
  width: 1210px;
  margin: 0 auto;
  display: flex;
  padding-top: 20px;
  padding-bottom: 56px;
  box-sizing: border-box;
  .head-left {
    width: 950px;
    margin-right: 12px;
  }
}
.headline-category {
  width: 950px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  span {
    color: #282d38;
    margin-right: 23px;
  }
  ul {
    display: flex;
    li {
      width: 82px;
      height: 31px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 21px;
      text-align: center;
      line-height: 31px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
  }
}
.headline-content {
  position: relative;
  width: 950px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 24px 24px 40px;
  box-sizing: border-box;
  ul {
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
      }
      .headlinelic {
        h3 {
          line-height: 40px;
        }
        p {
          line-height: 26px;
          width: 657px;
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
  .pagnation {
    width: 902px;
    margin-top: 95px;
    text-align: center;
  }
}
</style>
