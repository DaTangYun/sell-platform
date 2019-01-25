<template>
  <div>
    <baseheader>
    </baseheader>
    <nuxt />
    <basefooter>
    </basefooter>
  </div>
</template>
<script>
import basefooter from './footer'
import baseheader from './header'
export default {
  components: {
    basefooter,
    baseheader
  }
}
</script>
<style lang="less" scoped>
</style>
