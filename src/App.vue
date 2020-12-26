<template>
  <div id="app">
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>
    <router-link :to="'/user/'+ userId" tag="button" replace >用户</router-link>
<!--    <button @click="homeclick">首页</button>-->
<!--    <button @click="aboutclick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      userId: 'lisiAAAAA'
    }
  },
  components: {

  },
  methods: {
    homeclick() {
      // this.$router.push('/home').catch(err => err)
      console.log("homeclick");
    },
    aboutclick(){
      // this.$router.push('/about').catch(err => err)
      console.log("aboutclick");
    }
  }
}
</script>

<style>
  .active {
    color: #00BB33;
  }
</style>
