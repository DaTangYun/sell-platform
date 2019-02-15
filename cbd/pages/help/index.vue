<!--  -->
<template>
  <div>
    <div class="w">
      <div class="showCon">
        <showmelist :showme="[0,1,2,3,4,5,6,7,8,9,10,11,12,13]"></showmelist>
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import showmelist from 'common/showmelist'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  layout: 'default',
  components: {
    showmelist,
    pagination
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
