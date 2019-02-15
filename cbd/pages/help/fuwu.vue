<!--  -->
<template>
  <div class="w">
    <div class="fuwu-top">
      <div class="fuwuimg">
        <img src="" alt="">
      </div>
      <div class="fuwutitle">
        <div class="fuwub">
          <h3>
            服务名称
          </h3>
          <span class="price">
            ￥80.0
          </span>
        </div>
        <div class="center">
          擅长服务行业：便民帮
        </div>
        <div class="resi">
          <span>
            身份认证
          </span>
          <span>
            个人认证
          </span>
          <span>
            15688666666
          </span>
        </div>
      </div>
    </div>
    <div class="fuwu-bottom">
      <div class="fuwutab">
        <el-tabs v-model="activeName">
          <el-tab-pane label="服务介绍" name="first">
            服务介绍111111111111服务介绍111111111111服务介绍111111111111服务介绍111111111111
          </el-tab-pane>
          <el-tab-pane label="用户评价" name="second">
            <el-input type="textarea" resize="none" rows="6" placeholder="发表回复"></el-input>
            <button>
              发布
            </button>
            <ul class="pj">
              <li class="pjli">
                <div class="pjtitle">
                  <h5>
                    昵称昵称昵称
                  </h5>
                  <span>
                    2018-12-30
                  </span>
                </div>
                <div class="pjcontent">
                  内容内容内容内容内容内容内容内容内容
                </div>
              </li>
            </ul>
            <pagination></pagination>
          </el-tab-pane>
          <el-tab-pane label="你问我答" name="third">
            <el-input type="textarea" resize="none" rows="6" placeholder="发表回复"></el-input>
            <div v-if="login == true" class="drop">
              请登录后发表回复
            </div>
            <button>
              发布
            </button>
            <ul class="ask">
              <li class="askli">
                <div class="head">
                  <img src="" alt="">
                </div>
                <div>
                  <div class="asktitle">
                    <h5>
                      昵称昵称昵称
                    </h5>
                    <span>
                      2018-12-30
                    </span>
                  </div>
                  <div class="askcontent">
                    内容内容内容内容内容内容内容内容内容
                  </div>
                  <span class="back">
                    回复
                  </span>
                </div>
              </li>
            </ul> 
            <ul class="reply">
              <li v-for="(item,index) in reply" :key="index">
                <div class="reply-title">
                  <span>
                    XXXX
                  </span>
                  <span>
                    @
                  </span>
                  <span>
                    XXXX
                  </span>
                </div>
                <div class="reply-content">
                  内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                </div>
                <span>
                  回复
                </span>
                <img src="" alt="">
              </li>
            </ul>
            <pagination></pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    pagination
  },
  data() {
    return {
      activeName: 'first',
      login: true,
      reply: [0]
    }
  }
}
</script>
<style lang='less' scoped>
.fuwu-top {
  height: 268px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  .fuwuimg {
    width: 220px;
    height: 220px;
    background-color: pink;
    border-radius: 6px;
  }
  .fuwutitle {
    margin-left: 23px;
    width: 919px;
    .fuwub {
      display: flex;
      background-color: #f1f2f6;
      h3 {
        line-height: 70px;
        height: 70px;
        padding-left: 16px;
        box-sizing: border-box;
        border-radius: 6px;
        width: 760px;
      }
      .price {
        color: #ff6348;
        font-size: 28px;
        line-height: 70px;
        height: 70px;
      }
    }
    .center {
      line-height: 66px;
      font-size: 14px;
      color: #57606f;
      padding-left: 16px;
      box-sizing: border-box;
    }
    .resi {
      box-sizing: border-box;
      padding-left: 16px;
      font-size: 14px;
      color: #77808f;
      span {
        box-sizing: border-box;
        padding-right: 49px;
      }
    }
  }
}
.fuwu-bottom {
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  margin-bottom: 50px;
  padding: 24px;
  position: relative;
  button {
    width: 105px;
    height: 34px;
    background: rgba(9, 161, 231, 1);
    border-radius: 6px;
    margin: 24px 0;
    color: #fff;
    cursor: pointer;
  }
  .head {
    width: 50px;
    height: 50px;
    background-color: pink;
    margin-right: 30px;
  }
  .pj {
    margin-bottom: 50px;
    .pjli {
      width: 902px;
      border-bottom: 1px dashed #e6e6e6;
      box-sizing: border-box;
      padding-bottom: 24px;
      .pjtitle {
        margin-bottom: 14px;
        display: flex;
        h5 {
          padding-right: 68px;
        }
        span {
          font-size: 14px;
          color: #57606f;
        }
      }
      .pjcontent {
        font-size: 14px;
        color: #57606f;
      }
    }
  }
  .ask {
    margin-bottom: 24px;
    border-bottom: 1px dashed #e6e6e6;
    .askli {
      width: 902px;
      box-sizing: border-box;
      padding-bottom: 24px;
      display: flex;
      .asktitle {
        margin-bottom: 14px;
        display: flex;
        h5 {
          padding-right: 68px;
        }
        span {
          font-size: 14px;
          color: #57606f;
        }
      }
      .askcontent {
        font-size: 14px;
        color: #57606f;
      }
      .back {
        font-size: 14px;
        color: #9eaab8;
        margin-bottom: 24px;
        cursor: pointer;
      }
    }
  }
  .drop {
    width: 1158px;
    height: 132px;
    position: absolute;
    top: 1px;
    left: 1px;
    background-color: #fff;
    line-height: 136px;
    text-align: center;
    color: #747d8c;
    z-index: 999;
    opacity: 0.4;
  }
  .reply {
    box-sizing: border-box;
    background-color: #f1f2f6;
    margin-bottom: 24px;
    padding: 20px 0 0 20px;
    position: relative;
    li {
      padding-bottom: 24px;
      box-sizing: border-box;
      padding-left: 50px;
      .reply-title {
        color: #282d38;
        margin-bottom: 10px;
        span:last-child {
          font-size: 14px;
        }
      }
      .reply-content {
        font-size: 14px;
        color: #57606f;
      }
      img {
        position: absolute;
        background-color: pink;
        width: 50px;
        height: 50px;
        top: 24px;
        left: 10px;
      }
      span {
        font-size: 14px;
        color: #9eaab8;
        cursor: pointer;
      }
    }
  }
}
</style>
