<!--  -->
<template>
  <div class="bigSlider">
    <el-carousel class="bigslifer-el">
      <el-carousel-item v-for="(item,index) of slider" :key="index" class="bigslifer-el-item">
        <div class="img-wrap">
          <img :src="item.image">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BigSlider',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['slider'])
  }
}
</script>
<style lang='less' scoped>
.bigSlider {
  width: 690px;
  height: 360px;
  border-radius: 6px;
  margin: 0 12px;
  .bigslifer-el {
    width: 100%;
    height: 100%;
    .bigslifer-el-item {
      width: 690px;
      height: 360px;
      .img-wrap {
        width: 100%;
        height: 0;
        position: relative;
        overflow: hidden;
        padding-bottom: 52.17391304347826%;
        img {
          width: 100%;
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
