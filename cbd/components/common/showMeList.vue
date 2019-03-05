<!--  -->
<template>
  <div>
    <ul class="showmeList">
      <li
        v-for="item of showme"
        :key="item.id"
        class="showMeitem"
      >
        <ShowMeContent :showme="item"></ShowMeContent>
      </li>       
    </ul>   
  </div>
</template>
<script>
import ShowMeContent from 'common/ShowMeContent'
export default {
  name: 'Showmelist',
  components: {
    ShowMeContent
  },
  props: {
    showme: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang='less' scoped>
.showmeList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .showMeitem {
    display: flex;
    margin-right: 50px;
    margin-bottom: 72px;
    box-sizing: border-box;
    cursor: pointer;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    &:nth-of-type(9) {
      margin-bottom: 40px;
    }
    &:nth-of-type(10) {
      margin-bottom: 40px;
    }
    &:nth-of-type(11) {
      margin-bottom: 40px;
    }
    &:nth-of-type(12) {
      margin-bottom: 40px;
    }
  }
}
</style>
