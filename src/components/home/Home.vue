<template lang="html">
  <div class="tab-item">
    <HomeTab></HomeTab>
  </div>
</template>

<script>

import HomeTab from '@/components/home/homeTab'

export default {
  data() {
    return {
      list: [1,2,3]
    }
  },
  methods: {
    test() {
      console.log(1)
      this.$router.push({
        path: `/home/custom`
      })
    }
  },
  components: {
    HomeTab
  }
}
</script>

<style lang="less" scoped>

@import '../../../static/less/base.less';
@import '../../../static/less/tabs_item.less';

  .header {
    height: @header_height;
    background-color: red;
    // font-size: .5rem;
  }

</style>
