<!--  -->
<template>
  <div class="cloud">
    <div class="w">
      <div class="head-index">
        <div class="left">
          <nuxt-child class="child" />
        </div>
        <RightComponent></RightComponent>
      </div>
    </div>
  </div>
</template>
<script>
import RightComponent from 'components/headlineComponents/rightComponents.vue'
export default {
  layout: 'default',
  meta: {
    title: '传'
  },
  components: {
    RightComponent
  }
}
</script>
<style lang='less' scoped>
.cloud {
  border-bottom: 4px solid #00a0e9;
}
.head-index {
  width: 1210px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 56px;
  box-sizing: border-box;
  .left {
    width: 950px;
    height: 1354px;
    position: relative;
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
.child {
  top: 0px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
