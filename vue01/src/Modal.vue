<template>
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
      <!-- <button @click="모달창열렸니 = false">닫기</button> -->
    </div>
  </div>
</template>
<script>
export default {
    name: "Modal",
    props: {
        원룸들: {
            type: Array,
        },
        모달창열렸니: {
            type: Boolean,
        },
        누른거: {
            type: Number,
        }
    }
    
}
</script>
<style>
    
</style>