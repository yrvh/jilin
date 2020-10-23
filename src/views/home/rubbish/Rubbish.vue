<template>
  <div class="rubbish">
    <Goods v-for="item in goodlist" :key="item.id"
           :img="item.img" :title="item.title" :price="item.price" :units="item.units"
           :old="item.old_price" :amount="item.amount">
<!--      <div class="counter">-->
<!--        <van-stepper v-model="item.num" :min="0"  integer input-width="40px" button-size="20px"/>-->
<!--        <van-checkbox v-model="item.choose" icon-size="25px" checked-color="#1079f2"-->
<!--                      @click="onCheckbox(item.id)"/>-->
<!--      </div>-->
      <van-button size="small" text="加入购物车" color="#1079F2" icon="" round></van-button>
    </Goods>
  </div>
</template>

<script>
export default {
  name: "Rubbish",
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
          img: require("assets/img/home/r7.jpg"),
          title: '清运小区生活垃圾',
          units: '车',   // 计量单位
          old_price: 1115.00,   // 原价
          price: 1114.00,
          amount: 23423,   // 总销量
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 2,
          img: require("assets/img/home/r1.jpg"),
          title: '清运居民建筑垃圾',
          units: '斗',
          old_price: 1119.00,   // 原价
          price: 1116.00,
          amount: 34532,
          num: 0,   // 选中的数量
          choose: false,   // 是否选择该商品
        },
        {
          id: 3,
          img: require("assets/img/home/r2.jpg"),
          title: '清运公司建筑垃圾',
          units: '车',
          old_price: 1130.00,   // 原价
          price: 1120.00,
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
.rubbish {
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