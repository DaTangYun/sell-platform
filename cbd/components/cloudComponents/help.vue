<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in helplist" :key="index" :style="{ width: wid + 'px' }">
        <div :style="{ height: hei + 'px' }">
          <img src="" alt="">
        </div>
        <h5>                          
          《企业所得税税前扣除凭证管理办理办...
        </h5>
        <span>
          耿镇京东分拣150元一天 要求男要求男要求男         
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
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
    &:nth-child(3n) {
      margin-right: 0px;
    }
    div {
      height: 201px;
      background: rgba(179, 179, 179, 1);
      border-radius: 6px;
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
