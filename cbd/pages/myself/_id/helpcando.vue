<!--  -->
<template>
  <div class="helpcando">
    <nuxt-link to="/submitnbhg" class="nbhg">
      发布能帮会干
    </nuxt-link>
    <secondpart></secondpart>
  </div>
</template>
<script>
import secondpart from 'components/myselfComponents/secondpart'
export default {
  components: {
    secondpart
  },
  meta: {
    title: '能帮会干'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.helpcando {
  background-color: #fff;
  position: relative;
  margin-left: 12px;
  box-sizing: border-box;
  padding-top: 73px;
  margin-bottom: 30px;
  .nbhg {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #00a0e9;
  }
}
</style>
