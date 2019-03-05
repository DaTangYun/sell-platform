<!--  -->
<template>
  <div class="w">
    <div class="publish-right">
      <toptabs></toptabs>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
import toptabs from 'components/myselfComponents/toptabs'
export default {
  components: {
    toptabs
  },
  meta: {
    title: '我的发布'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.publish-right {
  width: 950px;
  height: 1000px;
  background-color: #fff;
  margin-left: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
}
</style>
