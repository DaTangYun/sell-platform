<template>
  <div class="w">
    <div class="cloudwisdom">
      <ul class="cloudwisdomui">
        <li v-for="item in imglist" :key="item.id">
          <div>
            <img :src="item.idView">
          </div>
        </li>
      </ul>
      <pagination></pagination>
    </div>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
export default {
  components: {
    pagination
  },
  meta: {
    title: '云智慧'
  },
  data() {
    return {
      imglist: [
        { id: 0, idView: require('assets/images/logo1.png') },
        { id: 1, idView: require('assets/images/logo1.png') },
        { id: 2, idView: require('assets/images/logo1.png') },
        { id: 3, idView: require('assets/images/logo1.png') },
        { id: 4, idView: require('assets/images/logo1.png') },
        { id: 5, idView: require('assets/images/logo1.png') },
        { id: 6, idView: require('assets/images/logo1.png') },
        { id: 7, idView: require('assets/images/logo1.png') }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.cloudwisdom {
  width: 1210px;
  height: 908px;
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 24px;
  padding-right: 0;
  margin-bottom: 30px;
  .cloudwisdomui {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    li {
      width: 291px;
      height: 168px;
      line-height: 168px;
      text-align: center;
      border-radius: 6px;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid rgba(230, 230, 230, 1);
        box-shadow: 0px 5px 12px 0px rgba(5, 5, 5, 0.14);
      }
    }
  }
}
</style>
