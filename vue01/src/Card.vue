<template>
  <div

    class="room-list"
  >
    <div
      class="room-item"
      
    >
      <img
        :src="원룸.image"
        alt=""
        class="room-img"
      />
      <p>{{ 원룸.title }}</p>
      <p>{{ 원룸.price }} 원</p>
      <!-- <a
        href="javascript:;"
        @click="
          모달창열렸니 = true;
          누른거 = idx;
        "
        >해당 상품 열기</a
      > -->
    </div>
  </div>
</template>
<script>
export default {
    name: "Card",
    
}
</script>
<style>
    
</style>