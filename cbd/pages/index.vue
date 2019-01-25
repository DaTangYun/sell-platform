<template>
  <section class="index">
    <div class="w">
      <can-do-box :desc="'云传'"></can-do-box>
      <can-do-box :desc="'智帮'"></can-do-box>
      <can-do-box :desc="'惠带'"></can-do-box>
    </div>
  </section> 
</template>
<script>
import canDoBox from 'components/indexComponents/canDoBox'
export default {
  components: {
    canDoBox
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
