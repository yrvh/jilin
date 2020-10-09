<template>
  <tabbar>
    <tabbar-item :path="path[0]" active_color="#1079f2" default_color="#eeeeee">
      <img slot="item-icon" :src="require('assets/img/tabbar/home.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/home1.png')" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item :path="path[1]" active_color="#1079f2" default_color="#eeeeee">
      <img slot="item-icon" :src="require('assets/img/tabbar/message.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/message1.png')" alt="">
      <div slot="item-text">消息</div>
    </tabbar-item>
    <tabbar-item :path="path[2]" active_color="#1079f2" default_color="#eeeeee">
      <img slot="item-icon" :src="require('assets/img/tabbar/car.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/car1.png')" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item :path="path[3]" active_color="#1079f2" default_color="#eeeeee">
      <img slot="item-icon" :src="require('assets/img/tabbar/mine.png')" alt="">
      <img slot="item-icon-active" :src="require('assets/img/tabbar/mine1.png')" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "@/components/common/Tabbar/Tabbar";
import TabbarItem from "@/components/common/Tabbar/TabbarItem";

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {   // tabbar的跳转路径
      path: ['/main/home','/main/message','/main/car','/main/mine']
    }
  }
}
</script>

<style scoped>

</style>
