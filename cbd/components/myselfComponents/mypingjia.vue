<!--  -->
<template>
  <div>
    <h4>
      我的评价
    </h4>
    <pingjiacontent></pingjiacontent>
  </div>
</template>
<script>
import pingjiacontent from 'components/myselfComponents/pingjiacontent'
export default {
  name: 'Mypingjia',
  components: {
    pingjiacontent
  }
}
</script>
<style lang='less' scoped>
h4 {
  border-bottom: 1px solid #e1e2e6;
  padding-bottom: 20px;
}
.mye {
  margin-bottom: 30px;
  margin-top: 20px;
  li {
    height: 110px;
    border-bottom: 1px dashed #e1e2e6;
    box-sizing: border-box;
    padding-top: 20px;
    .top {
      margin-bottom: 15px;
      h5 {
        display: inline-block;
        margin-right: 60px;
        font-size: 16px;
        font-weight: 400;
      }
      span {
        color: #57606f;
        font-size: 14px;
      }
      p {
        color: #57606f;
        font-size: 14px;
      }
    }
  }
}
</style>
