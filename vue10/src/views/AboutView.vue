<template>
  <div>
    여기는 어바웃.
    <button @click="fncGoHome">홈으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const route= useRouter();

const fncGoHome = () => {
  // console.log(router);
  // console.log(route.path);
  // console.log(route.name);
  // console.log(route.params);
  // console.log(route.query);

  route.push('/');
};

</script>