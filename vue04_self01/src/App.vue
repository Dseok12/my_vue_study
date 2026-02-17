<template>
  <div class="AllApp">
    <GradeHeader @change-grade="handleChangeGrade" />

    <!-- 확인용 UI (원하면 삭제 가능) -->
    <div style="padding: 20px;">
      <strong>선택된 학년:</strong>
      <span>{{ selectedGradeLabel }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GradeHeader from './components/header/GradeHeader.vue'

const selectedGradeLabel = ref('')

const handleChangeGrade = (payload) => {

  if (!payload) {
    selectedGradeLabel.value = ''
    return
  }

  if (!payload.label) {
    selectedGradeLabel.value = ''
    return
  }

  if (typeof payload.label !== 'string') {
    selectedGradeLabel.value = ''
    return
  }

  selectedGradeLabel.value = payload.label
}
</script>

<style>
@import "./css/common/layout.css";
</style>
