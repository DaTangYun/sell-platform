<template>
  <section class="index">
    <div class="w">
      <showMe></showMe>   
      <canDo></canDo>   
    </div>
  </section> 
</template>
<script>
import canDo from '../components/indexComponents/canDo'
import showMe from '../components/indexComponents/showMe'
export default {
  components: {
    canDo,
    showMe
  }
}
</script>
<style lang="less" scoped>
.index {
  background-color: #f1f2f6;
  padding-bottom: 10px;
  box-sizing: border-box;
}
</style>
