<template>
  <div class="rightComponent">
    <div class="public">
      <PublishinTopic></PublishinTopic>
    </div>
    <Cooperative></Cooperative>
    <div class="wisdom">
      <wisdomBank :wis="'财经法规'">
      </wisdomBank>
      <div class="e">
        <helpme :helpmelist="hmlt"></helpme>
      </div>
    </div>
    <div class="headindexhelp">
      <wisdomBank :wis="'优惠活动'">
      </wisdomBank>
      <jingdiananli></jingdiananli>
    </div>
  </div>
</template>
<script>
import helpme from 'components/indexComponents/helpme'
import jingdiananli from 'components/indexComponents/jingdiananli'
import WisdomBank from 'components/indexComponents/WisdomBank'
import PublishinTopic from 'common/PublishinTopic'
import Cooperative from 'common/Cooperative'
import { mapGetters } from 'vuex'
export default {
  name: 'RightComponent',
  components: {
    PublishinTopic,
    Cooperative,
    WisdomBank,
    helpme,
    jingdiananli
  },
  data() {
    return {
      hmlt: []
    }
  },
  computed: {
    ...mapGetters(['helpmelist'])
  },
  mounted() {
    this.$nextTick(() => {
      this.helpmelists()
    })
  },
  methods: {
    async helpmelists() {
      await this.$store.dispatch('helpmelist', {
        page: 1,
        limit: 6,
        title: '',
        userId: ''
      })
      this.hmlt = this.helpmelist
    }
  }
}
</script>
<style lang='less' scoped>
.rightComponent {
  display: inline-block;
  margin-left: 12px;
}
.public {
  margin-bottom: 20px;
}
.wisdom {
  margin-top: 12px;
}
.headindexhelp {
  margin: 12px 0;
}
</style>
