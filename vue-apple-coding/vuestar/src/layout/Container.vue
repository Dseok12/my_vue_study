<template>
  <div>
    <Post :또넘겨게시물="넘겨게시물[i]" v-for="(a,i) in 넘겨게시물" :key="i" />
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
      넘겨게시물: {
        type: Array,
      }
    },
  }
</script>
<style>
  
</style>