<template>
  <div class="w">
    <div class="help">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  meta: {
    title: '帮'
  }
}
</script>
<style lang='less' scoped>
.child {
  top: 0px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
