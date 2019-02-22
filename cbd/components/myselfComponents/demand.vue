<!--  -->
<template>
  <div class="demand">
    <send :send="{title:'发布新需求', path:'/submitxq'}"></send>
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
          2018-12-21
        </span>
        <span>
          1000.00以上
        </span>
        <span>
          面谈
        </span>
        <span>
          0个参与
        </span>
        <span>
          待审核
        </span>
        <span>
          待选择合作
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
  name: 'Demand',
  components: {
    send
  },
  data() {
    return {
      demand: [
        '需求标题',
        '发布时间',
        '佣金范围',
        '执行样式',
        '交易状态',
        '状态',
        '完成状态',
        '操作'
      ],
      demands: [0, 1, 2]
    }
  }
}
</script>
<style lang='less' scoped>
.demand {
  .demand-top {
    background-color: #f1f2f6;
    color: #747d8c;
    height: 56px;
    line-height: 56px;
    span {
      padding: 0 27px;
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
        line-height: 96px;
        &:first-child {
          width: 65px;
          display: inline-block;
          line-height: 20px;
          margin-top: 25px;
        }
        &:nth-child(5) {
          margin-left: 37px;
        }
      }
      div {
        margin-left: 10px;
        cursor: pointer;
        &:first-child {
          color: #747d8c;
          margin-top: 20px;
          margin-bottom: 21px;
          &:hover {
            color: #00a0e9;
          }
        }
        &:last-child {
          color: #ff6b81;
        }
      }
    }
  }
}
</style>
