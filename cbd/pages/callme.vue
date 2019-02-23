<!--  -->
<template>
  <div class="callme">
    <div class="w">
      <h3>
        联系我们
      </h3>
      <p>
        国家税务总局公告2018年第28号 国家税务总局关于发布《企业所得税税前扣除凭证管理管理...
      </p>
      <div class="img">
        <img src="" alt="">
        <img src="" alt="">
      </div>
      <p>
        400-000-1000
      </p>
      <p>
        400-000-1000
      </p>
    </div>
  </div>
</template>
<script>
export default {
  meta: {
    title: '联系我们'
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.callme {
  background-color: #fff;
  min-height: 353px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 40px;
}
h3 {
  margin-bottom: 20px;
}
.img {
  margin: 20px 0;
  display: flex;
  img {
    margin-right: 10px;
  }
}
p {
  &:first-child {
    margin-bottom: 0px;
  }
  margin-bottom: 20px;
}
</style>
