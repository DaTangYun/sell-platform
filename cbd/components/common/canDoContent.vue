<template>
  <div>
    <ul class="cando">
      <li v-for="(item,index) in discont" :key="index" class="candoli">
        <div class="canDome-li-content" :style="{ width: wid + 'px' }">
          <div class="ul-img" :style="{ height: hei + 'px' }">
            <img src="../../assets/images/phone.png" alt="">
          </div>
          <p class="ul-title">
            优惠优惠优惠优惠优惠优惠优
          </p>
          <div class="price">
            价格600
          </div>
        </div>          
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CanDoContent',
  props: {
    wid: {
      type: String,
      default: '284'
    },
    hei: {
      type: String,
      default: '201'
    },
    discont: {
      type: Array,
      default() {
        return [0, 1, 2, 3, 4, 5, 6, 7]
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.cando {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  .candoli {
    margin-right: 21px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    .canDome-li-content {
      width: 284px;
      box-sizing: border-box;
      font-size: 16px;
      .ul-img {
        width: 100%;
        height: 201px;
        border-radius: 6px;
        margin-bottom: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ul-title {
        line-height: 26px;
        font-weight: 400;
        color: rgba(40, 45, 56, 1);
        font-size: 16px;
        .ellipsis();
        display: block;
      }
      .price {
        line-height: 22px;
        font-size: 14px;
        height: 32px;
        color: rgba(255, 99, 72, 1);
      }
    }
  }
}
</style>
