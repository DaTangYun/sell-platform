<!--  -->
<template>
  <div class="word">
    <ul>
      <li v-for="(item,index) in words" :key="index">
        <span class="bq">
          合同
        </span>
        <div class="word-content">
          <div class="word-title">
            企业所得税征收鉴定方式表格
          </div>
          <span>
            2018-12-07
          </span>
          <span>
            上传人昵称
          </span>
        </div>
        <div class="word-img"></div>
      </li>
    </ul>
    <pagination></pagination>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  name: 'Words',
  components: {
    pagination
  },
  data() {
    return {
      words: [0, 1, 2, 3, 4, 5]
    }
  }
}
</script>
<style lang='less' scoped>
.word {
  ul {
    margin: 24px 16px;
    li {
      width: 100%;
      display: flex;
      height: 90px;
      border-bottom: 1px dashed #e6e6e6;
      position: relative;
      .bq {
        display: block;
        height: 30px;
        padding: 0 25px;
        margin: 30px 16px 0 8px;
        background-color: #f1f2f6;
        border-radius: 6px;
        text-align: center;
        color: #747d8c;
        line-height: 30px;
        font-size: 14px;
      }
      .word-content {
        width: 630px;
        box-sizing: border-box;
        padding-top: 15px;
        .word-title {
          color: #282d38;
          margin-bottom: 10px;
        }
        span {
          font-size: 14px;
          color: #77808f;
          margin-right: 32px;
        }
      }
      .word-img {
        width: 32px;
        height: 28px;
        position: absolute;
        top: 20px;
        right: 0;
        background-image: url(~assets/images/down.png);
        background-size: 100% 100%;
        &:hover {
          background-image: url(~assets/images/down2.png);
        }
      }
    }
  }
}
</style>
