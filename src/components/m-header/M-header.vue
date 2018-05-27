<template lang="html">
  <header class="flex">

    <div class="all-box">
      <i class="icon headerLeftIcon"></i>
      <span class="title">全球行情</span>
    </div>

    <div class="all-box flex-center">
      <i class="icon headerCenterIcon"></i>
      <span class="title">ZB</span>
    </div>

    <div class="all-box flex-end">
      <i class="icon headerRightIcon"></i>
    </div>

  </header>
</template>

<script>
export default {
}
</script>

<style lang="less">
  @import '../../../static/less/base.less';

  header {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #222;
    color: white;
    font-size: 14px;
  }

//顶部所有盒子的样式
  .all-box {
    .inline-block;
    .flex-for-1;
    .flex-align-center;
  }

  .icon {
    width: 20px;
		height: 20px;
    background-size: 100% 100%!important;
  }

  .headerLeftIcon {
    margin-left: 5px;
    background: url('../../../static/img/icon_eye.png');
  }

  .title {
    // margin-left: .06rem;
  }

  .headerCenterIcon {
    width: 25px;
		height: 25px;
    background: url('../../../static/img/icon_rmb_selected.png');
  }

  .headerRightIcon {
    width: 23px;
		height: 23px;
    margin-right: 10px;
    background: url('../../../static/img/icon_menu.png');
  }

</style>
