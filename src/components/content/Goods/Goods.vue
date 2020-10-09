<template>
  <div class="goods">
    <van-image :src="info.img" width="100%" height="50vw" radius="8px 8px 0 0" fit="fill"></van-image>
    <div class="title" :style="{color: '#fff'}">{{info.title}}</div>
    <div class="sell">
      <span class="price">¥ {{info.price}}</span>
      <slot name="discount"/>
      <slot name="tag"/>
      <span class="amount">销量:{{info.amount}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: "Goods",
  props: {
    info: {
      type: Object,Array,
      default: {}
    },
    // img: {
    //   type: String,
    //   default: ''
    // },
    // title: {
    //   type: String,
    //   default: ''
    // },
    // price: {
    //   type: String,
    //   default: ''
    // },
    // amount: {
    //   type: String,Number,
    //   default: ''
    // },
  }
}
</script>

<style scoped lang="scss">
.goods {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--cl-bg-op);
  width: 48%;
  margin-bottom: 10px;
  .title {font-size: 13px;}
  .sell {
    padding: 0 5px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
  }
  .price {color: #ee3333;}
  .amount {color: var(--cl-texta); font-size: 12px;}
}
</style>