<!--  -->
<template>
  <div>
    <div class="topLine-ul-top">
      <ul>
        <nuxt-link v-for="(item,index) in list" :key="index" tag="li" :to="{name: `cloud-${hein}-id`,params: {id: item.id}}">
          <div class="li-img" :style="{ width: wids + 'px',height: hei + 'px' }">
            <img :src="item.cover" alt="">
          </div>
          <p>
            {{ item.title }}
          </p>
        </nuxt-link>
      </ul>
    </div>
    <div class="topLine-ul-bottom">
      <ul>
        <nuxt-link v-for="(item,index) in newlist" :key="index" tag="li" :style="{ width: wid }" :to="{name: `cloud-${hein}-id`,params: {id: item.id}}">
          <div>
            {{ item.cate_name }}
          </div>
          <p>
            {{ item.title }}
          </p>
          <span>
            {{ item.createtime }}
          </span>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Topline',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    wid: {
      type: String,
      default: '50%'
    },
    hein: {
      type: String,
      default: ''
    },
    wids: {
      type: String,
      default: '281'
    },
    hei: {
      type: String,
      default: '196'
    },
    action: {
      type: String,
      default: ''
    }
  },
  computed: {
    newlist() {
      return this.list.slice(4)
    }
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
      cursor: pointer;
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
      cursor: pointer;
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
        width: 325px;
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
