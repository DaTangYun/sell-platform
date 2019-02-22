<!--  -->
<template>
  <div>
    <div class="headline-category">
      <span>{{ titlename }}</span>
      <ul>
        <li v-for="(item,index) in heads" :key="index" @click="huoqu">
          {{ item }}
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'CloudTitle',
  props: {
    titlename: {
      type: String,
      default: '头条类别：'
    }
  },
  data() {
    return {
      heads: ['待定011', '待定012', '待定013', '待定014', '待定015', '待定016']
    }
  },
  methods: {
    huoqu() {}
  }
}
</script>
<style lang='less' scoped>
.headline-category {
  width: 950px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  span {
    color: #282d38;
    margin-right: 23px;
    line-height: 30px;
  }
  ul {
    display: flex;
    li {
      width: 82px;
      height: 31px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 21px;
      text-align: center;
      line-height: 31px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
  }
}
</style>
