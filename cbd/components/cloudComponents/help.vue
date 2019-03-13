<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in helplist" :key="index" :style="{ width: wid + 'px' }" :to="{name: 'discont-help-id',params: {id: item.id}}">
        <div :style="{ height: hei + 'px' }">
          <img :src="item.image" alt="">
        </div>
        <h5>                          
          {{ item.title }}
        </h5>
        <span>
          {{ item.desc }}         
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Help',
  props: {
    helplist: {
      type: Array,
      default() {
        return []
      }
    },
    wid: {
      type: String,
      default: '284'
    },
    hei: {
      type: String,
      default: '201'
    }
  }
}
</script>
<style lang='less' scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    margin-bottom: 32px;
    width: 284px;
    margin-right: 20px;
    box-sizing: border-box;
    cursor: pointer;
    &:nth-child(3n) {
      margin-right: 0px;
    }
    div {
      height: 201px;
      background: rgba(179, 179, 179, 1);
      border-radius: 6px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h5 {
      color: #282d38;
      line-height: 20px;
    }
    span {
      color: #77808f;
      font-size: 14px;
    }
  }
}
</style>
