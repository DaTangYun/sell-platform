<!--  -->
<template>
  <div class="secondpart">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in abilityprofile" :key="index1">
        <span>
          {{ item1.desc }}
        </span>
        <span>
          {{ item1.price }}元
        </span>
        <span>
          {{ item1.cate_name }}
        </span>
        <span>
          {{ item1.createtime }}
        </span>
        <span v-if="item1.status === '2'">
          已审核
        </span>
        <span v-else-if="item1.status === '1'">
          审核中
        </span>
        <span v-else-if="item1.status === '0'">
          未审核
        </span>
        <div class="lidiv">
          <nuxt-link :to="{name: 'submitnbhg', query: {id: item1.id}}" tag="div">
            编辑
          </nuxt-link>
          <div @click="deleteinfolist(item1.id)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <div class="pag">
      <pagination
        :total="total"
        :length="abilityprofile.length"
        :pagesize="limit"
        @currentchange="handlecurrentchange"
        @prev="handlecurrentchange"
        @next="handlecurrentchange"
      ></pagination>
    </div>
  </div>
</template>
<script>
import pagination from 'components/cloudComponents/pagination.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Secondpart',
  components: {
    pagination
  },
  data() {
    return {
      demand: ['交易标题', '价格', '服务类别', '发表时间', '状态', '操作'],
      demands: [0, 1, 2],
      page: 1,
      limit: 6,
      total: 0,
      title: ''
    }
  },
  computed: {
    ...mapGetters(['abilityprofile'])
  },
  mounted() {
    this.$nextTick(() => {
      this.abilityprofiles()
    })
  },
  methods: {
    async abilityprofiles() {
      const { page, limit, title } = this
      const info = await this.$store.dispatch('abilityprofile', {
        page,
        limit,
        title,
        cate_id: this.$route.params.id
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.abilityprofiles()
    },
    async deleteinfolist(vid) {
      await this.$store
        .dispatch('deleteability', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.abilityprofiles()
        })
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.secondpart {
  background-color: #fff;
  box-sizing: border-box;
  padding-bottom: 30px;
}
.secondpart-top {
  position: relative;
  height: 73px;
}
.demand-top {
  background-color: #f1f2f6;
  color: #747d8c;
  height: 56px;
  line-height: 56px;
  span {
    padding: 0 44px;
  }
}
.demand-bottom {
  height: 642px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    span {
      padding: 0 23px;
      padding-right: 40px;
      line-height: 96px;
      &:first-child {
        width: 147px;
        display: inline-block;
        line-height: 50px;
        margin-top: 25px;
        padding-right: 0;
        .ellipsis();
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
      }
      &:nth-child(3) {
        margin-right: 20px;
        padding-right: 30px;
      }
      &:nth-child(5) {
        margin-right: 20px;
        color: #ff6b81;
      }
    }
    .lidiv {
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      box-sizing: border-box;
      padding-top: 38px;
      div {
        color: #ff6b81;
        &:first-child {
          color: #747d8c;
          margin-right: 10px;
          &:hover {
            color: #00a0e9;
          }
        }
      }
    }
  }
}
</style>
