<!--  -->
<template>
  <div class="showCon">
    <showmelist v-if="showme.length" :showme="showme"></showmelist>
    <pagination></pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import showmelist from 'common/showmelist'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  layout: 'default',
  components: {
    showmelist,
    pagination
  },
  meta: {
    title: '秀秀我'
  },
  computed: {
    ...mapGetters(['showme'])
  }
}
</script>
<style lang='less' scoped>
.showCon {
  width: 1210px;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 56px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 24px 20px 50px;
  /deep/.showmeList .showMeitem {
    margin-right: 135px;
    margin-bottom: 64px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
}
</style>
