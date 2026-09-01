<template>
  <div>
    Home View
    <!--
    <hr/>
    <p>{{ $route }}</p>
    <hr/>
    <p>{{ $route.path }}</p>
    <hr/>
    <p>{{ $route.name }}</p>
    <hr/>
    -->
    <button class="btn btn-primary" @click="fncGoAbout">About으로 이동</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const route = useRouter();
const fncGoAbout = () => {
  route.push('/about');
}

</script>