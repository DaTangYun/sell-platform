<template>
  <div class="activity">
    <activity></activity>
    <pagination></pagination>
  </div>
</template>

<script>
import pagination from 'components/cloudComponents/pagination.vue'
import activity from 'components/discontComponents/activity.vue'
export default {
  components: {
    pagination,
    activity
  },
  meta: {
    title: '优惠活动'
  }
}
</script>
<style lang='less' scoped>
.activity {
  width: 950px;
  background-color: #fff;
  margin-right: 12px;
  box-sizing: border-box;
  padding-bottom: 24px;
}
</style>
