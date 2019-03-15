<!--  -->
<template>
  <div class="mypingjia">
    <mypingjia></mypingjia>
  </div>
</template>
<script>
import mypingjia from 'components/myselfComponents/mypingjia'
export default {
  components: {
    mypingjia
  },
  meta: {
    title: '我的评价'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.mypingjia {
  width: 950px;
  background-color: #fff;
  margin-left: 12px;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 50px;
}
</style>
