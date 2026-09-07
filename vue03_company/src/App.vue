<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :게시물 = "게시물" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import postdata from "./assets/postdata.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      게시물 : postdata,
      더보기 : 0,
    }
  },
  components: {
    Container,
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then( 결과 => {
        this.게시물.push(결과.data);
        this.더보기++;
      })
    },
  },
}
</script>
<style>
  @import "./css/app.css";
</style>