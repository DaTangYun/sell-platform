<!--  -->
<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li v-for="(item,index) in headlist" :key="index">
              <h4>
                {{ item.title }}
              </h4>
              <p>
                {{ item.desc }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Slider',
  data() {
    return {
      swiperlist: [0, 1, 2, 3],
      swiperOption: {
        slidePerView: 2,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30
      }
    }
  },
  computed: {
    ...mapGetters(['headlist'])
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
      height: 40px;
      overflow: hidden;
    }
  }
}
</style>
