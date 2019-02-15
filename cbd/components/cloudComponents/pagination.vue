<!--  -->
<template>
  <div>
    <div class="pagnation">
      <el-pagination
        background
        layout="pager"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination'
}
</script>
<style lang='less' scoped>
.pagnation {
  width: 902px;
  text-align: center;
}
</style>
