<!-- -->
<template>
  <div class="canDome">
    <div class="canDome-title">
      <div class="canDo-bg"></div>
      <div class="chinese">
        <p>{{ desc }}</p>
        <p>能帮会干</p>
      </div>
    </div>
    <div class="canDome-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanDoBox',
  props: {
    desc: {
      type: String,
      default: '惠带'
    }
  },
  data() {
    return {
      lis: [0, 1, 2, 3, 4, 5]
    }
  }
}
</script>
<style lang='less' scoped>
@url: '~assets/images/logo-bg.png';
@import '~style/variable.less';
@import '~style/mixin.less';
.canDome {
  width: 950px;
  height: 606px;
  background: @common_bgc;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .canDome-title {
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
    .canDo-bg {
      .bgc(@url);
      position: absolute;
      top: 0;
      left: 0;
      width: 99px;
      height: 99px;
      border-radius: 6px 0 99px 0;
      z-index: -1;
    }
  }
  .canDome-content {
    width: 950px;
    padding: 0 25px;
    box-sizing: border-box;
    position: relative;
    height: 528px;
    .canDome-ul {
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
      li {
        margin-right: 24px;
        &:nth-of-type(3n) {
          margin: 0;
        }
      }
    }
  }
}
</style>
