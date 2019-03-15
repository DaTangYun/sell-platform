<!--  -->
<template>
  <div class="myhead">
    <file></file>
  </div>
</template>
<script>
import file from 'components/myselfComponents/file'
export default {
  name: 'Messagelist',
  components: {
    file
  },
  meta: {
    title: '文档'
  }
}
</script>
<style lang='less' scoped>
.myhead {
  position: relative;
}
</style>
