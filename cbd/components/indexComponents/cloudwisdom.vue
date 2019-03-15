
<template>
  <div>
    <wisdomBank class="cloud-i" :wis="'云智慧'">
      <ul class="cloud-ul">
        <li v-for="(item,index) in cloudlis" :key="index" class="cloud-li">
          <img src="../../assets/images/small.png" alt="">
        </li>
      </ul>
    </wisdomBank>
  </div>
</template>

<script>
import WisdomBank from 'components/indexComponents/WisdomBank'
export default {
  name: 'Cloudwisdom',
  components: {
    WisdomBank
  },
  data() {
    return {
      cloudlis: [0, 1, 2, 3]
    }
  }
}
</script>
<style lang='less' scoped>
.cloud-i {
  margin-top: 12px;
  width: 248px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #fff;
  .cloud-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cloud-li {
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
