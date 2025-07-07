<template>
  <ul v-for="(블로그글쪼개기, idx) in 블로그글낱개" :key="idx">
    <li><h5>{{ 블로그글쪼개기.title }}</h5></li>
    <li>{{블로그글쪼개기.content}}</li>
    <li>{{ 블로그글쪼개기.date }}</li>
  </ul>
</template>
<script>
export default {
  name: "List",
  props:{
    블로그글낱개: {tpye: Array},
  }
}
</script>
<style>
  
</style>