<template>
  <div class="mine">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory">
      <template #title>
        <span class="title">个人中心</span>
      </template>
      <template #right>
        <span class="manage">设置</span>
      </template>
    </van-nav-bar>
    <!--  登录  -->
    <div class="p-holder">
      <div class="contain">
        <van-image :src="require('assets/img/home/v1.jpg')" width="80px" height="80px" round fit="fill"></van-image>
        <div class="info">
          <div class="name">赵594</div>
          <div class="account">139****3434</div>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="top">
        <div class="title">我的订单</div>
        <div class="all">全部订单 ></div>
      </div>
      <div class="status">
        <div class="order-item pay">
          <van-icon name="paid"></van-icon>
          <span>待支付</span>
        </div>
        <div class="order-item send">
           <van-icon name="cart-circle-o"></van-icon>
          <span>待送达</span>
        </div>
        <div class="order-item work">
           <van-icon name="gift-o"></van-icon>
          <span>待完工</span>
        </div>
        <div class="order-item evaluate">
           <van-icon name="comment-o"></van-icon>
          <span>待评价</span>
        </div>
      </div>
    </div>

    <van-cell title="支付设置" is-link :border="false"></van-cell>
    <van-cell title="收货地址" is-link :border="false"></van-cell>
    <van-cell title="客服" is-link :border="false"></van-cell>
    <van-cell title="账户与安全" is-link :border="false"></van-cell>

    <van-button size="large" color="rgba(230,230,230,0.4)" block>退出登录</van-button>

  </div>
</template>

<script>

export default {
  name: "Mine",
  data() {
    return {
    }
  },
  methods: {
    onDirectory() {   // 点击设置
      console.log("点击设置");
    },
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.mine {
  .van-nav-bar {
    .title {
      color: var(--cl-textF);
    }
    background-color: var(--cl-bg-op) !important;
  }

  .p-holder {
    margin-top: 46px;
    padding-top: 20px;
    height: 125px;
    border-bottom-left-radius: 50% 20px;
    border-bottom-right-radius: 50% 20px;
    background-color: var(--cl-bg-op);
  }

  .contain {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .info {
      flex: 1;
      color: var(--cl-textF);
    }
    .van-image {
      margin-right: 10px;
    }
    .name {
      margin: 15px 0;
    }
  }

  .order {
    width: 94%;
    height: 100px;
    padding: 0 8px;
    margin: 20px auto;
    border-radius: 10px;
    background-color:  var(--cl-bg-op);
    color: var(--cl-bg-opposite);
    .top {
      height: 35px;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
    }
    .title  {
      font-size: 16px;
      font-weight: 600;
    }
    .all {
      font-size: 14px;
      color: var(--cl-textD);
    }
    .status {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }
    .order-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      .van-icon {font-size: 31px;}
      span { font-size: 13px;}
    }
  }

  .van-cell {
    color: var(--cl-textF);
    background-color: var(--cl-bg-op);
    margin-bottom: 10px;
  }
  .van-button {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 52px;
  }
}
</style>
