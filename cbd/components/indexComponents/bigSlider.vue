<!--  -->
<template>
  <div class="bigSlider">
    <el-carousel class="bigslifer-el">
      <el-carousel-item v-for="(item,index) in imglist" :key="index">
        <img :src="item.idView">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'BigSlider',
  data() {
    return {
      imglist: [
        { id: 0, idView: require('../../assets/images/slider.jpg') },
        { id: 1, idView: require('../../assets/images/slider.jpg') },
        { id: 2, idView: require('../../assets/images/slider.jpg') }
      ]
    }
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
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
