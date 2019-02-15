<!--  -->
<template>
  <div class="discont">
    <div class="discont-cont">
      <ul>
        <li v-for="(item,index) in discont" :key="index">
          <CanDoContent></CanDoContent>
        </li>
      </ul>
      <pagination></pagination>
    </div>
  </div>   
</template>
<script>
import CanDoContent from 'common/CanDoContent'
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    CanDoContent,
    pagination
  },
  meta: {
    title: '能帮会干'
  },
  data() {
    return {
      discont: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>
<style lang='less' scoped>
.discont {
  display: flex;
  margin-bottom: 56px;
  .discont-cont {
    width: 950px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
      li {
        margin-right: 24px;
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
