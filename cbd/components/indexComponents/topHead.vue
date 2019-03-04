<!--  -->
<template>
  <div>
    <div class="topHead-tabs">
      <ul class="tabs-ul">
        <li v-for="(item,index) in topHeadList" :key="index" :class="{active:index == show}" class="tabs-li" @click="tab(index)">
          {{ item }}
        </li>
      </ul>
      <div class="tabCon">
        <div v-if="show == 0" class="topHead">
          <no-ssr>
            <slider :headlist="headlist"></slider>
          </no-ssr>
        </div>
        <div v-if="show == 1" class="topMeaage">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <li v-for="(item,index) in infolist" :key="index">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import slider from './slider'
export default {
  name: 'TopHead',
  components: {
    slider
  },
  data() {
    return {
      topHeadList: ['头条', '信息'],
      show: 0,
      activeName: '',
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
    ...mapGetters(['headlist', 'infolist'])
  },
  methods: {
    tab: function(index) {
      this.show = index
      if (this.show === 0) {
        this.activeName = 'topHead'
      } else {
        this.activeName = 'topMeaage'
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.topHead-tabs {
  width: 248px;
  height: 360px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 16px 19px 17px;
  box-sizing: border-box;
  overflow: hidden;
  .tabs-ul {
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #dadfe5;
    padding-bottom: 16px;
    .tabs-li {
      border-right: 2px solid #282d38;
      box-sizing: border-box;
      padding-right: 18px;
      cursor: pointer;
      &:last-child {
        border: none;
        padding-left: 20px;
      }
    }
  }
}
.active {
  color: #00a0e9;
}
.tabCon {
  box-sizing: border-box;
  overflow: hidden;
  height: 290px;
  overflow: hidden;
  .topHead {
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
  }
}
.topMeaage {
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
        height: 41px;
        overflow: hidden;
      }
    }
  }
}
</style>
