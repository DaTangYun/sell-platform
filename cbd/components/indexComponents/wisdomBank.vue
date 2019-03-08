<!--  -->
<template>
  <div v-if="list.length" class="wisdomBank">
    <div class="wisdomBank-title">
      <h4>{{ wis }}</h4>
      <nuxt-link :to="{name: `${smallurl}`}" class="wisdomMore">
        更多
      </nuxt-link>
    </div>
    <div class="wisdom-c-box">
      <ul class="wisdom-ul">
        <li v-for="(item,index) in list" :key="index" class="wisdom-li" @click="changeindex(item)">
          <div class="wisdom-tri">
            <img src="../../assets/images/right.png" alt="">
          </div>
          <p>
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WisdomBank',
  props: {
    wis: {
      type: String,
      default: '智慧库'
    },
    url: {
      type: String,
      default: require('../../assets/images/big.png')
    },
    smallurl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list: [],
      vid: 0
    }
  },
  computed: {
    ...mapGetters(['activeyouhuilist', 'helpwis'])
  },
  mounted() {
    this.$nextTick(() => {
      this.getlist()
    })
  },
  methods: {
    async financelists() {
      await this.$store.dispatch('financelist', {
        page: 1,
        limit: 8,
        cate_id: '',
        title: ''
      })
      this.list = this.helpwis.finance
    },
    async activelists() {
      await this.$store.dispatch('activelist', {
        page: 1,
        limit: 6,
        title: '',
        userId: ''
      })
      this.list = this.activeyouhuilist.active
    },
    changeindex(itemid) {
      this.$nuxt.$loading.start()
      const { wis } = this
      const id = itemid.id
      if (wis === '财经法规') {
        this.$router.push({
          path: `/ruledetail/${id}`,
          query: { titel: itemid.title }
        })
      } else {
        this.$router.push({
          path: '/discont/active'
        })
      }
      this.$nuxt.$loading.finish()
    },
    getlist() {
      const { wis } = this
      if (wis === '财经法规') {
        this.financelists()
      } else {
        this.activelists()
      }
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
  margin-bottom: 10px;
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
}
.wisdom-con-img {
  width: 216px;
  height: 111px;
  border-radius: 6px;
}
p {
  line-height: 30px;
  color: #282d38;
  .ellipsis();
}
.wisdom-ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .wisdom-li {
    height: 31px;
    display: flex;
    line-height: 31px;
    cursor: pointer;
    &:hover p {
      color: #00a0e9;
    }
    .wisdom-tri {
      position: relative;
      width: 21px;
      img {
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
      }
    }
    p {
      .ellipsis();
      width: 191px;
    }
  }
}
</style>
