<template>
  <div id="app">

    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>
<!--    <router-link :to="'/user/'+ userId" tag="button" replace >用户</router-link>-->
<!--    <router-link :to="{path: '/profile',query: {name: 'why', age: 18, height: 1.88}}" tag="button" replace >档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

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
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  }
}
</script>

<style>
  .active {
    color: #00BB33;
  }
</style>
