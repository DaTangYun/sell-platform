<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in headlist" :key="index">
        <h3>
          移动互联网架构开发
        </h3>
        <div class="headlist-left">
          <p>
            WTO是多边机构，不是美国一家开的。WTO成员是平等的，不是美国一家说了算的权理事会虽然注定是痴人说梦，但它也了联合国教科文组织、联合国人权理事会。
          </p>
          <span>
            2018-04-27
          </span>
        </div>
        <div class="headlist-right">
          <div>
            已审核
          </div>
          <div>
            编辑
          </div>
          <div>
            清除
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Messagelist',
  data() {
    return {
      headlist: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
ul {
  padding: 0 16px;
}
li {
  height: 220px;
  border-bottom: 1px dashed #e6e6e6;
  box-sizing: border-box;
  &:nth-last-child(1) {
    border: none;
  }
}
h3 {
  line-height: 60px;
  .ellipsis();
}
.headlist-left {
  width: 657px;
  float: left;
  p {
    color: #616975;
    line-height: 28px;
    margin-bottom: 29px;
  }
  span {
    color: #616975;
    font-size: 14px;
  }
}
.headlist-right {
  float: right;
  div {
    margin-bottom: 5px;
    &:last-child {
      color: #ff6b81;
      &:hover {
        color: #ff6b81;
      }
    }
    &:hover {
      color: #00a0e9;
      cursor: pointer;
    }
  }
}
</style>
