<template>
  <div>
    <ul class="cando">
      <nuxt-link v-for="(item,index) in dishelpdo" :key="index" class="candoli" tag="li" :to="{name: 'discont-helpcando-id',params: {id: item.id}}">
        <div class="canDome-li-content" :style="{ width: wid + 'px' }">
          <div class="ul-img" :style="{ height: hei + 'px' }">
            <img :src="item.image" alt="">
          </div>
          <p class="ul-title">
            {{ item.title }}
          </p>
          <div class="price">
            {{ item.price }}
          </div>
        </div>          
      </nuxt-link>
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
    dishelpdo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      page: 1,
      limit: 6
    }
  }
  // methods: {
  //   handlehelp(item, index) {
  //     console.log(item.id)
  //   }
  // }
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
    cursor: pointer;
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
