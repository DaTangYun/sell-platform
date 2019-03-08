<!--  -->
<template>
  <div class="header">
    <header>
      <div class="w">
        <div class="header-top">
          <div class="change-city" @click="changeshozhi">
            [{{ city }}]
            <Dialog v-show="showDialog" @changeQQQ="showDialog = false" @sendXian="sendXian"></Dialog>
          </div>
          <div class="login-register">
            <nuxt-link to="/authentication" style="color:#039be5;margin-right:61px">
              认证
            </nuxt-link>
            <div v-if="userid" style="color:#039be5" class="dengluname">
              {{ name }}
              <ul class="user">
                <nuxt-link :to="`/myself/${userid}/mypublish/myhead`" tag="li">
                  个人中心
                </nuxt-link>
                <li @click="getloginout">
                  退出
                </li>
              </ul>
            </div>
            <div v-else>
              <nuxt-link to="/login">
                登录
              </nuxt-link>
              <span>/</span>
              <nuxt-link to="/register">
                注册
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <h1 class="header-logo">
            <a href="/">
              <img :src="banquan.header_logo" alt="">
            </a>
          </h1>
          <div v-if="$route.path === '/' || $route.path === '/cloud/cloudInfo' || $route.path === '/cloud/cloudhead'" class="header-classification">
            <div class="classification">
              <el-select v-show="showselect" v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  filterable
                >
                </el-option>
              </el-select>
            </div>
            <div class="search">
              <el-input v-model="searchcontent" placeholder="请输入搜索内容">
                <i slot="suffix" class="el-input__icon el-icon-search" @click="sendsearch"></i>
              </el-input>
            </div>
          </div>
          <div class="header-tips">
            <ul class="header-tips-ul">
              <nuxt-link to="/" exact tag="li" class="header-tips-li">
                首页
              </nuxt-link>
              <nuxt-link to="/cloud" tag="li" class="header-tips-li">
                传
                <img src="~assets/images/down3.png" alt="">
                <ul class="secondul">
                  <li class="secondli">
                    <nuxt-link to="/cloud/cloudInfo">
                      信息
                    </nuxt-link>
                  </li>
                  <li class="secondli">
                    <nuxt-link to="/cloud/cloudhead">
                      头条
                    </nuxt-link>
                  </li>
                </ul>
              </nuxt-link>
              <nuxt-link to="/help" tag="li" class="header-tips-li">
                帮
                <img src="~assets/images/down3.png" alt="">
                <ul class="secondul">
                  <li class="secondli">
                    <nuxt-link to="/help/cloudwisdom">
                      云智慧
                    </nuxt-link>
                  </li>
                  <li class="secondli">
                    <nuxt-link to="/help/wisdombank">
                      智慧库
                    </nuxt-link>
                  </li>
                  <li class="secondli">
                    <nuxt-link to="/help/show">
                      秀秀我
                    </nuxt-link>
                  </li>
                </ul>
              </nuxt-link>
              <nuxt-link to="/discont" tag="li" class="header-tips-li">
                带
                <img src="~assets/images/down3.png" alt="">
                <ul class="secondul">
                  <li class="secondli">
                    <nuxt-link to="/discont/helpcando">
                      能帮会干
                    </nuxt-link>
                  </li>
                  <li class="secondli">
                    <nuxt-link to="/discont/help">
                      帮帮我
                    </nuxt-link>
                  </li>
                  <li class="secondli">
                    <nuxt-link to="/discont/active">
                      优惠活动
                    </nuxt-link>
                  </li>
                </ul>
              </nuxt-link>
            </ul>
          </div>
        </div> 
      </div> 
    </header>
    <band></band> 
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Dialog from 'components/indexComponents/Dialog'
import band from 'components/common/band'
export default {
  components: {
    Dialog,
    band
  },
  data() {
    return {
      options: [
        {
          value: 'cloudhead',
          label: '头条'
        },
        {
          value: 'cloudInfo',
          label: '信息'
        }
      ],
      value: 'cloudhead',
      activeIndex: '',
      showDialog: false,
      city: '切换城市',
      path: ['/cloud', '/help', '/discont'],
      nickname: {
        name: true,
        login: true
      },
      userid: 0,
      name: '',
      searchcontent: ''
    }
  },
  computed: {
    ...mapGetters(['banquan', 'loginout']),
    showselect() {
      const path = this.$route.path
      return path === '/'
    }
  },
  watch: {
    $route(route) {
      if (route.path === '/') {
        this.activeIndex = '1'
      } else {
        this.path.map((item, index) => {
          if (route.path.indexOf(item) > -1) {
            this.activeIndex = (index + 2).toString()
          }
        })
      }
    }
  },
  mounted() {
    this.getLocation()
    this.$nextTick(() => {
      this.loginda()
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    loginda() {
      const userinfo = JSON.parse(localStorage.getItem('USERINFO'))
      if (userinfo) {
        this.userid = userinfo.user_id
        this.name = userinfo.nickname
        this.nickname.login = false
      } else {
        this.nickname.login = true
      }
    },
    changeshozhi() {
      this.showDialog = true
    },
    sendXian(data) {
      this.showDialog = false
      this.city = data
    },
    getLocation() {
      try {
        const city = sessionStorage.getItem('LOCATION')
        if (city) {
          this.city = city
        }
      } catch (error) {}
    },
    async getloginout() {
      const info = await this.$store.dispatch('loginout')
      this.$message({
        type: 'warning',
        message: info.msg
      })
      localStorage.removeItem('USERINFO')
      window.location.reload()
    },
    sendsearch() {
      if (this.searchcontent.trim() === '') {
        this.$message.info({
          message: '请输入内容',
          duration: 1000
        })
        return
      }
      if (this.$route.path === '/cloud/cloudhead') {
        this.value = 'cloudhead'
      }
      if (this.$route.path === '/cloud/cloudInfo') {
        this.value = 'cloudInfo'
      }
      this.$router.push({
        path: `/cloud/${this.value}`,
        query: {
          title: this.searchcontent
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.active-link {
  border-bottom: 1px solid #00a0e9;
  color: #00a0e9;
}
.dengluname {
  width: 100px;
  text-align: center;
}
.dengluname:hover .user {
  display: block !important;
}
.user {
  position: absolute;
  top: 50px;
  right: 16px;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #f1f2f6;
  z-index: 9999;
  display: none;
  padding: 0 10px;
  box-sizing: border-box;
  li {
    width: 100%;
    height: 50px;
    color: #000;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
}
header {
  background-color: #fff;
  .header-top {
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dadfe5;
    .change-city {
      height: 100%;
      line-height: 50px;
      font-size: 14px;
      color: rgba(119, 128, 143, 1);
      cursor: pointer;
    }
    .login-register {
      padding: 0 5px;
      font-size: 16px;
      color: rgba(40, 45, 56, 1);
      height: 100%;
      line-height: 50px;
      display: flex;
      cursor: pointer;
      span {
        color: #00a0e9;
        margin-right: 10px;
      }
    }
  }
  .header-bottom {
    height: 70px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .header-logo {
      width: 103px;
      height: 100%;
      padding: 12px 0;
      box-sizing: border-box;
      margin-right: 197px;
    }
    .header-classification {
      width: 428px;
      height: 100%;
      box-sizing: border-box;
      padding: 16px 0 14px;
      display: flex;
      margin-right: 77px;
      .classification {
        width: 75px;
        margin-right: 8px;
      }
      .search {
        width: 345px;
        ::-webkit-input-placeholder {
          color: #747d8c;
        }
        i {
          cursor: pointer;
          &:before {
            font-size: 20px;
            font-weight: 700;
            color: #747d8c;
          }
        }
      }
    }
    .header-tips {
      width: 440px;
      height: 100%;
      position: absolute;
      right: 0;
      bottom: 0;
      .header-tips-ul {
        display: flex;
        border: none;
        height: 100%;
        position: relative;
        .indexli {
          width: 50px;
          height: 100%;
          line-height: 70px;
        }
        .header-tips-ul-img {
          position: absolute;
          z-index: 100;
          right: 25px;
          top: 0;
        }
        .img2 {
          right: 135px;
        }
        .img3 {
          right: 245px;
        }
        .header-tips-li {
          width: 25%;
          height: 100%;
          text-align: center;
          font-weight: 500;
          font-size: 16px;
          line-height: 70px;
          margin-right: 25px;
          cursor: pointer;
          &:hover .secondul {
            display: block;
            transition: all 0.6s linear;
          }
          .secondul {
            width: 105px;
            background-color: #fff;
            position: absolute;
            z-index: 1000;
            border: none;
            border-radius: 2px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            display: none;
            .secondli {
              box-sizing: border-box;
              padding: 0 15px;
              width: 100%;
              a {
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 70px;
                &.active-link {
                  border: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
