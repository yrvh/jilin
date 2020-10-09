<template>
  <div class="home">
    <van-search v-model="search_name" shape="round" background="rgba(230,230,230,0.3)" placeholder="请输入关键字..."
                maxlength="19" clearable clear-trigger="always" show-action>
      <template #action>
        <div class="search-btn" @click="handleSearch">搜索</div>
      </template>
    </van-search>
    <!--  站位  -->
    <div class="p-holder"></div>

    <!--  轮播图    <MainSwiper/>-->
    <div class="myswipe">
      <van-swipe autoplay="3000" duration="600" indicator-color="#12091F">
        <van-swipe-item v-for="item in swi_arr" :key="item.id">
          <van-image :src="item.path" width="100%" height="100%" radius="10px" fit="fill"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>

    <Recommend :rarr="recommends_arr"></Recommend>

    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
import Recommend from "@/components/content/Recommend/Recommend";

export default {
  name: "Home",
  components: {
    Recommend
  },
  data() {
    return {
      search_name: '',   // 搜索的关键字
      swi_arr: [   // 轮播图的数组
        {
          id: 1,
          path: require("assets/img/home/s1.jpg"),
        },
        {
          id: 2,
          path: require("assets/img/home/s2.jpg"),
        },
        {
          id: 3,
          path: require("assets/img/home/s3.jpg"),
        },
        {
          id: 4,
          path: require("assets/img/home/s4.jpg"),
        },
        {
          id: 5,
          path: require("assets/img/home/s5.jpg"),
        },
        {
          id: 6,
          path: require("assets/img/home/s6.jpg"),
        },
        {
          id: 7,
          path: require("assets/img/home/s7.jpg"),
        },
        {
          id: 8,
          path: require("assets/img/home/s8.jpg"),
        },
      ],
      recommends_arr: [   // 导航的数据
        {
          id: 0,
          icon: 'icon-jianzhu',
          icolor: "#DF561C",
          title: '装修材料',
          link: '/main/home/material'
        },
        {
          id: 1,
          icon: 'icon-tuiche',
          icolor: "#17c295",
          title: '搬运劳力',
          link: '/main/home/carry'
        },
        {
          id: 2,
          icon: 'icon-jiazhengfuwu',
          icolor: "#F7B55E",
          title: '家政服务',
          link: '/main/home/servant'
        },
        {
          id: 3,
          icon: 'icon-lajishouyun',
          icolor: "#4DA9EB",
          title: '垃圾清运',
          link: '/main/home/rubbish'
        }
      ],
    }
  },
  methods: {
    handleSearch() {   // 点击搜索
      console.log("点击搜索");
    },
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.home {
  //background-color: #f70;
  .van-search {
    position: fixed;
    z-index: 50;
    top:0;
    left: 0;
    right: 0;
    .search-btn {
      color: var(--cl-textF);
    }
  }
  .p-holder {
    margin-top: 54px;
    height: 75px;
    border-bottom-left-radius: 50% 20px;
    border-bottom-right-radius: 50% 20px;
    background-color: var(--cl-bg-op);
  }
  .myswipe {
    transform: translateY(-70px);
    width: 86%;
    height: 100px;
    margin: 0 auto;
  }
  .van-swipe {
    height: 170px;
  }
}
</style>
