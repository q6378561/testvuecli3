<template>
  <div>
    <h2>我是Profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
  export default {
    name: "profile"
  }
</script>

<style scoped>

</style>