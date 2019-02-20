<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'能帮会干'">
      <CanDoContent></CanDoContent>
      <pagination></pagination>
    </helpbox>  
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import CanDoContent from 'common/CanDoContent'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Helpcando',
  components: {
    helpbox,
    CanDoContent,
    pagination
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.helpme {
  border-bottom: 1px dashed #e1e2e6;
  margin-bottom: 10px;
}
</style>
