<!--  -->
<template>
  <div>
    <div class="topLine-ul-top">
      <ul>
        <li v-for="(item,index) in headlist" :key="index">
          <div class="li-img" :style="{ width: wids + 'px',height: hei + 'px' }">
            <img :src="item.cover" alt="">
          </div>
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
    <div class="topLine-ul-bottom">
      <ul>
        <li v-for="(item,index) in headlist" :key="index" :style="{ width: wid }">
          <div>
            {{ item.cate_name }}
          </div>
          <p>
            {{ item.desc }}
          </p>
          <span>
            {{ item.createtime }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Topline',
  props: {
    toplists: {
      type: Array,
      default() {
        return [0, 1, 2, 3]
      }
    },
    bottomlist: {
      type: Array,
      default() {
        return [0, 1, 2, 3, 4, 5, 6, 7]
      }
    },
    wid: {
      type: String,
      default: '50%'
    },
    wids: {
      type: String,
      default: '281'
    },
    hei: {
      type: String,
      default: '196'
    }
  },
  computed: {
    ...mapGetters(['headlist', 'infolist'])
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.topLine-ul-top {
  overflow: hidden;
  ul {
    display: flex;
    margin-bottom: 27px;
    box-sizing: border-box;
    li {
      margin-right: 16px;
      .li-img {
        width: 281px;
        height: 196px;
        background: rgba(231, 228, 223, 1);
        border-radius: 6px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        .ellipsis();
        line-height: 40px;
        color: #282d38;
        max-width: 281px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.topLine-ul-bottom {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      display: flex;
      margin-bottom: 16px;
      box-sizing: border-box;
      padding-left: 5px;
      div {
        padding: 0 10px;
        height: 31px;
        background: rgba(241, 242, 246, 1);
        border-radius: 6px;
        box-sizing: border-box;
        margin-right: 15px;
        color: #747d8c;
        text-align: center;
        line-height: 31px;
      }
      p {
        .ellipsis();
        max-width: 325px;
        display: block;
        padding: 0 5px;
        box-sizing: border-box;
        margin-right: 10px;
      }
      span {
        color: #77808f;
      }
    }
  }
}
</style>
