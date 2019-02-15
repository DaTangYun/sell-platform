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
            <nuxt-link to="/login">
              登录
            </nuxt-link>
            <span>/</span>
            <nuxt-link to="/register">
              注册
            </nuxt-link>
          </div>
        </div>
        <div class="header-bottom">
          <div class="header-logo"></div>
          <div v-if="$nuxt.$route.name == 'index'" class="header-classification">
            <div class="classification">
              <el-select v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="search">
              <el-input placeholder="请输入搜索内容">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
          </div>
          <div class="header-tips">
            <el-menu 
              mode="horizontal"
              text-color="#282d38"
              active-text-color="#039be5"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <nuxt-link :to="{path:'/',meta:{title:'首页'}}">
                  首页
                </nuxt-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  传
                </template>
                <el-menu-item index="21">
                  <nuxt-link to="/cloud/cloudhead">
                    头条
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="22">
                  <nuxt-link to="/cloud/cloudInfo">
                    信息
                  </nuxt-link>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <nuxt-link to="/help">
                    帮
                  </nuxt-link>
                </template>
                <el-menu-item index="3-1">
                  <nuxt-link to="/help">
                    云智慧
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <nuxt-link to="/help/wisdombank">
                    智慧库
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  秀秀我
                </el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <nuxt-link to="discont">
                    带
                  </nuxt-link>
                </template>
                <el-menu-item index="4-1">
                  <nuxt-link to="/discont">
                    能帮会干
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <nuxt-link to="/discont/help">
                    帮帮我
                  </nuxt-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                  <nuxt-link to="/discont/active">
                    优惠活动
                  </nuxt-link>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div> 
      </div> 
    </header>
    <div class="w">
      <band v-show="$nuxt.$route.path != '/'"></band>
    </div>   
  </div>
</template>
<script>
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
          value: '选项1',
          label: '头条'
        },
        {
          value: '选项2',
          label: '信息'
        }
      ],
      value: '选项1',
      activeIndex: '1',
      showDialog: false,
      city: '切换城市'
    }
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key)
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
    }
  }
}
</script>
<style lang='less' scoped>
header {
  background-color: #fff;
  .header-top {
    height: 50px;
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
      cursor: pointer;
    }
  }
  .header-bottom {
    height: 70px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .header-logo {
      width: 58px;
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
      ul {
        border: none;
        height: 100%;
        li {
          width: 25%;
          height: 100%;
          text-align: center;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
