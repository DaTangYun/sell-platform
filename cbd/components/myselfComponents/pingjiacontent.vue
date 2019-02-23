<!--  -->
<template>
  <div>
    <ul class="mye">
      <li v-for="(item,index) in mye" :key="index">
        <div class="top">
          <h5>
            昵称昵称
          </h5>
          <span>
            2018-12-30
          </span>
        </div>
        <p>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pingjiadetail',
  data() {
    return {
      mye: [0]
    }
  }
}
</script>
<style lang='less' scoped>
.mye {
  margin-bottom: 30px;
  margin-top: 20px;
  li {
    height: 110px;
    border-bottom: 1px dashed #e1e2e6;
    box-sizing: border-box;
    padding-top: 20px;
    .top {
      margin-bottom: 15px;
      h5 {
        display: inline-block;
        margin-right: 60px;
        font-size: 16px;
        font-weight: 400;
      }
      span {
        color: #57606f;
        font-size: 14px;
      }
      p {
        color: #57606f;
        font-size: 14px;
      }
    }
  }
}
</style>
