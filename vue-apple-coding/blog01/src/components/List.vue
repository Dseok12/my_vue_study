<template>
  <ul v-for="(블로그글쪼개기, idx) in 블로그글낱개" :key="idx" class="list--box">
    <!-- <li @click="$router.push(`/detail/${idx}`)"><h5>{{ 블로그글쪼개기.title }}</h5></li> -->
    <li @click="goPath('/detail',idx)" class="cursor-pointer mb3">
      <h5>{{ 블로그글쪼개기.title }}</h5>
      <p>{{블로그글쪼개기.content}}</p>
      <p>{{블로그글쪼개기.date}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "List",
  props:{
    블로그글낱개: {type: Array},
  },
  methods : {
    goPath(rp,idx){
      this.$router.push(`${rp}/${idx}`)
    }
  }
}
</script>
<style>
.list--box{width: 50%;margin: 0 auto;}
.cursor-pointer{cursor: pointer;}
.mb3{margin-bottom: 30px;}
</style>