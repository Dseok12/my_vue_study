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
      <input type="text" v-model.number="month" />
      <!-- <textarea v-model.number="month"></textarea>
      <select v-model.number="month">
        <option>3</option>
        <option>6</option>
        <option>9</option>
      </select> -->
      <p>{{ month }}개월 선택함: {{ 원룸들[누른거].price * month }} 원</p>
      <button @click="$emit('모달창닫아라')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
    name: "Modal",
    data() {
      return {
        month: 1,
      }
    },
    watch: {
      month(a){
        if(a > 12) {
          alert('최대 12개월까지 선택 가능합니다.');
          return a.value = 1;
        }
      }
    },
    beforeUpdate() {
      if(this.month < 2){
        alert('최소 2개월 이상 선택해주세요.');
        this.month = 2;
      }
    },
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