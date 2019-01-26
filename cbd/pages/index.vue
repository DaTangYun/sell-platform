<template>
  <section class="index">
    <div class="w">
      <can-do-box :desc="'云传'">
      </can-do-box>
      <can-do-box :desc="'智帮'"></can-do-box>
      <can-do-box :desc="'惠带'">
        <ul class="can-do-List">
          <li v-for="item of canDoList" :key="item" class="can-do-item">
            <can-do-content></can-do-content>
          </li>
        </ul>
      </can-do-box>
    </div>
  </section> 
</template>
<script>
import canDoBox from 'components/indexComponents/canDoBox'
import canDoContent from 'common/canDoContent'
export default {
  name: 'Home',
  components: {
    canDoBox,
    canDoContent
  },
  data() {
    return {
      canDoList: [0, 1, 2, 3, 4, 5]
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  background-color: #f1f2f6;
  padding-bottom: 10px;
  box-sizing: border-box;
  .can-do-List {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .can-do-item {
      margin-right: 24px;
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
