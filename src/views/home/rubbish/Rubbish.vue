<template>
  <div class="rubbish">
    <Goods v-for="item in goodlist" :key="item.id" :info="item"/>
  </div>
</template>

<script>
export default {
  name: "Rubbish",
  data() {
    return {
      goodlist: [
        {
          id: 1,
          img: require("assets/img/home/r1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 23423,
        },
        {
          id: 2,
          img: require("assets/img/home/r2.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 3452,
        },
        {
          id: 3,
          img: require("assets/img/home/r4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 94.00,
          amount: 34532,
        },
        {
          id: 4,
          img: require("assets/img/home/r5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 5,
          img: require("assets/img/home/r6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 3245,
        },
        {
          id: 6,
          img: require("assets/img/home/r7.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 34532,
        },
        {
          id: 7,
          img: require("assets/img/home/r8.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 6758,
        },
        {
          id: 8,
          img: require("assets/img/home/r3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 24.00,
          amount: 678,
        },
        {
          id: 9,
          img: require("assets/img/home/r1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 33.00,
          amount: 65,
        },
        {
          id: 10,
          img: require("assets/img/home/r6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 44.00,
          amount: 35434,
        },
        {
          id: 11,
          img: require("assets/img/home/r5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount:43576 ,
        },
        {
          id: 12,
          img: require("assets/img/home/r1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 23423,
        },
        {
          id: 13,
          img: require("assets/img/home/r3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 3452,
        },
        {
          id: 14,
          img: require("assets/img/home/r4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 94.00,
          amount: 34532,
        },
        {
          id: 15,
          img: require("assets/img/home/r6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 3245,
        },
        {
          id: 16,
          img: require("assets/img/home/r7.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 34532,
        },
        {
          id: 17,
          img: require("assets/img/home/r8.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount: 6758,
        },
        {
          id: 18,
          img: require("assets/img/home/r3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 24.00,
          amount: 678,
        },
        {
          id: 19,
          img: require("assets/img/home/r1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 33.00,
          amount: 65,
        },
        {
          id: 20,
          img: require("assets/img/home/r6.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 44.00,
          amount: 35434,
        },
        {
          id: 21,
          img: require("assets/img/home/r4.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 54.00,
          amount:43576 ,
        },
        {
          id: 22,
          img: require("assets/img/home/r5.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 23,
          img: require("assets/img/home/r3.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 24,
          img: require("assets/img/home/r1.jpg"),
          title: '硅酸盐水泥上等优质水泥独家代理高品质',
          price: 74.00,
          amount: 3452,
        },



      ]
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
}
</style>