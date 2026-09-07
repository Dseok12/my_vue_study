<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ 또넘겨게시물.name }}</span>
    </div>
    <div class="post-body" :style="{backgroundImage : `url(${또넘겨게시물.postImage})`}"></div>
    <div class="post-content">
      <p>{{ 또넘겨게시물.likes }} Likes</p>
      <p><strong>{{ 또넘겨게시물.name }}</strong> {{ 또넘겨게시물.content }}</p>
      <p class="date">{{ 또넘겨게시물.date }}</p>
    </div>
  </div> 
</template>
<script>
export default {
  props: {
    또넘겨게시물: {
      type: Object,
    }
  },
  
}
</script>
<style>
  @import '../css/Post.css';
</style>