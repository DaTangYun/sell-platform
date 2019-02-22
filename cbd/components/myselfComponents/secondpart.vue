<!--  -->
<template>
  <div>
    <div class="secondpart-top">
      <send :send="{title:'发布新的能帮会干', path:'/submitnbhg'}"></send>
    </div>
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in demands" :key="index1">
        <span>
          标题标题标题标题标题
        </span>
        <span>
          6.0元
        </span>
        <span>
          产品服务
        </span>
        <span>
          2018-12-19
        </span>
        <span>
          待审核
        </span>
        <div class="lidiv">
          <div>
            编辑
          </div>
          <div>
            删除
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import send from 'components/myselfComponents/send'
export default {
  name: 'Secondpart',
  components: {
    send
  },
  data() {
    return {
      demand: ['交易标题', '价格', '服务类别', '成交时间', '状态', '操作'],
      demands: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
.secondpart-top {
  position: relative;
  height: 73px;
}
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  span {
    padding: 0 40px;
  }
}
.demand-bottom {
  height: 904px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    span {
      padding: 0 23px;
      padding-right: 40px;
      line-height: 96px;
      &:first-child {
        width: 65px;
        display: inline-block;
        line-height: 20px;
        margin-top: 25px;
        margin-right: 35px;
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
      }
      &:nth-child(3) {
        margin-right: 20px;
        padding-right: 30px;
      }
      &:nth-child(5) {
        margin-right: 20px;
        color: #ff6b81;
      }
    }
    .lidiv {
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 38px;
      div {
        color: #ff6b81;
        &:first-child {
          color: #747d8c;
          margin-right: 10px;
          &:hover {
            color: #00a0e9;
          }
        }
      }
    }
  }
}
</style>
