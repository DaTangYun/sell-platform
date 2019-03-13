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
import { mapGetters } from 'vuex'
import lefttab from 'components/myselfComponents/lefttabs'
export default {
  components: {
    lefttab
  },
  meta: {
    title: '个人中心'
  },
  middleware: 'auth',
  head() {
    return {
      title: this.profileMeta.seo_title || '传帮带',
      meta: [
        {
          hid: 'profileMetadesc',
          name: 'description',
          content: this.profileMeta.seo_desc
        },
        {
          hid: 'profileMetaKeyword',
          name: 'keyword',
          content: this.profileMeta.seo_keyword
        },
        {
          hid: 'profileMetaContent',
          name: 'content',
          content: this.profileMeta.seo_content
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['profileMeta'])
  },
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
