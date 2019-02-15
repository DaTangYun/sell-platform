<template>
  <div class="rightComponent">
    <div class="public">
      <PublishinTopic></PublishinTopic>
    </div>
    <Cooperative></Cooperative>
    <div class="wisdom">
      <wisdomBank :wis="'智慧库'">
        <Wisdomcbox></Wisdomcbox>
      </wisdomBank>
    </div>
    <Cloudwisdom></Cloudwisdom>
    <div class="headindexhelp">
      <wisdomBank :wis="'帮帮我'">
        <Wisdomcbox></Wisdomcbox>
      </wisdomBank>
    </div>
    <wisdomBank :wis="'能帮会干'">
      <Wisdomcbox></Wisdomcbox>
    </wisdomBank>
  </div>
</template>
<script>
import Wisdomcbox from 'common/Wisdomcbox'
import WisdomBank from 'components/indexComponents/WisdomBank'
import Cloudwisdom from 'components/indexComponents/cloudwisdom'
import PublishinTopic from 'common/PublishinTopic'
import Cooperative from 'common/Cooperative'
export default {
  name: 'RightComponent',
  components: {
    PublishinTopic,
    Cooperative,
    WisdomBank,
    Wisdomcbox,
    Cloudwisdom
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
