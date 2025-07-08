<template>
  <Header />
  <!-- <List :블로그글낱개="블로그글들" /> -->
   
  <router-view :블로그글낱개="블로그글들"></router-view>
</template>

<script>
import Header from './components/Header.vue';
// import List from './components/List.vue';
import blogData from './assets/blog.js';


export default {
  name: 'App',
  components: {
    Header,
    // List
  },
  data() {
    return {
      블로그글들 : blogData
    };
  },
  methods: {
    
  }
  
}

</script>

