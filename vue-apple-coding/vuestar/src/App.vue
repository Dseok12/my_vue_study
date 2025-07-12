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

  <Container @인스타디비="인스타디비들" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import Container from './layout/Container.vue';
import 인스타디비들 from './assets/postData.js';
export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      postData: 인스타디비들
    };
  },
}
</script>

<style scoped>
  @import './css/App.css';
</style>
