<template>
  <div class="post">
      <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{게시물.name}}</span>
      </div>
      <div class="post-body" :style="{ backgroundImage: `url(${게시물.postImage})` }"></div>
      <div class="post-content">
        <p>{{ 게시물.likes }} Likes</p>
        <p><strong>{{ 게시물.name }}</strong> {{ 게시물.content }}</p>
        <p class="date">{{ 게시물.date }}</p>
      </div>
  </div>
</template>
<script>
export default {

  props: {
    게시물: {
      type: Object,
      required: true,
    },
  },
  
}
</script>
<style>
  @import "../css/post.css";
</style>