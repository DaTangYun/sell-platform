<!--  -->
<template>
  <div>
    <div class="head-left">
      <cloudTitle></cloudTitle>
      <div class="headline-content">
        <Cloudcontent></Cloudcontent>
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import cloudTitle from 'components/cloudComponents/cloudTitle.vue'
import Cloudcontent from 'components/cloudComponents/Cloudcontent.vue'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    cloudTitle,
    pagination,
    Cloudcontent
  },
  meta: {
    title: '头条'
  },
  data() {
    return {
      contentlis: [0, 1, 2, 3, 4]
    }
  },
  computed: {
    ...mapGetters(['banquan'])
  },
  mounted() {
    console.log(this.banquan)
  }
}
</script>
<style lang='less' scoped>
.head-left {
  width: 950px;
  .headline-content {
    position: relative;
    width: 950px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    padding: 24px 24px 40px;
    box-sizing: border-box;
  }
}
</style>
