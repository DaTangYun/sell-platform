<!--  -->
<template>
  <div class="secondpart">
    <div class="demand-top">
      <span v-for="(item,index) in demand" :key="index">
        {{ item }}
      </span>
    </div>
    <ul class="demand-bottom">
      <li v-for="(item1,index1) in activeprofil" :key="index1">
        <span>
          {{ item1.desc }}
        </span>
        <span>
          满{{ item1.min_amount }}减{{ item1.prefer_acount }}
        </span>
        <span>
          {{ item1.start_time }}至{{ item1.end_time }}
        </span>
        <span>
          {{ item1.active_count }}
        </span>
        <span>
          {{ item1.used_active_count }}
        </span>
        <span v-if="item1.status === '0'">
          已使用
        </span>
        <span v-else-if="item1.status === '1'">
          未使用
        </span>
        <div class="lidiv">
          <div @click="bianji(item1.id)">
            编辑
          </div>
          <div @click="deleteinfolist(item1.id)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <div class="add" @click="addform">
      新增
    </div>
    <el-dialog title="新增活动" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <div class="title">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="优惠名称" :label-width="formLabelWidth">
          <div class="title">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="优惠金额" :label-width="formLabelWidth" class="actiprice">
          满
          <div class="man">
            <el-input v-model="form.price"></el-input>
          </div>
          减
          <div class="man">
            <el-input v-model="form.jprice"></el-input>
          </div>
          <div class="tips">
            注：满数额须大于减数额
          </div>
        </el-form-item>
        <el-form-item label="活动时间" :label-width="formLabelWidth">
          开始
          <div class="man">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
          结束
          <div class="man">
            <el-date-picker
              v-model="form.jtime"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.describe" autocomplete="off" type="textarea"></el-input>
        </el-form-item>        
      </el-form>
      <el-button type="primary" @click="sendactive">
        确 定
      </el-button>
    </el-dialog>
    <div class="pag">
      <pagination
        :total="total"
        :length="activeprofil.length"
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
  meta: {
    title: '我组织的活动'
  },
  data() {
    return {
      demand: ['标题', '优惠金额', '使用期限', '领取次数', '使用次数', '操作'],
      demands: [0, 1, 2],
      page: 1,
      limit: 6,
      total: 0,
      title: '',
      dialogFormVisible: false,
      formLabelWidth: '80px',
      current: '',
      form: {
        name: '',
        title: '',
        price: '',
        jprice: '',
        time: '',
        jtime: '',
        describe: '',
        bcid: 0
      }
    }
  },
  computed: {
    ...mapGetters(['activeprofil'])
  },
  mounted() {
    this.$nextTick(() => {
      this.activeprofils()
    })
  },
  methods: {
    bianji(vid) {
      this.bjactivehq(vid)
      this.dialogFormVisible = true
      this.current = '编辑'
      this.bcid = vid
    },
    async activeprofils() {
      const { page, limit } = this
      const info = await this.$store.dispatch('activeprofillist', {
        page,
        limit
      })
      this.total = info.total
    },
    handlecurrentchange(params) {
      this.page = params
      this.activeprofils()
    },
    async deleteinfolist(vid) {
      await this.$store
        .dispatch('deleteactive', {
          id: vid
        })
        .then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.activeprofils()
        })
    },
    addform() {
      this.dialogFormVisible = true
      this.current = '新增'
      this.form = {}
    },
    // 编辑获取
    async bjactivehq(vid) {
      const info = await this.$store.dispatch('editacbj', {
        id: vid
      })
      this.form = {
        title: info.active.title,
        name: info.active.coupon_name,
        price: info.active.min_amount,
        jprice: info.active.prefer_acount,
        time: info.active.start_time,
        jtime: info.active.end_time,
        describe: info.active.desc
      }
    },
    // 发送编辑过的内容
    async bjbcactive() {
      await this.$store.dispatch('editacbjbc', {
        id: this.bcid,
        title: this.form.title,
        coupon_name: this.form.name,
        min_amount: this.form.price,
        prefer_acount: this.form.jprice,
        start_time: this.form.time,
        end_time: this.form.jtime,
        desc: this.form.describe
      })
    },
    // 添加新
    async addnewactive() {
      await this.$store.dispatch('addactive', {
        title: this.form.title,
        coupon_name: this.form.name,
        min_amount: this.form.price,
        prefer_acount: this.form.jprice,
        start_time: this.form.time,
        end_time: this.form.jtime,
        desc: this.form.describe
      })
    },
    sendactive() {
      if (this.current === '编辑') {
        this.bjbcactive()
        this.dialogFormVisible = false
      } else {
        this.addnewactive()
        this.dialogFormVisible = false
      }
    }
  }
}
</script>
<style lang='less' scoped>
@import '~style/variable.less';
@import '~style/mixin.less';
.secondpart {
  background-color: #fff;
  position: relative;
  .add {
    position: absolute;
    top: -41px;
    right: 80px;
    color: #00a0e9;
    cursor: pointer;
  }
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
    &:first-child {
      display: inline-block;
      width: 146px;
      text-align: center;
    }
    padding: 0 40px;
  }
}
.demand-bottom {
  height: 650px;
  li {
    border-bottom: 1px dashed #e6e6e6;
    height: 96px;
    box-sizing: border-box;
    display: flex;
    span {
      padding: 0 23px;
      padding-right: 40px;
      line-height: 96px;
      width: 75px;
      text-align: center;
      &:first-child {
        width: 175px;
        display: inline-block;
        .ellipsis();
      }
      &:nth-child(2) {
        margin-right: 10px;
        color: #ff6b81;
        padding: 0;
        min-width: 135px;
        text-align: center;
        line-height: 20px;
        padding-top: 30px;
      }
      &:nth-child(3) {
        padding-right: 0;
        width: 135px;
        line-height: 30px;
        text-align: center;
        padding-top: 20px;
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
