<template>
  <div id="app">

    <router-view></router-view>
    <tabs></tabs>
    <m-header></m-header>

  </div>
</template>

<script>
// import '../static/js/rem.js'
import MHeader from '@/components/m-header/m-header'
import Tabs from '@/components/tabs/tabs'

export default {
  components: {
    Tabs,
    MHeader
  }
}
</script>

<style lang="less">
  @import '../static/less/base.less';
  @import '../static/less/tabs_item.less';

  #app {
    height: 100%;
  }
</style>
