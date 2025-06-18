<template>
  <!-- =============== 안내문구 ===================== -->

  <div class="discount">
    <p>지금 구매하면 {{ 할인수 }}% 할인!</p>
  </div>

  <!-- =============== 안내문구 ===================== -->
</template>
<script>
export default {
    name: "Discount",
    data() {
      return {
        할인수 : 30
      }
    },
    mounted() {
      setInterval(() => {
        this.할인수--;
      }, 1000) 
    },
}
</script>
<style>
    
</style>