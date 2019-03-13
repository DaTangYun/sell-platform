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
  meta: {
    title: '个人中心'
  },
  middleware: 'auth',
  watch: {
    $route(route) {
      const { name } = route
      const { id } = route.params
      if (name === 'myself-id-myactive') {
        this.$router.push({
          path: `/myself/${id}/myactive/zuzhi`
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.main {
  display: flex;
}
</style>
