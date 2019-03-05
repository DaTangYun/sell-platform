<!--  -->
<template>
  <footer>
    <div class="w">
      <div class="footer-top">
        <div class="footer-left">
          <div class="left-dl">
            <dl>
              <dt>
                <nuxt-link to="/cloud">
                  云传
                </nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="/cloud/cloudhead">
                  信息
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/cloud/cloudInfo">
                  头条
                </nuxt-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <nuxt-link to="/help">
                  智帮
                </nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="/help/show">
                  秀秀我
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/help/wisdombank">
                  智慧库
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/help/cloudwisdom">
                  云智慧
                </nuxt-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <nuxt-link to="/discont">
                  惠带
                </nuxt-link>
              </dt>
              <dd>
                <nuxt-link to="/discont/helpcando">
                  能帮会干
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/discont/help">
                  帮帮我
                </nuxt-link>
              </dd>
              <dd>
                <nuxt-link to="/discont/active">
                  优惠活动
                </nuxt-link>
              </dd>
            </dl>
            <dl>
              <dt>
                服务支持
              </dt>
              <dd @click="handlecontact(1)">
                联系我们
              </dd>
              <dd @click="handlecontact(2)">
                服务条款
              </dd>
            </dl>
          </div>
          <div class="youqing">
            友情链接
          </div>
          <div class="link">            
            <nuxt-link v-for="(item, index) in lianjie" :key="index" tag="span" class="lianjie" to="item.link_url">
              {{ item.link_name }}
            </nuxt-link>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-con">
            <div class="footer-title">
              联系我们
            </div>
            <div class="footer-ewm">
              <div class="img">
                <img :src="banquan.company_code" alt="">
              </div>
              <div class="img">
                <img :src="banquan.person_code" alt="">
              </div>
            </div>
            <div class="footer-phone">
              <div class="phone">
                <span>咨询热线</span>
                <p>{{ banquan.mobile }}</p>
              </div>
              <div class="phone">
                <span>咨询热线</span>
                <p>{{ banquan.phone }}</p>
              </div>
            </div>
          </div>
          <div class="footer-logo">
            <img :src="banquan.footer_logo" alt="">
          </div>
        </div>
      </div>
      <p class="copyright">
        {{ banquan.banquan }}
      </p>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['lianjie', 'error', 'banquan'])
  },
  methods: {
    initError() {
      if (this.error.length) {
        this.$message.error({ message: this.error, duration: 1000 })
      }
    },
    handlecontact(id) {
      this.$router.push({
        path: '/callme',
        query: { id }
      })
    }
  }
}
</script>
<style lang='less' scoped>
footer {
  width: 100%;
  background: #1d2129;
  padding-top: 63px;
  box-sizing: border-box;
  .w {
    width: 1210px;
    margin: 0 auto;
    .footer-top {
      display: flex;
      .footer-left {
        width: 62%;
        .left-dl {
          width: 100%;
          display: flex;
          dl {
            width: 168px;
            dt {
              width: 100%;
              font-size: 14px;
              font-weight: 400;
              height: 37px;
              color: rgba(133, 133, 133, 1);
              a {
                color: rgba(133, 133, 133, 1);
              }
            }
            dd {
              cursor: pointer;
              width: 100%;
              color: rgba(179, 179, 179, 1);
              font-size: 14px;
              height: 25px;
              &:hover {
                color: #fff;
              }
              a {
                color: rgba(133, 133, 133, 1);
                &:active {
                  color: rgba(255, 255, 255, 1);
                }
                &:hover {
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
          }
        }
        .youqing {
          color: rgba(133, 133, 133, 1);
          height: 50px;
          line-height: 50px;
        }
        .link {
          color: rgba(133, 133, 133, 1);
          display: flex;
          flex-wrap: wrap;
          div {
            display: block;
            font-size: 14px;
          }
          span {
            margin-right: 10px;
            cursor: pointer;
            font-size: 14px;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .footer-right {
        width: 38%;
        display: flex;
        .footer-con {
          .footer-title {
            font-weight: 400;
            color: rgba(133, 133, 133, 1);
            font-size: 14px;
          }
          .footer-ewm {
            width: 214px;
            padding: 24px 0 15px 0;
            display: flex;
            justify-content: space-around;
          }
          .footer-phone {
            .phone {
              display: flex;
              line-height: 22px;
              margin-bottom: 21px;
              span {
                color: rgba(133, 133, 133, 1);
                margin-right: 16px;
              }
              p {
                font-weight: bold;
                color: rgba(230, 230, 230, 1);
                font-size: 22px;
              }
            }
          }
        }
      }
    }
    .copyright {
      width: 100%;
      text-align: center;
      color: rgba(128, 128, 128, 1);
      font-size: 14px;
    }
  }
  .img {
    width: 93px;
    height: 93px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .footer-logo {
    width: 103px;
    height: 93px;
    margin-top: 43px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
