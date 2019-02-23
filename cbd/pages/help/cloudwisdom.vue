<template>
  <div class="w">
    <div class="cloudwisdom">
      <ul class="cloudwisdomui">
        <nuxt-link v-for="item in helpcloud" :key="item.id" tag="li" :to="item.url">
          <div>
            <img :src="item.image">
          </div>
        </nuxt-link>
      </ul>
      <pagination></pagination>
    </div>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    pagination
  },
  meta: {
    title: '云智慧'
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['helpcloud'])
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
      margin-bottom: 10px;
      div {
        width: 291px;
        height: 168px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &:hover {
        border: 1px solid rgba(230, 230, 230, 1);
        box-shadow: 0px 5px 12px 0px rgba(5, 5, 5, 0.14);
      }
    }
  }
}
</style>
