<template>
  <div class="car">
    <van-nav-bar border fixed  z-index="50" @click-right="onDirectory">
      <template #title>
        <span class="title">购物车</span>
      </template>
      <template #right>
        <span class="manage">管理</span>
      </template>
    </van-nav-bar>
    <div class="p-holder"></div>


    <van-card v-for="item in carlist" :key="item.id" :title="item.title" :desc="item.desc" :tag="item.tag"
              :price="item.price" :origin-price="item.origin" centered :thumb="item.path">
      <template #title>
        <div class="title">{{item.title}}</div>
      </template>
      <template #desc>
        <div class="desc">{{item.desc}}</div>
      </template>
      <template #price>
        <span class="price">¥ {{item.price}}</span>
      </template>
      <template #footer>
        <van-stepper v-model="item.num" integer></van-stepper>
      </template>
    </van-card>

  </div>

</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      carlist: [
        {
          id: 1,
          title: '沙子',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 8,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s1.jpg'),
        },
        {
          id: 2,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 2,
          price: 55,
          origin: 71,
          path: require('assets/img/home/r2.jpg'),
        },
        {
          id: 3,
          title: '玻璃',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '新品',
          num: 34,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s3.jpg'),
        },
        {
          id: 4,
          title: '瓷砖',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '新品',
          num: 1,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s4.jpg'),
        },
        {
          id: 5,
          title: '红砖',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 7,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s5.jpg'),
        },
        {
          id: 6,
          title: '陶粒',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 22,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s6.jpg'),
        },
        {
          id: 7,
          title: '沙子',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 11,
          price: 55,
          origin: 71,
          path: require('assets/img/home/s7.jpg'),
        },
        {
          id: 8,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 19,
           price: 55,
          origin: 71,
          path: require('assets/img/home/s8.jpg'),
        },
        {
          id: 9,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 16,
           price: 55,
          origin: 71,
          path: require('assets/img/home/v2.jpg'),
        },
        {
          id: 10,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 56,
           price: 34,
          origin: 71,
          path: require('assets/img/home/v4.jpg'),
        },
        {
          id: 11,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 88,
           price: 67,
          origin: 71,
          path: require('assets/img/home/v3.jpg'),
        }
        
      ]
    }
  },
  methods: {
    onDirectory() {
      console.log("点击了管理");
    }
  }
}
</script>

<style scoped lang="scss">
.van-nav-bar {
  .title {
    color: var(--cl-textF);
  }
  background-color: var(--cl-bg-op) !important;
}
.p-holder {
  width: 100%;
  height: 46px;
  //background-color: #ee3333;
  //margin-bottom: 10px;
}
.van-card {
  background-color: rgba(250,250,250,0.3);
  .title { color: var(--cl-textF); font-size: 16px;}
  .desc { color: var(--cl-textD); font-size: 13px;}
  .price { color: #ee3333; font-size: 17px;}
}


</style>