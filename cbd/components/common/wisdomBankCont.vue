<!--  -->
<template>
  <div class="wisdom-c-box">
    <img :src="url" class="wisdom-con-img">
    <p>东关剧团附近房屋出租</p>
    <ul class="wisdom-ul">
      <li v-for="(item,index) in list" :key="index" class="wisdom-li">
        <div class="wisdom-tri">
          <img src="../../assets/images/right.png" alt="">
        </div>
        <p>
          国家税务总局公告2018年国家税务总局公告2018年
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Wisdomcbox',
  props: {
    url: {
      type: String,
      default: require('../../assets/images/big.png')
    }
  },
  data() {
    return {
      list: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.wisdom-con-img {
  width: 216px;
  height: 111px;
  border-radius: 6px;
}
p {
  line-height: 30px;
  color: #282d38;
  .ellipsis();
}
.wisdom-ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .wisdom-li {
    height: 31px;
    display: flex;
    line-height: 31px;
    .wisdom-tri {
      position: relative;
      width: 21px;
      img {
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
      }
    }
    p {
      .ellipsis();
      width: 191px;
    }
  }
}
</style>
