<!--  -->
<template>
  <div class="discont">
    <div class="discont-cont">
      <CanDoContent :dishelpdo="dishelpdo"></CanDoContent>
      <pagination></pagination>
    </div>
  </div>   
</template>
<script>
import CanDoContent from 'common/CanDoContent'
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CanDoContent,
    pagination
  },
  meta: {
    title: '能帮会干'
  },
  computed: {
    ...mapGetters(['dishelpdo'])
  }
}
</script>
<style lang='less' scoped>
.discont {
  display: flex;
  margin-bottom: 56px;
  .discont-cont {
    width: 950px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
  }
}
</style>
