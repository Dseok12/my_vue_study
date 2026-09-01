<template>
  <div>
    About View
    <button class="btn btn-primary" @click="fncGoHome">Home으로 이동</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const route = useRouter();
const fncGoHome = () => {
  route.push('/')
}
</script>

<style lang="scss" scoped>

</style>