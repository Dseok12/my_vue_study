<template>
  <div class="body--inner">
    <!-- slot 이름을 동적으로: current가 'go2'면 #go2 내용만 그려진다 -->
    <slot :name="current"></slot>
  </div>
</template>

<script setup>
defineProps({
  current: { type: String, required: true }
});
</script>
