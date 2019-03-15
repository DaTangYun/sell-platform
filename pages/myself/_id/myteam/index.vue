<!--  -->
<template>
  <div class="safe">
    <myteam></myteam>
  </div>
</template>
<script>
import myteam from 'components/myselfComponents/myteam'
export default {
  meta: {
    title: '我的团队'
  },
  components: {
    myteam
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
