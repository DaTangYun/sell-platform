<!--  -->
<template>
  <div class="head">
    <div class="head-left">
      <cloudTitle :titlename="'信息需求：'"></cloudTitle>
      <div class="headline-content">
        <ul class="headline-contentul">
          <li v-for="(item,index) in contentlis" :key="index">
            <div class="headlineimg">
              <img src="" alt="">
            </div>
            <div class="headlinelic">
              <h3>移动互联网架构开发</h3>
              <p>
                TO是多边机构，不是美国一家开的。                      
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
  </div>
</template>
<script>
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
export default {
  components: {
    cloudTitle
  },
  meta: {
    title: '信息'
  },
  data() {
    return {
      contentlis: [0, 1, 2, 3, 4]
    }
  }
}
</script>
<style lang='less' scoped>
.head {
  width: 100%;
  height: 100%;
}
.head-index {
  width: 1210px;
  margin: 0 auto;
  display: flex;
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
