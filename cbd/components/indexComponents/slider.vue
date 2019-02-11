<!--  -->
<template>
  <div v-if="swiperlist.length">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item,index) in swiperlist" :key="index" class="swiper-slide my-slider">
          <h4>
            标题标题标题标题标题标题标题题标题题标题
          </h4>
          <p>
            部分正文部分正文部分正文部分正部分正文部分正文部分正文部分正
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      swiperlist: [0, 1, 2, 3],
      swiperOption: {
        direction: 'vertical',
        pagnation: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        slidesPerView: 3.5,
        height: 300
      }
    }
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      if (process.client) {
        require('vue-awesome-swiper/dist/ssr')
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
h4 {
  font-size: 14px;
  color: #282d38;
  line-height: 30px;
  box-sizing: border-box;
  .ellipsis();
}
p {
  color: #77808f;
  font-size: 14px;
  margin-bottom: 16px;
}
.my-slider {
  border-bottom: 1px solid #dadfe6;
  &:last-child {
    border: none;
  }
}
</style>
