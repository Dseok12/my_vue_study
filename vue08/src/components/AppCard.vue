<template>
  <div class="card">
    <div class="card-body">
      <!--{{ $props }} -->
      <!-- type : news, notice -->
      <span class="badge text-bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <a href="#" :class="isLikeClass" @click="toggleLike">좋아요</a>
      <!--
      <a v-if="isLike" href="#" class="btn btn-danger mt-2">좋아요</a>
      <a v-else href="#" class="btn btn-outline-danger mt-2">좋아요</a>
      <hr />
      {{ obj }}
      -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'news',
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  // 2. emit을 사용하여 부모 컴포넌트에게 이벤트를 전달한다.
  emits: ['toggleLike'],
  setup(props, context) {
    // console.log('props.title: ', props.title);
    const isLikeClass = computed(() =>
      props.isLike ? 'btn btn-danger mt-2' : 'btn btn-outline-danger mt-2',
    );
    const typeName = computed(() => {
      return props.type === 'news' ? '뉴스' : '공지사항';
    });
    const toggleLike = () => {
      // props.isLike = !props.isLike;
      // 1. emit을 사용하여 부모 컴포넌트에게 이벤트를 전달한다.
      context.emit('toggleLike', !props.isLike);
    };
    return { isLikeClass, typeName, toggleLike };
  },
};
</script>

<style lang="scss" scoped></style>
