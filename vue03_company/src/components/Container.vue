<template>
  <div>
    <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    <!--<Post/>
    <Post/>-->
  </div>
</template>
<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    게시물: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style>
  
</style>