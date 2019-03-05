<!--  -->
<template>
  <div class="safe">
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  meta: {
    title: '我的团队'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.safe {
  margin-left: 12px;
  background-color: #fff;
  width: 950px;
  box-sizing: border-box;
  padding: 20px;
  height: 671px;
  padding-bottom: 0px;
  margin-bottom: 80px;
}
</style>
