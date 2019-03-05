<!--  -->
<template>
  <div class="myhead">
    <ul>
      <li v-for="(item,index) in headprofile" :key="index">
        <h3>
          {{ item.title }}
        </h3>
        <div class="headlist-left">
          <p>
            {{ item.desc }}
          </p>
          <span>
            {{ item.createtime }}
          </span>
        </div>
        <div class="headlist-right">
          <div v-if="item.status === 2">
            已审核
          </div>
          <div v-else-if="item.status === 1">
            审核中
          </div>
          <div v-else-if="item.status === 0">
            未审核
          </div>
          <div>
            编辑
          </div>
          <div>
            清除
          </div>
        </div>
      </li>
    </ul>
    <send :send="{title:'发布头条', path:'/submitxq'}"></send>
    <pagination
      :total="total"
      :length="headprofile.length"
      :pagesize="limit"
      @currentchange="handlecurrentchange"
      @prev="handlecurrentchange"
      @next="handlecurrentchange"
    ></pagination>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import send from 'components/myselfComponents/send'
import { mapGetters } from 'vuex'
export default {
  name: 'Messagelist',
  components: {
    send,
    pagination
  },
  meta: {
    title: '头条'
  },
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['headprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.headprofiles()
    })
  },
  methods: {
    async headprofiles() {
      const { page, limit } = this
      const info = await this.$store.dispatch('headprofile', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.headprofiles()
    }
  }
}
</script>
<style lang='less' scoped>
.myhead {
  position: relative;
}
ul {
  padding: 0 16px;
}
li {
  height: 220px;
  border-bottom: 1px dashed #e6e6e6;
  box-sizing: border-box;
  &:nth-last-child(1) {
    border: none;
  }
}
h3 {
  line-height: 60px;
}
.headlist-left {
  width: 657px;
  float: left;
  p {
    color: #616975;
    line-height: 28px;
    margin-bottom: 29px;
  }
  span {
    color: #616975;
    font-size: 14px;
  }
}
.headlist-right {
  float: right;
  div {
    margin-bottom: 5px;
    &:last-child {
      color: #ff6b81;
      &:hover {
        color: #ff6b81;
      }
    }
    &:hover {
      color: #00a0e9;
      cursor: pointer;
    }
  }
}
</style>
