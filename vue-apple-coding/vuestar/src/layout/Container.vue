<template>
  <div>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>
<script>
  import Post from '../components/Post.vue';
  export default {
    name: 'Container',
    components: {
      Post
    }
  }
</script>
<style>
  
</style>