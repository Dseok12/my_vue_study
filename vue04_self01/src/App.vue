<template>
  <div class="AllApp">
    <TopGradeHeader @change-grade="handleChangeGrade" />
    <CommonGnbSection :grade="selectedGradeLabel" />

    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopGradeHeader from './components/header/TopGradeHeader.vue';

import { router } from './routers/router.js';
import CommonGnbSection from './components/header/CommonGnbSection.vue';

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
