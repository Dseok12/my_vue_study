<template>
  <div>
    <!-- 받은 current를 그대로 BodySlot에 넘겨준다 -->
    <BodySlot :current="current">
      <template #go1>
        <div>go1_메인 작업</div>
      </template>
      <template #go2>
        <div>go2_메인 작업</div>
      </template>
      <template #go3>
        <div>go3_메인 작업</div>
      </template>
    </BodySlot>
  </div>
</template>

<script setup>
import BodySlot from '../layouts/BodySlot.vue';

defineProps({
  current: { type: String, required: true }
});
</script>
