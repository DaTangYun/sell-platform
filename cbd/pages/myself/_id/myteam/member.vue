<!--  -->
<template>
  <div>
    <toptabs :toplist="toplist"></toptabs>
  </div>
</template>
<script>
import toptabs from 'components/myselfComponents/toptabs'
export default {
  components: {
    toptabs
  },
  data() {
    return {
      toplist: [
        { name: '团队简介', url: '/jianjie', par: 'myteam' },
        { name: '团队成员', url: '/member', par: 'myteam' },
        { name: '申请加入人员', url: '/shenqing', par: 'myteam' }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
</style>
