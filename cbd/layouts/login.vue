<template>
  <section class="container">
    <div class="container-box">
      <div class="login-left">
        <img src="../assets/images/loginbg.png" alt="">
      </div>
      <div class="login-right">
        <nuxt />
      </div>
    </div>
    <div class="tech-sup">
      <p>{{ banquan.banquan }}</p>
      <p>{{ banquan.beian }}</p>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['banquan'])
  }
}
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #b8e7fc;
  .container-box {
    display: flex;
    width: 1174px;
    height: 741px;
    background: rgba(245, 247, 250, 1);
    box-shadow: 0px 6px 40px 0px rgba(0, 56, 82, 0.24);
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-left {
    width: 50%;
    height: 100%;
    position: relative;
    img {
      position: absolute;
      top: -23px;
      left: -29px;
    }
  }
  .login-right {
    width: 50%;
    height: 100%;
  }
  .tech-sup {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(87, 96, 111, 1);
    text-align: center;
    line-height: 27px;
  }
}
</style>
