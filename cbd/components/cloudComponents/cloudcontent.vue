<!--  -->
<template>
  <div>
    <ul class="headline-contentul">
      <nuxt-link v-for="item of headlist" :key="item.id" tag="li" :to="{name: 'cloud-cloudhead-id',params: {id: item.id}}">
        <div class="headlineimg">
          <img :src="item.cover" alt="">
        </div>
        <div class="headlinelic">
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ item.desc }}                     
          </p>
          <div class="headlispan">
            <span>
              {{ item.cate_name }}
            </span>
            <span>
              {{ item.createtime }}
            </span>
            <span>
              <img src="../../assets/images/eye.png" alt="">
              {{ item.reading_count }}
            </span>
          </div>
        </div>
      </nuxt-link>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cloudcontent',
  computed: {
    ...mapGetters(['headcate', 'headlist'])
  },
  methods: {
    handlidetail(id) {
      this.$router.push({ path: `/cloud/cloudhead/${id}` })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
ul {
  margin-bottom: 20px;
  li {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding-top: 31px;
    height: 232px;
    border-bottom: 1px dashed #e6e6e6;
    cursor: pointer;
    .headlineimg {
      width: 226px;
      height: 170px;
      background-color: #ebebeb;
      margin-right: 19px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .headlinelic {
      h3 {
        line-height: 40px;
        .ellipsis();
      }
      p {
        line-height: 26px;
        width: 657px;
        min-height: 80px;
        overflow: hidden;
      }
      .headlispan {
        margin-top: 20px;
        display: flex;
        color: #616975;
        line-height: 30px;
        span {
          &:first-child {
            display: block;
            width: 78px;
            height: 30px;
            background: rgba(241, 242, 246, 1);
            border-radius: 6px;
            color: #747d8c;
            text-align: center;
            line-height: 30px;
            margin-right: 56px;
          }
          &:last-child {
            margin-left: 56px;
            img {
              margin-right: 7px;
            }
          }
        }
      }
    }
  }
}
</style>
