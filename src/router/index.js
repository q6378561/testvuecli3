//配置相关路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
  {
    path: '/user/:aaaa',
    component: User
  }


]
// 2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 传入Vue实例中
export default router