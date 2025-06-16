<template>
  <!-- 1-7강 -->
  <!-- =================== 메뉴 =================== -->
  <div class="menu">
    <ul class="menu--box">
      <li
        v-for="(메뉴, idx) in 메뉴들"
        :key="idx"
      >
        <a href="javascript:;">{{ 메뉴 }}</a>
      </li>
    </ul>
  </div>
  <!-- =================== 메뉴 =================== -->

  <Discount />

  <!-- <div class="start" :class="{ end: 모달창열렸니 }">
    <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @모달창닫아라 = "모달창열렸니 = false" />
  </div> -->
  <Transition name="fade">
    <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @모달창닫아라 = "모달창열렸니 = false" />
  </Transition>

  <!-- =================== 상품 리스트 =================== -->

  <Card 
    v-for="(원룸, idx) in 원룸들"
    :key="idx"
    :원룸="원룸들[idx]"
    @열려라모달 = "모달창열렸니 = true; 누른거 = idx;"
  />

  <!-- =================== 상품 리스트 =================== -->
</template>
<script>
import { oneroom } from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  data() {
    return {
      메뉴들: ['Home', 'Products', 'About'],
      모달창열렸니: false,
      원룸들: oneroom,
      누른거: 0,
    };
  },
  components: {
    Discount,
    Modal,
    Card,
  }
};
</script>
<style>
@import './css/ch01.css';
</style>
