<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'帮帮我'">
      <div class="helpme">
        <help></help>
      </div>
      <pagination></pagination>
    </helpbox>  
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import help from 'components/cloudComponents/help.vue'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    helpbox,
    help,
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
