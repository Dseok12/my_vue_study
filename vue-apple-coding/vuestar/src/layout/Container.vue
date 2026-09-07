<template>
  <button @click="setPostRealStep(0)">포스트</button>
  <button @click="setPostRealStep(1)">필터</button>
  <button @click="setPostRealStep(2)">글쓰기</button>

  <div v-if="postRealStep == 0">
    <Post :또넘겨게시물="넘겨게시물[i]" v-for="(a,i) in 넘겨게시물" :key="i" />
  </div>
  <div v-if="postRealStep == 1">
    <!-- 필터선택페이지 -->
    <div class="upload-image" :style="`background-image: url(${넘겨이미지})`"></div>
    <div class="filters">
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
      <div class="filter-1"></div>
    </div>
  </div>

  <div v-if="postRealStep == 2">
    <!-- 글작성페이지 -->
    <div class="upload-image" :style="`background-image: url(${넘겨이미지})`"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>

</template>
<script>
  import Post from '../components/Post.vue';
  export default {
    name: 'Container',
    components: {
      Post
    },
    emits: ['update:postRealStep'],
    methods: {
      setPostRealStep(val) {
        this.$emit('update:postRealStep', val)
      }
    },
    props: {
      넘겨게시물: {
        type: Array,
      },
      postRealStep: {
        type: Number
      },
      넘겨이미지: {
        type: String
      }
    },
  }
</script>
<style>
  
</style>