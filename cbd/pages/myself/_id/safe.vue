<!--  -->
<template>
  <div class="safe">
    <safe></safe>
  </div>
</template>
<script>
import safe from 'components/myselfComponents/safe'
export default {
  components: {
    safe
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
