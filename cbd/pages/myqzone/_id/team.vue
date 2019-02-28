<!--  -->
<template>
  <div>
    <div class="myqzone-bottom">
      <div class="myqzone-left">
        <lefttab></lefttab>
      </div>
      <div class="myqzone-right">
        <myteam></myteam>
      </div>
    </div>
  </div>
</template>
<script>
import myteam from 'components/myqzoneComponents/myteam'
import lefttab from 'components/myqzoneComponents/lefttabs'
export default {
  components: {
    lefttab,
    myteam
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.myqzone-bottom {
  display: flex;
  .myqzone-left {
    width: 248px;
    height: 711px;
    margin-right: 20px;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 30px;
    margin-bottom: 20px;
    h4 {
      color: #282d38;
      font-size: 24px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
