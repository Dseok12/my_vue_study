<template lang="html">
  {{ $route.params.id }}
  <div class="container mt-4">
    <h5>{{ 블로그글낱개[$route.params.id].title }}</h5>
    <p>{{ 블로그글낱개[$route.params.id].content }}</p>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: "Detail",
  props:{
    블로그글낱개: {tpye: Array},
  }
}
</script>
<style lang="css">
  
</style>