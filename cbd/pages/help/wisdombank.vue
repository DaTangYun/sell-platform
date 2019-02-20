<!--  -->
<template>
  <div class="w">
    <div class="bank">
      <div class="bank-left">
        <h4>资料目录</h4>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
          <el-menu-item index="1">
            财经法规
          </el-menu-item>
          <el-menu-item index="2">
            文档模板
          </el-menu-item>
          <el-menu-item index="3">
            经典案例
          </el-menu-item>
        </el-menu>
      </div>
      <div class="bank-right">
        <rules v-show="bankindex == 1"></rules>
        <words v-show="bankindex == 2"></words>
        <div class="case">
          <cases v-show="bankindex == 3"></cases>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cases from 'components/wisdombank/cases.vue'
import rules from 'components/wisdombank/rules.vue'
import words from 'components/wisdombank/words.vue'
export default {
  components: {
    cases,
    rules,
    words
  },
  meta: {
    title: '智慧库'
  },
  data() {
    return {
      bankindex: 1,
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index)
      this.bankindex = index
    }
  }
}
</script>
<style lang='less' scoped>
.bank {
  display: flex;
  margin: 20px 0;
  .bank-left {
    width: 248px;
    margin-right: 20px;
    border-radius: 6px;
    height: 329px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 20px;
    h4 {
      color: #282d38;
      font-size: 24px;
      padding-left: 20px;
      margin-bottom: 10px;
    }
  }
  .bank-right {
    width: 950px;
    height: 655px;
    background: #fff;
    border-radius: 6px;
    box-sizing: border-box;
  }
}
.case {
  box-sizing: border-box;
  padding: 24px;
}
</style>
