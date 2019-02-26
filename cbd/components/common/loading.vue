<template lang="html">
  <div v-if="loading" class="loading-page">
    <div v-loading="loading"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
<style lang="less" scoped>
.loading-page {
  position: fixed;
  top: 200px;
  left: 500px;
  width: 30px;
  height: 30px;
}
</style>
