<!--  -->
<template>
  <div class="w">
    <div class="main">
      <lefttab></lefttab>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
import lefttab from 'components/myselfComponents/lefttabs'
export default {
  components: {
    lefttab
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.main {
  display: flex;
}
</style>
