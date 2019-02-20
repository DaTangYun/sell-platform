<!--  -->
<template>
  <div>
    <div class="topLine-ul-top">
      <ul>
        <li v-for="(item,index) in toplists" :key="index">
          <div class="li-img" :style="{ width: wids + 'px',height: hei + 'px' }">
            <img src="" alt="">
          </div>
          <p>
            东关剧团附近房屋出租
          </p>
        </li>
      </ul>
    </div>
    <div class="topLine-ul-bottom">
      <ul>
        <li v-for="(item,index) in bottomlist" :key="index" :style="{ width: wid }">
          <div>成才教育</div>
          <p>2018年10月份新增失信联合惩戒对象公示</p>
          <span>11-09</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
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
  }
}
</script>
<style lang='less' scoped>
.topLine-ul-top {
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
      }
      p {
        line-height: 40px;
        color: #282d38;
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
        width: 82px;
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
        display: block;
        width: 398px;
        box-sizing: border-box;
        margin-right: 35px;
      }
      span {
        color: #77808f;
      }
    }
  }
}
</style>
