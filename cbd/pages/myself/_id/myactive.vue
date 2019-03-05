<!--  -->
<template>
  <div class="myactivity">
    <Toptabs :toplist="toplist"></Toptabs>
    <!-- <myactivity></myactivity> -->
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
// import myactivity from 'components/myselfComponents/myactivity'
import Toptabs from 'components/myselfComponents/toptabs'
export default {
  components: {
    // myactivity,
    Toptabs
  },
  meta: {
    title: '我的活动'
  },
  data() {
    return {
      toplist: [
        { name: '我组织的活动', url: '/zuzhi', par: 'myactive' },
        { name: '我参与的活动', url: '/canyu', par: 'myactive' }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.myactivity {
  width: 950px;
  background-color: #fff;
  margin-left: 12px;
}
</style>
