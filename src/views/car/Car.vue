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

    <van-tabs v-model="car_mark" color="#fff" line-width="50%" background="rgba(230,230,230,0.3)">
      <van-tab>
        <template #title><span class="tab-text">材料单</span></template>
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
            <van-checkbox v-show="show_check" :name="item.id" v-model="item.ischeck" shape="square"></van-checkbox>
          </template>
        </van-card>
      </van-tab>

      <van-tab>
        <template  #title><span class="tab-text">劳务单</span></template>
        <van-card v-for="item in labour_list" :key="item.id" :title="item.title" :desc="item.desc" :tag="item.tag"
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
            <van-checkbox v-show="show_check" :name="item.id" v-model="item.ischeck" shape="square"></van-checkbox>
          </template>
        </van-card>
      </van-tab>

    </van-tabs>

    <van-submit-bar :price="5200800" label="合计:" button-text="提交订单">
      <van-checkbox v-show="show_check" v-model="checked"><span class="select-all">全选</span></van-checkbox>
    </van-submit-bar>

  </div>

</template>

<script>
export default {
  name: "Car",
  data() {
    return {
      show_check: false,   // 是否显示
      checked:null, // 全选
      car_mark: null,   // tab的标致
      carlist: [
        {
          id: 1,
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
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
          ischeck: false,
          title: '水泥',
          desc: '高质量光品质,店长推荐,好评率最高',
          tag: '热卖',
          num: 88,
           price: 67,
          origin: 71,
          path: require('assets/img/home/v3.jpg'),
        }
        
      ],
      labour_list: [
        {
          id: 7,
          ischeck: false,
          title: '沙子',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 11,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s7.jpg'),
        },
        {
          id: 8,
          ischeck: false,
          title: '水泥',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 19,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s8.jpg'),
        },
        {
          id: 9,
          ischeck: false,
          title: '水泥',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 16,
          price: 6,
          origin: 12,
          path: require('assets/img/home/v2.jpg'),
        },
        {
          id: 10,
          ischeck: false,
          title: '水泥',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 56,
          price: 34,
          origin: 12,
          path: require('assets/img/home/v4.jpg'),
        },
        {
          id: 11,
          ischeck: false,
          title: '水泥',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 88,
          price: 67,
          origin: 12,
          path: require('assets/img/home/v3.jpg'),
        },
        {
          id: 1,
          ischeck: false,
          title: '玻璃',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 8,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s1.jpg'),
        },
        {
          id: 2,
          ischeck: false,
          title: '水泥',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 2,
          price: 6,
          origin: 12,
          path: require('assets/img/home/r2.jpg'),
        },
        {
          id: 3,
          ischeck: false,
          title: '玻璃',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '新品',
          num: 34,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s3.jpg'),
        },
        {
          id: 4,
          ischeck: false,
          title: '瓷砖',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '新品',
          num: 1,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s4.jpg'),
        },
        {
          id: 5,
          ischeck: false,
          title: '红砖',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 7,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s5.jpg'),
        },
        {
          id: 6,
          ischeck: false,
          title: '陶粒',
          desc: '搬运费用浮动,依据楼层高低, 距离远近,坡度大小等等情况而定',
          tag: '热卖',
          num: 22,
          price: 6,
          origin: 12,
          path: require('assets/img/home/s6.jpg'),
        },

      ],
    }
  },
  methods: {
    onDirectory() {
      console.log("点击了管理");
      this.show_check = !this.show_check
    }
  }
}
</script>

<style scoped lang="scss">
.car {
  padding-bottom: 60px;
}
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
.tab-text {
  color: #fff;
}
.van-card {
  background-color: var(--cl-bg-op);
  .title { color: var(--cl-textF); font-size: 16px;}
  .desc { color: var(--cl-textD); font-size: 13px;}
  .price { color: var(--cl-bg-opposite); font-size: 20px;}
}
.van-submit-bar {
  bottom: 50px;
  background-color: rgba(130,130,80,0.7);
  .select-all { color: #fff;}
}


</style>