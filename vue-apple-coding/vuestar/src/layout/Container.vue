<template>
  <div>
    <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i" />
  </div>
</template>
<script>
  import Post from '../components/Post.vue';
  export default {
    name: 'Container',
    components: {
      Post
    },
    props: {
      게시물: {
        type: Array,
        default: () => []
      }
    },
  }
</script>
<style>
  
</style>