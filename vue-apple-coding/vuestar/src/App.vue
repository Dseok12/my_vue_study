<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시물="게시물" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import Container from './layout/Container.vue';
import postData from './assets/postData.js';
export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      게시물: postData
    };
  },
}
</script>

<style scoped>
  @import './css/App.css';
</style>
