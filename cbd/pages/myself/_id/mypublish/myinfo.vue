<!--  -->
<template>
  <div class="myhead">
    <ul>
      <li v-for="(item,index) in infoprofile" :key="index">
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
          <nuxt-link :to="{name: 'submitxx', query: {id: item.id}}">
            编辑
          </nuxt-link>
          <div @click="deleteinfolist(item.id)">
            清除
          </div>
        </div>
      </li>
    </ul>
    <send :send="{title:'发布信息', path:'/submitxx'}"></send>
    <pagination
      :total="total"
      :length="infoprofile.length"
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
    title: '信息'
  },
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['infoprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.infoprofiles()
    })
  },
  methods: {
    async infoprofiles() {
      const { page, limit } = this
      const info = await this.$store.dispatch('infoprofile', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.infoprofiles()
    },
    async deleteinfolist(vid) {
      await this.$store
        .dispatch('deleteinfo', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.infoprofiles()
        })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
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
}
h3 {
  line-height: 60px;
  .ellipsis();
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
