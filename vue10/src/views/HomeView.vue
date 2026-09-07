<template>
  <div>
    여기는 홈.
    <button type="button" class="btn btn-primary" @click="fncChangePage">
      About Page
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const route = useRouter();

const fncChangePage = () => {
  route.push("/about");
};
</script>
