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

  <!-- =================== 모달창 =================== -->
  <div
    class="black-bg"
    v-if="모달창열렸니"
  >
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>
  <!-- =================== 모달창 =================== -->

  <!-- =================== 상품 리스트 =================== -->
  <div
    v-for="(원룸, idx) in 원룸들"
    :key="idx"
    class="room-list"
  >
    <div
      class="room-item"
      @click="모달창열렸니 = true"
    >
      <img
        :src="원룸.image"
        alt=""
        class="room-img"
      />
      <p>{{ 원룸.title }}</p>
      <p>{{ 원룸.price }} 원</p>
    </div>
  </div>
  <!-- =================== 상품 리스트 =================== -->
</template>
<script>
import { oneroom } from './assets/oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      메뉴들: ['Home', 'Products', 'About'],
      모달창열렸니: false,
      원룸들: oneroom,
    };
  },
};
</script>
<style>
@import './css/ch01.css';
</style>
