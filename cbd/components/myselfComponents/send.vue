<!--  -->
<template>
  <div class="send">
    <nuxt-link :to="send.path">
      {{ send.title }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Send',
  props: {
    send: {
      type: Object,
      default() {
        return {
          title: '发布头条',
          path: '/messageComp'
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.send {
  position: absolute;
  top: -40px;
  right: 30px;
  padding: 0 20px;
  z-index: 999;
  a {
    color: #00a0e9;
  }
}
</style>
