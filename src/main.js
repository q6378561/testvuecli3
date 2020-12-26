import Vue from 'vue'
import App from './App.vue'
import store from './store'
//自动搜索router目录下的index文件所以可以简写
import router from './router'
// 产品构建的提示信息
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
