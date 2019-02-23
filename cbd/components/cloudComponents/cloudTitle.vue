<!--  -->
<template>
  <div>
    <div class="headline-category">
      <span>{{ titlename }}：</span>
      <ul>
        <li v-for="(item,index) in info" :key="index" @click="huoqu">
          {{ item.cate_name }}
        </li>
      </ul>
    </div>   
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CloudTitle',
  props: {
    titlename: {
      type: String,
      default: '头条类别'
    }
  },
  data() {
    return {
      info: []
    }
  },
  computed: {
    ...mapGetters(['cloudInfo', 'cloudhead'])
  },
  created() {
    this.getInfo()
  },
  methods: {
    huoqu() {},
    getInfo() {
      const { titlename } = this
      if (titlename === '头条类别') {
        this.info = this.cloudhead
      } else {
        this.info = this.cloudInfo
      }
    }
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
      padding: 0 5px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
  }
}
</style>
