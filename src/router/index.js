import Vue from 'vue'
import VueRouter from 'vue-router'

import login from  './login'
import home from './home'


const Message = () => import('views/message/Message')
const Car = () => import('views/car/Car')
const Mine = () => import('views/mine/Mine')


// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象==============
const routes = [
  {
    path: '*',   // 当路由没有匹配的组件时,  则跳转到login页面
    redirect: '/main'   // login
  },
  {
    path: '/main',
    component: () => import('views/Main'),
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      home,
      {
        path: 'message',
        component: Message
      },
      {
        path: 'car',
        component: Car
      },
      {
        path: 'mine',
        component: Mine
      },
    ]
  },
  ...login,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 3. 导出
export default router

