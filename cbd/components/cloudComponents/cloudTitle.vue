<!--  -->
<template>
  <div>
    <div class="headline-category">
      <span>{{ titlename }}：</span>
      <ul>
        <li v-for="(item, index) of list" :key="item.id" :show="show" :class="{active:currentindex === index}" @click="huoqu(item,index)">
          {{ item.cate_name }}
        </li>
      </ul>
    </div>   
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CloudTitle',
  props: {
    titlename: {
      type: String,
      default: '头条类别'
    },
    show: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      info: [],
      page: 1,
      limit: 5,
      cate_id: 0,
      currentindex: 0,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['cloudInfo', 'headcate']),
    list() {
      const result = []
      const all = {
        cate_name: '全部',
        id: 0
      }
      return result.concat(all, this.info)
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    async huoqu(item, index) {
      const { page, limit } = this
      const { titlename } = this
      console.log(this.title)
      this.currentindex = index
      if (titlename === '头条类别') {
        const info = await this.$store.dispatch('headlist', {
          page,
          limit,
          title: this.title,
          cate_id: item.id
        })
        this.total = info.total
      } else {
        await this.$store.dispatch('infolist', {
          page,
          limit,
          title: this.title,
          cate_id: item.id
        })
      }
      this.$emit('changecate', {
        title: item.cate_name,
        cate_id: item.id,
        page
      })
    },
    getInfo() {
      const { titlename } = this
      if (titlename === '头条类别') {
        this.info = this.headcate
      } else {
        this.info = this.cloudInfo
      }
    }
  }
}
</script>
<style lang='less' scoped>
.headline-category {
  width: 950px;
  height: 98px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  span {
    color: #282d38;
    margin-right: 23px;
    line-height: 30px;
    &:nth-child(2) {
      width: 82px;
      height: 31px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 21px;
      text-align: center;
      line-height: 31px;
      padding: 0 5px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
  }
  ul {
    display: flex;
    li {
      width: 82px;
      height: 31px;
      background: rgba(241, 242, 246, 1);
      border-radius: 6px;
      margin-right: 21px;
      text-align: center;
      line-height: 31px;
      padding: 0 5px;
      cursor: pointer;
      &:hover {
        background-color: #00a0e9;
        color: #fff;
      }
    }
    .active {
      background-color: #00a0e9;
      color: #fff;
    }
  }
}
</style>
