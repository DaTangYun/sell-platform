<template>
  <div class="rightComponent">
    <div class="public">
      <PublishinTopic></PublishinTopic>
    </div>
    <Cooperative></Cooperative>
    <div class="wisdom">
      <wisdomBank :wis="'财经法规'">
      </wisdomBank>
    </div>
    <wisdomBank :wis="'经典案例'">
    </wisdomBank>
    <div class="headindexhelp">
      <wisdomBank :wis="'帮帮我'">
      </wisdomBank>
    </div>
    <wisdomBank :wis="'优惠活动'">
    </wisdomBank>
  </div>
</template>
<script>
import WisdomBank from 'components/indexComponents/WisdomBank'
import PublishinTopic from 'common/PublishinTopic'
import Cooperative from 'common/Cooperative'
export default {
  name: 'RightComponent',
  components: {
    PublishinTopic,
    Cooperative,
    WisdomBank
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
