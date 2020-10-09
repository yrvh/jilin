<template>
  <div class="carry">
    <Goods v-for="item in goodlist" :key="item.id" :info="item"/>
  </div>
</template>

<script>
export default {
  name: "Carry",
  data() {
    return {
      goodlist: [
        {
          id: 1,
          img: require("assets/img/home/p1.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 23423,
        },
        {
          id: 2,
          img: require("assets/img/home/p2.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 3452,
        },
        {
          id: 3,
          img: require("assets/img/home/p4.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 94.00,
          amount: 34532,
        },
        {
          id: 4,
          img: require("assets/img/home/p5.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 5,
          img: require("assets/img/home/p6.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 3245,
        },
        {
          id: 6,
          img: require("assets/img/home/s7.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 34532,
        },
        {
          id: 7,
          img: require("assets/img/home/s8.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 6758,
        },
        {
          id: 8,
          img: require("assets/img/home/p3.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 24.00,
          amount: 678,
        },
        {
          id: 9,
          img: require("assets/img/home/p1.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 33.00,
          amount: 65,
        },
        {
          id: 10,
          img: require("assets/img/home/p6.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 44.00,
          amount: 35434,
        },
        {
          id: 11,
          img: require("assets/img/home/p5.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount:43576 ,
        },
        {
          id: 12,
          img: require("assets/img/home/p1.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 23423,
        },
        {
          id: 13,
          img: require("assets/img/home/p3.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 3452,
        },
        {
          id: 14,
          img: require("assets/img/home/p4.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 94.00,
          amount: 34532,
        },
        {
          id: 15,
          img: require("assets/img/home/p6.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 3245,
        },
        {
          id: 16,
          img: require("assets/img/home/s7.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 34532,
        },
        {
          id: 17,
          img: require("assets/img/home/s8.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount: 6758,
        },
        {
          id: 18,
          img: require("assets/img/home/p3.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 24.00,
          amount: 678,
        },
        {
          id: 19,
          img: require("assets/img/home/p1.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 33.00,
          amount: 65,
        },
        {
          id: 20,
          img: require("assets/img/home/p6.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 44.00,
          amount: 35434,
        },
        {
          id: 21,
          img: require("assets/img/home/p4.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 54.00,
          amount:43576 ,
        },
        {
          id: 22,
          img: require("assets/img/home/p5.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 23,
          img: require("assets/img/home/p3.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 74.00,
          amount: 3452,
        },
        {
          id: 24,
          img: require("assets/img/home/p1.jpg"),
          title: '吉林搬运搬运工最好最快提供高质量搬运服务',
          price: 74.00,
          amount: 3452,
        },



      ]
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
}
</style>