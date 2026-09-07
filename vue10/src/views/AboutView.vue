<template>
  <div class="container">
    여기는 어바웃.
    <button type="button" class="btn btn-primary" @click="fncGoHome">홈으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const route = useRouter();

const fncGoHome = () => {
  // console.log(router);
  // console.log(route.path);
  // console.log(route.name);
  // console.log(route.params);
  // console.log(route.query);

  route.push("/");
};
</script>
