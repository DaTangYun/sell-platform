<!--  -->
<template>
  <div v-if="caselist.length" class="wisdomBank">
    <div class="wisdomBank-title">
      <h4>
        云智慧
      </h4>
      <nuxt-link to="" class="wisdomMore">
        更多
      </nuxt-link>
    </div>
    <ul class="manyimg">
      <li v-for="item of caselist" :key="item.id">
        <img :src="item.cover" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Jingdiananli',
  computed: {
    ...mapGetters(['caselist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.caselists()
    })
  },
  methods: {
    async caselists() {
      await this.$store.dispatch('caselist', {
        page: 1,
        limit: 4,
        title: '',
        userId: ''
      })
      this.list = this.caselist
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.wisdomBank {
  width: 240px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  padding: 0 15px 10px;
  box-sizing: border-box;
  margin-top: 10px;
  .wisdomBank-title {
    height: 44px;
    box-sizing: border-box;
    position: relative;
    h4 {
      line-height: 44px;
      font-weight: 500;
      color: rgba(40, 45, 56, 1);
    }
    .wisdomMore {
      position: absolute;
      right: 16px;
      bottom: 12px;
      color: rgba(119, 128, 143, 1);
    }
  }
  .manyimg {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 98px;
      height: 55px;
      margin-bottom: 10px;
      border-radius: 6px;
      &:nth-child(2n-1) {
        margin-right: 10px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
