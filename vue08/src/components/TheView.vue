<template>
  <main>
    <div class="container py-4">
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :is-like="post.isLike"
            @toggle-like="post.isLike = !post.isLike"
            :obj="obj"
          ></AppCard>
          <!--
          <button
            class="btn btn-outline-primary"
            @click="post.isLike = !post.isLike"
          >
            토글
          </button>
          -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
export default {
  components: {
    AppCard,
  },
  setup() {
    const obj = reactive({
      title: '제목2: reactive',
      contents: '내용2: reactive',
    });
    const posts = reactive([
      {
        id: 1,
        title: '제목1: reactive',
        contents: '내용1: reactive',
        isLike: true,
        type: 'news',
        validator: value => {
          return ['news', 'notice'].includes(value);
        },
      },
      {
        id: 2,
        title: '제목2: reactive',
        contents: '내용2: reactive',
        isLike: true,
        type: 'news',
      },
      {
        id: 3,
        title: '제목3: reactive',
        contents: '내용3: reactive',
        isLike: true,
        type: 'news',
      },
      {
        id: 4,
        title: '제목4: reactive',
        contents: '내용4: reactive',
        isLike: true,
        type: 'news',
      },
      {
        id: 5,
        title: '제목5: reactive',
        contents: '내용5: reactive',
        isLike: false,
        type: 'notice',
      },
      {
        id: 6,
        title: '제목6: reactive',
        contents: '내용6: reactive',
        isLike: false,
        type: 'notice',
      },
    ]);
    return { obj, posts };
  },
};
</script>

<!-- 
prop에는 4가지의 속성이 들어갈 수 있다.
1. type : prop의 타입을 지정한다.(String, Number, Boolean, Array, Object, Function, Symbol)
2. required : prop이 필수인지 아닌지 지정한다.
3. default : prop의 기본값을 지정한다.
(속성 값이 비어 있거나 undefined일 경우 기본값이 적용된다. 그리고 객체 또는 배열의 경우에는 팩토리 함수를 사용하여 반환해야 한다.)
4. validator : prop의 유효성을 검사하는 함수를 지정한다. 함수로 정의 할 수 있다.
-->
