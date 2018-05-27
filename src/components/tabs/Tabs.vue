<template lang="html">
  <footer class="flex flex-align-center">
    <router-link tag="div" class="footer-item" to="/home" >
      <i class="icon footerHomeIcon"></i>
      <p class="footer-title">首页</p>
    </router-link>

    <router-link tag="div" class="footer-item" to="/currency">
      <i class="icon footerCurrencyIcon"></i>
      <p class="footer-title">现货</p>
    </router-link>

    <router-link tag="div" class="footer-item" to="/lever">
      <i class="icon footerLeverIcon"></i>
      <p class="footer-title">杠杆</p>
    </router-link>

    <router-link tag="div" class="footer-item" to="/finance">
      <i class="icon footerFinanceIcon"></i>
      <p class="footer-title">财务</p>
    </router-link>

    <router-link tag="div" class="footer-item" to="/mine">
      <i class="icon footerMineIcon"></i>
      <p class="footer-title">个人</p>
    </router-link>

  </footer>

  <!-- <div class="tabs">
      <ul>
        <router-link to="/" tag="li" exact>
          <div>
            <i class="icon footerHomeIcon"></i>
          </div>
          <div class="title">Home</div>
        </router-link>
        <router-link to="/brand" tag="li">
          <div>
            <i class="icon footerCurrencyIcon"></i>
          </div>
          <div class="title">Brand</div>
        </router-link>
        <router-link to="/cart" tag="li">
          <div>
            <i class="icon footerLeverIcon"></i>
          </div>
          <div class="title">Cart</div>
        </router-link>
        <router-link to="/member" tag="li">
          <div>
            <i class="icon footerFinanceIcon"></i>
          </div>
          <div class="title">Member</div>
        </router-link>
        <router-link to="/me" tag="li">
          <div>
            <i class="icon footerMineIcon"></i>
          </div>
          <div class="title">Me</div>
        </router-link>
      </ul>
    </div> -->

</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
	@import '../../../static/less/base.less';

//   .tabs {
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   background: #fff;
//   padding: 5px 0;
// }
// .tabs ul {
//   display: table;
//   width: 100%;
// }
// .tabs ul li {
//   display: table-cell;
//   font-size: .3rem;
// }
// .title {
//   display: flex;
//   justify-content: center;
// }
// .router-link-active {
//   color: #f06;
//     .footerHomeIcon {
//   		background: url('../../../static/img/tab_home_selected.png');
//   	}
// }

  footer {
    position:fixed;
    bottom: 0;
		width: 100%;
    height: 60px;
    display: flex;
		box-shadow: 0 -2px 9px rgba(0, 0, 0, .1);
    background-color: white;
    font-size: @base_textSize;
  }

  .footer-item {
		flex: 1;
		text-align: center;
		position: relative;
	}
  .router-link-active {
    border-bottom: 1px solid white !important;
    .footer-title {
      color: #d81e06;
    }
    .footerHomeIcon {
  		background: url('../../../static/img/tab_home_selected.png');
  	}
    .footerCurrencyIcon {
      background: url('../../../static/img/tab_camera_selected.png');
    }

    .footerLeverIcon {
      background: url('../../../static/img/tab_attention_selected.png');
    }

    .footerFinanceIcon {
      background: url('../../../static/img/tab_collection_selected.png');
    }

    .footerMineIcon {
      background: url('../../../static/img/tab_mine_selected.png');
    }
  }

  .footer-title {
    color: @base_textColor;
  }

  .icon {
		width: 27px;
		height: 27px;
		display: block;
		margin: 0 auto;
    // margin-top: .1rem;
		// margin-bottom: .1rem;
		text-align: center;
    background-size: 100% 100%!important;
	}

	.footerHomeIcon {
		background: url('../../../static/img/tab_home.png');
	}

  .footerCurrencyIcon {
    background: url('../../../static/img/tab_camera.png');
  }

  .footerLeverIcon {
    background: url('../../../static/img/tab_attention.png');
  }

  .footerFinanceIcon {
    background: url('../../../static/img/tab_collection.png');
  }

  .footerMineIcon {
    background: url('../../../static/img/tab_mine.png');
  }


</style>
