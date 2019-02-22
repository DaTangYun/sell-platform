<!--  -->
<template>
  <div class="headlist">
    <div class="send">
      <send :send="{title:'发布头条', path:'/messageComp'}"></send>
    </div>
    <messagelist></messagelist>
  </div>
</template>
<script>
import send from 'components/myselfComponents/send'
import messagelist from 'components/myselfComponents/messagelist'
export default {
  name: 'Headlist',
  components: {
    send,
    messagelist
  }
}
</script>
<style lang='less' scoped>
.headlist {
  position: relative;
  margin-bottom: 140px;
  .send {
    position: absolute;
    top: -20px;
    right: 0px;
    width: 80px;
    z-index: 999;
  }
}
</style>
