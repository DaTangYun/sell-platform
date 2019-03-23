<!--  -->
<template>
  <div v-loading="loading" class="slider">
    <div v-if="headlist.length" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <nuxt-link v-for="(item,index) in headlist" :key="index" tag="li" :to="{name: `cloud-cloudhead-id`,params: {id: item.id}}">
              <h4>
                {{ item.title }}
              </h4>
              <p>
                {{ item.desc }}
              </p>
            </nuxt-link>
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
        spaceBetween: 30,
        observer: true,
        observeParents: true
      },
      loading: true
    }
  },
  computed: {
    ...mapGetters(['headlist'])
  },
  watch: {
    headlist(list) {
      if (list.length) {
        this.loading = false
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.headlist.length) {
        this.loading = false
      }
    })
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.slider {
  height: 294px;
}
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
    cursor: pointer;
    h4 {
      font-size: 14px;
      color: #282d38;
      margin-bottom: 8px;
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
