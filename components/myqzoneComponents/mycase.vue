<!--  -->
<template>
  <div>
    <helpbox :wid="'950'" :head="'我的案例'">
      <cases></cases>
    </helpbox>  
  </div>
</template>
<script>
import helpbox from 'components/myqzoneComponents/helpbox'
import cases from 'components/wisdombank/cases.vue'
export default {
  name: 'Mycase',
  components: {
    helpbox,
    cases
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
