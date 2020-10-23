<template>
  <div class="material">
    <Goods v-for="item in goodlist" :key="item.id" :img="item.img" 
           :title="item.title" :price="item.price" :units="item.units"
           :old="item.old_price" :amount="item.amount"  @click="onGoods"/>
  </div>
</template>

<script>
export default {
  name: "Material",
  data() {
    return {
      goodlist: [
        {
          id: 1,
          img: require("assets/img/home/s1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,   // 现价
          units: '每袋',
          amount: 23423,
        },
        {
          id: 2,
          img: require("assets/img/home/s3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 3452,
        },
        {
          id: 3,
          img: require("assets/img/home/s4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 94.00,
          units: '每袋',
          amount: 34532,
        },
        {
          id: 4,
          img: require("assets/img/home/s5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 74.00,
          units: '每袋',
          amount: 3452,
        },
        {
          id: 5,
          img: require("assets/img/home/s6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 3245,
        },
        {
          id: 6,
          img: require("assets/img/home/s7.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 34532,
        },
        {
          id: 7,
          img: require("assets/img/home/s8.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 6758,
        },
        {
          id: 8,
          img: require("assets/img/home/s3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 24.00,
          units: '每袋',
          amount: 678,
        },
        {
          id: 9,
          img: require("assets/img/home/s1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 33.00,
          units: '每袋',
          amount: 65,
        },
        {
          id: 10,
          img: require("assets/img/home/s6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 44.00,
          units: '每袋',
          amount: 35434,
        },
        {
          id: 11,
          img: require("assets/img/home/s5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount:43576 ,
        },
        {
          id: 12,
          img: require("assets/img/home/s1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 23423,
        },
        {
          id: 13,
          img: require("assets/img/home/s3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 3452,
        },
        {
          id: 14,
          img: require("assets/img/home/s4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 94.00,
          units: '每袋',
          amount: 34532,
        },
        {
          id: 15,
          img: require("assets/img/home/s6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 3245,
        },
        {
          id: 16,
          img: require("assets/img/home/s7.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 34532,
        },
        {
          id: 17,
          img: require("assets/img/home/s8.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount: 6758,
        },
        {
          id: 18,
          img: require("assets/img/home/s3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 24.00,
          units: '每袋',
          amount: 678,
        },
        {
          id: 19,
          img: require("assets/img/home/s1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 33.00,
          units: '每袋',
          amount: 65,
        },
        {
          id: 20,
          img: require("assets/img/home/s6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 44.00,
          units: '每袋',
          amount: 35434,
        },
        {
          id: 21,
          img: require("assets/img/home/s4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 54.00,
          units: '每袋',
          amount:43576 ,
        },
        {
          id: 22,
          img: require("assets/img/home/s5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 74.00,
          units: '每袋',
          amount: 3452,
        },
        {
          id: 23,
          img: require("assets/img/home/s3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 74.00,
          units: '每袋',
          amount: 3452,
        },
        {
          id: 24,
          img: require("assets/img/home/s1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          old_price: 89.00,   // 原价
          price: 74.00,
          units: '每袋',
          amount: 3452,
        },



      ]
    }
  },
  methods: {
    onGoods() {   // 点击 每个商品
      this.$router.push('/goodsdetail')
    }
  }
}
</script>

<style scoped lang="scss">
.material {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>