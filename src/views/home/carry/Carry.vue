<template>
  <div class="carry">
    <Goods v-for="item in goodlist" :key="item.id"
           :img="item.img" :title="item.title" :price="item.price" :units="item.units"
           :old="item.old_price" :amount="item.amount">
<!--      <div class="counter">-->
<!--        <van-stepper v-model="item.num" :min="0"  integer input-width="40px" button-size="20px"/>-->
<!--        <van-checkbox v-model="item.choose" icon-size="25px" checked-color="#1079f2"-->
<!--                       @click="onCheckbox(item.id)"/>-->
<!--      </div>-->
      <van-button size="small" text="加入购物车" color="#1079F2" icon="" round></van-button>
    </Goods>
  </div>
</template>

<script>
export default {
  name: "Carry",
  data() {
    return {
      labourfrom: {   // 用工类型表单==================
        typeid: '',   // 用工类型的id
        time: '',   // 用工时间
        addressid: '',   // 用工地址id
      },
      goodlist: [
        {
          id: 1,
          img: require("assets/img/home/s7.jpg"),
          title: '搬红砖',
          units: '块',   // 计量单位
          old_price: 5.00,   // 原价
          price: 4.00,
          amount: 23423,   // 总销量
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 2,
          img: require("assets/img/home/p4.jpg"),
          title: '搬水泥',
          units: '袋',
          old_price: 9.00,   // 原价
          price: 6.00,
          amount: 34532,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 3,
          img: require("assets/img/home/p2.jpg"),
          title: '运沙子',
          units: '斗',
          old_price: 30.00,   // 原价
          price: 20.00,
          amount: 34532,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 4,
          img: require("assets/img/home/p5.jpg"),
          title: '搬瓷砖',
          units: '块',
          old_price: 15.00,   // 原价
          price: 10.00,
          amount: 3452,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品v
        },
        {
          id: 5,
          img: require("assets/img/home/p6.jpg"),
          title: '搬陶粒',
          units: '袋',
          old_price: 8.00,   // 原价
          price: 5.00,
          amount: 3245,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 6,
          img: require("assets/img/home/p1.jpg"),
          title: '搬玻璃',
          units: '块',
          old_price: 3.00,   // 原价
          price: 2.00,
          amount: 34532,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
      ]
    }
  },
  methods: {
    onCheckbox(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
.carry {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .counter {
    display: flex;
    justify-content: space-between;
  }
  .van-button {
    float: right;
  }
}
</style>