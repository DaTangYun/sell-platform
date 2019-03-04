<!--  -->
<template>
  <div class="discont">
    <div class="w">
      <div class="discont-index">
        <div class="left">
          <nuxt-child class="child" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  meta: {
    title: '带'
  },
  data() {
    return {
      show: 1
    }
  },
  computed: {
    showPath() {
      const reg = /discont/
      const flag = reg.test(this.$route.path)
      return flag
    }
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
  // .child {
  //   top: 0px;
  //   position: absolute;
  //   left: 50%;
  //   transform: translateX(-50%);
  // }
}
</style>
