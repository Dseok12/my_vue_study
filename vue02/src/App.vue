<template>
  <div class="MasterAppWrapper">
    <Header :메뉴들="부모메뉴들" />
    <div class="MasterAppInner">
      <div class="MasterAppContent">
        <h1>원룸 정보</h1>
        <ul class="room-list">
          <Itemlist :원룸들프롭스="원룸들" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Itemlist from './components/Itemlist.vue';
import { oneroom } from './assets/oneroom.js';
export default {
  name: 'App',
  data() {
      return {
          부모메뉴들: [
              { name: 'Home', link: 'javascript:;' },
              { name: 'About', link: 'javascript:;' },
              { name: 'Random', link: 'javascript:;' },
          ],
          원룸들: oneroom,
      }
  },
  components: {
    Header,
    Itemlist
  }
}

</script>

<style>

</style>
