<!--  -->
<template>
  <div class="w">
    <div class="main">
      <lefttab></lefttab>
      <div>
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>
<script>
import lefttab from 'components/myselfComponents/lefttabs'
export default {
  components: {
    lefttab
  },
  meta: {
    title: '个人中心'
  },
  middleware: 'auth'
}
</script>
<style lang='less' scoped>
.main {
  display: flex;
}
</style>
