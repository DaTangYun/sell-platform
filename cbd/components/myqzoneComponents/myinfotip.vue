<!--  -->
<template>
  <div>
    <helpbox :head="'我的信息'" :wid="'950'">
      <Cloudcontent></Cloudcontent>
      <pagination></pagination>
    </helpbox>
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import Cloudcontent from 'components/cloudComponents/Cloudcontent.vue'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Myinfotip',
  components: {
    helpbox,
    Cloudcontent,
    pagination
  }
}
</script>
<style lang='less' scoped>
</style>
