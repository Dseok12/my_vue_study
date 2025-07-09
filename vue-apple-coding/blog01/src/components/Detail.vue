<template lang="html">
  {{ $route.params.id }}
  <div class="container mt-4">
    <h4>상세페이지</h4>
    <h5>{{ 블로그글낱개[$route.params.id].title }}</h5>
    <p>{{ 블로그글낱개[$route.params.id].content }}</p>
  </div>
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