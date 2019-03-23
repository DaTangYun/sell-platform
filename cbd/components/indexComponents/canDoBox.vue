<!-- -->
<template>
  <div class="canDome">
    <div class="canDome-title">
      <div class="canDo-bg"></div>
      <div class="candochinese">
        <p>{{ desc }}</p>
        <ul class="cando-chinese-ul">
          <li v-for="(item,index) in list" :key="index" :data-ins="index" :class="{active:showIndex == index}" @click="showMe(index)">
            {{ item }}
          </li>
        </ul>
        <nuxt-link :to="{name: `${tzurl}`}" class="more">
          更多
        </nuxt-link>
      </div>
    </div> 
    <div class="canDome-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanDoBox',
  props: {
    desc: {
      type: String,
      default: '惠带'
    },
    list: {
      type: Array,
      default() {
        return []
      }
    },
    tzurl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      lis: [0, 1, 2, 3, 4, 5],
      showIndex: 0
    }
  },
  // computed: {
  //   tzurl() {
  //     if ()
  //   }
  // },
  methods: {
    showMe(index) {
      this.$emit('showMe', index)
      this.showIndex = index
    }
  }
}
</script>
<style lang='less'>
@url: '~assets/images/logo-bg.png';
@import '~style/variable.less';
@import '~style/mixin.less';
.canDome {
  width: 950px;
  background: @common_bgc;
  border-radius: 6px;
  margin-right: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .active {
    color: #00a0e9;
  }
  .canDome-title {
    height: 78px;
    width: 100%;
    display: flex;
    position: relative;
    z-index: 0;
    .candochinese {
      font-size: 20px;
      color: #282d38;
      height: 100%;
      line-height: 78px;
      display: flex;
      .cando-chinese-ul {
        display: flex;
        li {
          box-sizing: border-box;
          padding: 0 10px;
          margin-right: 40px;
          cursor: pointer;
        }
      }
      p {
        font-size: 20px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        box-sizing: border-box;
        color: #fff;
        width: 139px;
        padding-left: 20px;
        font-size: 24px;
      }
    }
    .more {
      position: absolute;
      right: 23px;
      bottom: 50%;
      transform: translateY(50%);
      color: #77808f;
      font-size: 16px;
    }
    .canDo-bg {
      .bgc(@url);
      position: absolute;
      top: 0;
      left: 0;
      width: 99px;
      height: 99px;
      border-radius: 6px 0 99px 0;
      z-index: -1;
    }
  }
  .canDome-content {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    .canDome-ul {
      padding: 0 25px;
      width: 100%;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      box-sizing: border-box;
      flex-wrap: wrap;
      li {
        margin-right: 24px;
        &:nth-of-type(3n) {
          margin: 0;
        }
      }
    }
  }
}
</style>
