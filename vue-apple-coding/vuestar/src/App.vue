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

  <Container :넘겨게시물="게시물들" v-model:postRealStep="realStep" />
  
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

<!-- <button @click="step = 0">버튼0</button>
<button @click="step = 1">버튼1</button>
<button @click="step = 2">버튼2</button>
<div v-if="step == 0">내용0</div>
<div v-if="step == 1">내용1</div>
<div v-if="step == 2">내용2</div> -->

</template>

<script>
import Container from './layout/Container.vue';
import postData from './assets/postData.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      게시물들: postData,
      더보기: 0,
      // step : 0,
      realStep : 0,
    };
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((결과) => {
          this.게시물들.push(결과.data);
          this.더보기++;
        })
        .catch((err) => {
          console.log("더 이상 게시물이 없습니다.")
        })
    },
    upload(e){
      let 파일 = e.target.files;
      let imgUrl = URL.createObjectURL(파일[0]);
      console.log(파일)
      console.log(imgUrl)
      this.step++;
      console.log(step)
    }
  }
}
</script>

<style scoped>
  @import './css/App.css';
</style>