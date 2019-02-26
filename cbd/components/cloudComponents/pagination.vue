<!--  -->
<template>
  <div v-if="total>length">
    <div class="pagnation">
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :page-size="pagesize"
        :total="total"
        @current-change="handlecurrentchange"
        @prev-click="handleprev"
        @next-click="handlenext"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 0
    },
    pagesize: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      pagercount: 8
    }
  },
  methods: {
    handlecurrentchange(params) {
      this.$emit('currentchange', params)
    },
    handleprev(params) {
      this.$emit('prev', params)
    },
    handlenext(params) {
      this.$emit('next', params)
    }
  }
}
</script>
<style lang='less' scoped>
.pagnation {
  width: 902px;
  text-align: center;
}
</style>
