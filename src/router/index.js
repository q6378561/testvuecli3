//配置相关路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// 懒加载
const Home = () => import('../components/Home')
const HomeNews = () =>import('../components/HomeNews')
const HomeMessage = () =>import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/profile')
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 懒加载



const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '' ,
        redirect: 'news'
      },
      {
        // 子路由不需要加/
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }

    ]
  },
  {
    path:'/about',
    component: About
  },
  {
    path: '/user/:aaaa',
    component: User
  },
  {
    path: '/profile',
    component: Profile
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