<template>
  <div>
    <div class="canDome-li-content">
      <div class="ul-img">
        <img src="../../assets/images/phone.png" alt="">
      </div>
      <p class="ul-title">
        优惠优惠优惠优惠优惠优惠优
      </p>
      <div class="price">
        价格600
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanDoContent',
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
.canDome-li-content {
  width: 284px;
  height: 258px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .price {
    line-height: 22px;
    font-size: 14px;
    height: 32px;
    color: rgba(255, 99, 72, 1);
  }
}
</style>
