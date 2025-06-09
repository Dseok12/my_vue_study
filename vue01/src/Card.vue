<template>
  <div
    class="room-list"
  >
    <div
      class="room-item"
      @click="fncOpenModal"  
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
      >해당 상품 열기</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    원룸: {
      type: Object,
    }
  },
  methods: {
    fncOpenModal() {
      this.$emit('열려라모달', this.원룸)
    }
  }
}
</script>
<style>
    
</style>