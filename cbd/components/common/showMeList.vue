<!--  -->
<template>
  <div>
    <ul class="showmeList">
      <nuxt-link
        v-for="(item,index) of showme"
        :key="index"
        class="showMeitem"
        tag="li"
        to="/myqzone"
      >
        <ShowMeContent></ShowMeContent>
      </nuxt-link>       
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
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
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
