<template>
  <div class="MasterAppWrapper">
    <Header :메뉴들="부모메뉴들" />
    <div class="MasterAppInner">
      <h1>Welcome to My Vue App</h1>
      <p>This is a simple Vue.js application.</p>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  data() {
      return {
          부모메뉴들: [
              { name: 'Home', link: 'javascript:;' },
              { name: 'About', link: 'javascript:;' },
              { name: 'Random', link: 'javascript:;' },
          ]
      }
  },
  components: {
    Header
  }
}

</script>

<style>

</style>
