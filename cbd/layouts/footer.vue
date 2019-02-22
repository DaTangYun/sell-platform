<!--  -->
<template>
  <footer>
    <div class="w">
      <div class="footer-top">
        <div class="footer-left">
          <div class="left-dl">
            <dl>
              <dt>
                <router-link to="">
                  云传
                </router-link>
              </dt>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <router-link to="">
                  云传
                </router-link>
              </dt>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <router-link to="">
                  云传
                </router-link>
              </dt>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
            </dl>
            <dl>
              <dt>
                <router-link to="">
                  云传
                </router-link>
              </dt>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
              <dd>
                <router-link to="">
                  云传
                </router-link>
              </dd>
            </dl>
          </div>
          <dl>
            <dt>友情链接</dt>
            <a href="">
              链接1
            </a>
            <a href="">
              链接1
            </a>
          </dl>
        </div>
        <div class="footer-right">
          <div class="footer-con">
            <div class="footer-title">
              联系我们
            </div>
            <div class="footer-ewm">
              <div class="img"></div>
              <div class="img"></div>
            </div>
            <div class="footer-phone">
              <div class="phone">
                <span>咨询热线</span>
                <p>400-000-1000</p>
              </div>
              <div class="phone">
                <span>咨询热线</span>
                <p>400-000-1000</p>
              </div>
            </div>
          </div>
          <div class="footer-logo"></div>
        </div>
      </div>
      <p class="copyright">
        版权asdadasdsadasdsd
      </p>
    </div>
  </footer>
</template>
<style lang='less' scoped>
footer {
  width: 100%;
  height: 388px;
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
          height: 100%;
          display: flex;
          dl {
            width: 168px;
            dt {
              width: 100%;
              font-size: 14px;
              font-weight: 400;
              color: rgba(133, 133, 133, 1);
              height: 37px;
            }
            dd {
              width: 100%;
              color: rgba(179, 179, 179, 1);
              font-size: 14px;
              height: 25px;
              a {
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
        dl {
          dt {
            height: 35px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(133, 133, 133, 1);
          }
          a {
            color: rgba(179, 179, 179, 1);
            text-decoration: none;
            margin-right: 29px;
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
            .img {
              width: 93px;
              height: 93px;
              background-color: pink;
            }
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
      margin-top: 50px;
    }
  }
}
</style>
