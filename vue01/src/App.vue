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
      <img
        :src="원룸들[누른거].image"
        alt=""
        class="room-img"
      />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
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
      <a
        href="javascript:;"
        @click="
          모달창열렸니 = true;
          누른거 = idx;
        "
        >해당 상품 열기</a
      >
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
      누른거: 0,
    };
  },
};
</script>
<style>
@import './css/ch01.css';
</style>
