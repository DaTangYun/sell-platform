<!--  -->
<template>
  <div class="myqzone">
    <div class="w">
      <div class="myband">
        当前位置：
        <nuxt-link to="/">
          首页
        </nuxt-link>
        >
        个人空间
      </div>
      <div class="myqzone-top">
        <div class="mqzone-t">
          <img src="" alt="">
        </div>
        <div class="vip">
          <h3>
            昵称/企业名称
          </h3>
          <img :src=" i == 0 ? srcs : nosrc" alt="">
        </div>
        <p>
          个人简介
        </p>
      </div>
      <div class="myqzone-bottom">
        <div class="myqzone-left">
          <h4>个人主页</h4>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
            <el-menu-item index="1">
              综合展示
            </el-menu-item>
            <el-menu-item index="2">
              我的头条
            </el-menu-item>
            <el-menu-item index="3">
              我的信息
            </el-menu-item>
            <el-menu-item index="4">
              帮帮我
            </el-menu-item>
            <el-menu-item index="5">
              能帮会干
            </el-menu-item>
            <el-menu-item index="6">
              我的案例
            </el-menu-item>
            <el-menu-item index="7">
              我的团队
            </el-menu-item>
            <el-menu-item index="8">
              我的活动
            </el-menu-item>
            <el-menu-item index="9">
              我的评价
            </el-menu-item>  
          </el-menu>          
        </div>
        <div class="myqzone-right">
          <exhibition v-if="bankindex == 1"></exhibition>
          <myheadtip v-if="bankindex == 2"></myheadtip>
          <myinfotip v-if="bankindex == 3"></myinfotip>
          <helpme v-if="bankindex == 4"></helpme>
          <helpcando v-if="bankindex == 5"></helpcando>
          <mycase v-if="bankindex == 6"></mycase>
          <myteam v-if="bankindex == 7"></myteam>
          <wodehuodong v-if="bankindex == 8"></wodehuodong>
          <myevaluate v-if="bankindex == 9"></myevaluate>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import exhibition from 'components/myqzoneComponents/exhibition'
import myheadtip from 'components/myqzoneComponents/myheadtip'
import myinfotip from 'components/myqzoneComponents/myinfotip'
import helpme from 'components/myqzoneComponents/helpme'
import helpcando from 'components/myqzoneComponents/helpcando'
import mycase from 'components/myqzoneComponents/mycase'
import myteam from 'components/myqzoneComponents/myteam'
import wodehuodong from 'components/myqzoneComponents/wodehuodong'
import myevaluate from 'components/myqzoneComponents/myevaluate'
export default {
  components: {
    exhibition,
    myheadtip,
    myinfotip,
    helpme,
    helpcando,
    mycase,
    myteam,
    wodehuodong,
    myevaluate
  },
  meta: {
    title: '个人空间'
  },
  data() {
    return {
      activeIndex: '1',
      bankindex: 1,
      i: 1,
      srcs: require('assets/images/vip.png'),
      nosrc: require('assets/images/vipm.png')
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index)
      this.bankindex = index
    }
  }
}
</script>
<style lang='less' scoped>
.myqzone {
  background-image: url('~assets/images/cloud.png');
  background-size: 100% 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  .myband {
    margin: 0 0 20px 0;
    color: #fff;
    font-size: 12px;
    a {
      color: #fff;
    }
  }
}
.myqzone-top {
  width: 1210px;
  border-radius: 6px;
  background-image: url('~assets/images/smallcloud.png');
  text-align: center;
  box-sizing: border-box;
  padding: 24px 0;
  margin-bottom: 20px;
  background-size: 100% 100%;
  .mqzone-t {
    width: 100px;
    height: 100px;
    background: rgba(231, 228, 223, 1);
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-left: 550px;
  }
  .vip {
    position: relative;
    margin: 19px 0 9px;
    img {
      position: absolute;
      top: 13px;
      right: 470px;
    }
  }
  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    margin-right: 23px;
  }
  p {
    display: block;
    color: #fff;
  }
}
.myqzone-bottom {
  display: flex;
  .myqzone-left {
    width: 248px;
    height: 711px;
    margin-right: 20px;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-bottom: 20px;
    h4 {
      color: #282d38;
      font-size: 24px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
