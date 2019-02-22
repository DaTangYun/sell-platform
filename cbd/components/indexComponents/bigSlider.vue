<!--  -->
<template>
  <div class="bigSlider">
    <el-carousel class="bigslifer-el">
      <el-carousel-item v-for="(item,index) of slider" :key="index">
        <img :src="item.image">
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
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
