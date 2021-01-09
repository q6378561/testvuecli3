<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    // 创建的时候回调
    created() {
      console.log('created');
    },
    // 挂载的时候回调
    mounted() {
      console.log('mounted');
    },
    // 更新的时候回调
    updated() {
      console.log('updated');

    }

  }
</script>

<style scoped>

</style>