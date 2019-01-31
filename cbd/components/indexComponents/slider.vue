<!--  -->
<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li v-for="(item,index) in swiperlist" :key="index">
              <h4>
                标题标题标题标题标题标题标题题标题题标题
              </h4>
              <p>
                部分正文部分正文部分正文部分正部分正文部分正文部分正文部分正
              </p>
            </li>
          </ul>
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
        pagnation: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        slidePerView: 2,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this)
          },
          tap() {
            console.log('onTap', this)
          }
        }
      }
    }
  },
  beforeCreate() {
    if (process.client) {
      require('vue-awesome-swiper')
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
ul {
  height: 294px;
  width: 100%;
  overflow: hidden;
  li {
    width: 100%;
    height: 87px;
    border-bottom: 1px solid #dadfe6;
    box-sizing: border-box;
    padding-top: 10px;
    h4 {
      font-size: 14px;
      color: #282d38;
      margin-bottom: 14px;
      .ellipsis();
    }
    p {
      color: #77808f;
      font-size: 14px;
      height: 30px;
    }
  }
}
</style>
