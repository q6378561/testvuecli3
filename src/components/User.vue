<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息嘿嘿嘿</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.aaaa
      }
    }
  }
</script>

<style scoped>

</style>