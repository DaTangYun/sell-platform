<!--  -->
<template>
  <div class="help">
    <div class="help-content">
      <help></help>
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import pagination from 'components/cloudComponents/pagination.vue'
import help from 'components/cloudComponents/help.vue'
export default {
  components: {
    pagination,
    help
  },
  meta: {
    title: '帮帮我'
  }
}
</script>
<style lang='less' scoped>
.help {
  display: flex;
  margin-bottom: 56px;
  .help-content {
    background-color: #fff;
    border-radius: 6px;
    width: 950px;
    height: 1283px;
    margin-right: 12px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 24px;
  }
}
</style>
