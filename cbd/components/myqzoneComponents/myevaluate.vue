<!--  -->
<template>
  <div>
    <helpbox :head="'他的评价'" :wid="'950'">
      <div class="textarea">
        <el-input type="textarea" :placeholder="'请输入内容'" :rows="'7'"></el-input>
      </div>
      <pingjiacontent></pingjiacontent>
      <pagination></pagination>
    </helpbox>
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import pagination from 'components/cloudComponents/pagination.vue'
import pingjiacontent from 'components/myselfComponents/pingjiacontent'
export default {
  name: 'Myevaluate',
  components: {
    helpbox,
    pagination,
    pingjiacontent
  },
  data() {
    return {
      mye: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
.textarea {
  width: 902px;
  border-radius: 6px;
}
</style>
