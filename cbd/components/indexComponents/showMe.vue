<!-- -->
<template>
  <div class="showme">
    <div class="showme-title">
      <div class="show-bg"></div>
      <div class="chinese">
        <p>惠带</p>
        <p>秀秀我</p>
      </div>
    </div>
    <div class="showme-content">
      <ul class="showme-ul">
        <li v-for="(item, index) of lis" :key="index">
          <showMeContent></showMeContent>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import showMeContent from './showMeContent'
export default {
  name: 'ShowMeBox',
  components: {
    showMeContent
  },
  data() {
    return {
      lis: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  }
}
</script>
<style lang='less' scoped>
.showme {
  width: 950px;
  height: 606px;
  background: #fff;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .showme-title {
    height: 78px;
    width: 100%;
    display: flex;
    position: relative;
    z-index: 0;
    .chinese {
      font-size: 20px;
      color: #282d38;
      height: 100%;
      line-height: 78px;
      display: flex;
      p {
        font-size: 20px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        &:first-child {
          box-sizing: border-box;
          color: #fff;
          width: 139px;
          padding-left: 20px;
          font-size: 24px;
        }
      }
    }
    &::before {
      content: '更多';
      display: block;
      position: absolute;
      right: 23px;
      bottom: 50%;
      transform: translateY(50%);
      color: #77808f;
      font-size: 16px;
    }
    .show-bg {
      background-image: url('../../assets/images/logo-bg.png');
      position: absolute;
      top: 0;
      left: 0;
      width: 99px;
      height: 99px;
      border-radius: 0 0 99px 0;
      z-index: -1;
    }
  }
  .showme-content {
    width: 950px;
    box-sizing: border-box;
    position: relative;
    height: 528px;
    .showme-ul {
      padding: 0 25px;
      width: 950px;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      height: 528px;
      box-sizing: border-box;
      flex-wrap: wrap;
    }
  }
}
</style>
