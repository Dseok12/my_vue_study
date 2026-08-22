<template>
  <div class="AllWrap">
    <!-- current: 지금 선택된 메뉴 / @change: 자식(Header)이 보내온 값으로 교체 -->
    <Header :current="current" @change="current = $event"/>
    <Body :current="current"/>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Body from './components/Body.vue';
import Header from './components/Header.vue';

// 부모가 상태를 들고 있어야 Header/Body 둘 다에게 내려줄 수 있다
const current = ref('go1');
</script>
