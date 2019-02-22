<!--  -->
<template>
  <div class="discont">
    <div class="discont-cont">
      <CanDoContent></CanDoContent>
      <pagination></pagination>
    </div>
  </div>   
</template>
<script>
import CanDoContent from 'common/CanDoContent'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    CanDoContent,
    pagination
  },
  meta: {
    title: '能帮会干'
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
