<!--  -->
<template>
  <div>
    <ul class="shenqingtop">
      <li v-for="(item1,index1) in shenqingtop" :key="index1">
        {{ item1 }}
      </li>
    </ul>
    <ul class="shenqingbo">
      <li v-for="(item,index2) in teamlist" :key="index2">
        <span>
          {{ item.name }}
        </span>
        <span>
          {{ item.excellence }}
        </span>
        <span>
          {{ item.mobile }}
        </span>
        <span>
          {{ item.createtime }}
        </span>
        <span v-if="item.status === '2'">
          已审核
        </span>
        <span v-else-if="item.status === '1'">
          审核中
        </span>
        <span v-else-if="item.status === '0'">
          未审核
        </span>
        <div class="mbutton">
          <div @click="shenhe(item.id)">
            详情
          </div>
          <div>
            删除
          </div>
        </div>
      </li>
    </ul>
    <el-dialog title="申请加入人员" :visible.sync="dialogFormVisible">
      <el-form label-width="80px" class="tuanduiform">
        <el-form-item label="成员名称">
          {{ member.name }}
        </el-form-item>
        <el-form-item label="成员特长">
          {{ member.excellence }}
        </el-form-item>
        <el-form-item label="成员电话">
          {{ member.mobile }}
        </el-form-item>
        <el-form-item label="成员描述">
          {{ member.desc }}
        </el-form-item>
        <el-form-item label="审核状态">
          <el-radio v-model="radio" label="0">
            未通过
          </el-radio>
          <el-radio v-model="radio" label="1">
            审核中
          </el-radio>
          <el-radio v-model="radio" label="2">
            已审核
          </el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary" @click="submit">
          确 定
        </el-button>
      </div>
    </el-dialog>   
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  meta: {
    title: '申请加入人员'
  },
  data() {
    return {
      page: 1,
      limit: 6,
      total: 0,
      shenqingtop: ['姓名', '擅长服务类型', '电话', '申请时间', '状态', '操作'],
      dialogFormVisible: false,
      radio: 0,
      member: [],
      vid: 0
    }
  },
  computed: {
    ...mapGetters(['teamlist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.fince()
    })
  },
  methods: {
    async fince() {
      const { page, limit } = this
      await this.$store.dispatch('dismyteamlistmy', {
        page,
        limit,
        id: this.$route.params.teamid
      })
    },
    shenhe(id) {
      this.dialogFormVisible = true
      this.teammerber(id)
    },
    async confirmteam() {
      await this.$store.dispatch('examineteam', {
        status: this.radio,
        id: this.vid
      })
      this.$message({
        type: 'success',
        message: '修改成功'
      })
    },
    async teammerber(id) {
      const ti = id
      this.vid = id
      const info = await this.$store.dispatch('cxmember', {
        id: ti
      })
      this.member = info.detail
      this.radio = this.member.status
    },
    submit() {
      this.dialogFormVisible = false
      this.confirmteam()
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.shenqingtop {
  background-color: #f1f2f6;
  display: flex;
  li {
    width: 153px;
    text-align: center;
    height: 56px;
    line-height: 56px;
  }
}
.shenqingbo {
  li {
    display: flex;
    height: 62px;
    border-bottom: 1px solid #e1e2e6;
    span {
      display: block;
      width: 153px;
      text-align: center;
      line-height: 62px;
      .ellipsis();
    }
    .mbutton {
      display: flex;
      line-height: 56px;
      div {
        cursor: pointer;
        &:first-child {
          margin-left: 40px;
          margin-right: 10px;
          color: #000;
          &:hover {
            color: #00a0e9;
          }
        }
        &:nth-child(2) {
          margin-right: 5px;
          color: #000;
          &:hover {
            color: #00a0e9;
          }
        }
        &:last-child {
          color: #ff6b81;
        }
      }
    }
  }
}
</style>
