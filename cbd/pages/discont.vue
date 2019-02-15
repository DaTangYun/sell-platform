<!--  -->
<template>
  <div class="discont">
    <div class="w">
      <div class="discont-index">
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
  components: {
    RightComponent
  },
  meta: {
    title: '带'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.discont {
  .activity {
    width: 950px;
    background-color: #fff;
    margin-right: 12px;
    box-sizing: border-box;
    padding-bottom: 24px;
  }
  .discont-index {
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
  .child {
    top: 0px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
