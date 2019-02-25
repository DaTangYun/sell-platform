<!--  -->
<template>
  <div v-if="swiperlist.length">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item,index) in headlist" :key="index" class="swiper-slide my-slider">
          <h4>
            {{ item.title }}
          </h4>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Slider',
  props: {
    show: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      info: [],
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
  computed: {
    ...mapGetters(['headlist', 'infolist'])
  },
  mounted() {
    this.initSwiper()
    this.handleList()
  },
  methods: {
    initSwiper() {
      if (process.client) {
        require('vue-awesome-swiper/dist/ssr')
      }
    },
    handleList() {
      console.log(this.activeName)
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
