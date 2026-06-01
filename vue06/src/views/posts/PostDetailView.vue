<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>

      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
    <!--<p>params : {{ $route.params }}</p>
    <p>query : {{ $route.query }}</p>
    <p>hash : {{ $route.hash }}</p>
    /posts/wer?set=setting#hash-->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getPostById } from "@/api/posts";
import { defineProps } from "vue";
import { deletePost } from "@/api/posts";
import { ref, watch } from "vue";

const props = defineProps({
  id: String,
});
const router = useRouter();
/**
 * ref
 * 장점. 객체 할당 가능, 일관성을 유지 할 수 있다. 페이지 컴포넌트에서 주로 사용.
 * 단점. post.value.title, post.value.content
 *
 * reactive
 * 징점. post.title, post.content
 * 단점. 객체 할당 불가능
 */
const post = ref({});
/**
 * =========================== 데이터 등록 ===========================
 */
const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

// 수정: props.id가 변경될 때마다 fetchPost를 호출하도록 변경
watch(
  () => props.id,
  (newId) => {
    if (newId) {
      fetchPost();
    }
  },
  { immediate: true },
); // immediate: true를 주면 컴포넌트 로드 시 즉시 실행
/**
 * =========================== 데이터 등록 ===========================
 */
const remove = async () => {
  try {
    if (confirm("정말 삭제하시겠습니까?")) {
      await deletePost(props.id);
      router.push({ name: "PostList" });
    }
    /*
    안티패턴 예시
    if (confirm("정말 삭제하시겠습니까?") === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: "PostList" });
    */
  } catch (err) {
    console.error(err);
  }
};
const goListPage = () => router.push({ name: "PostList" });
const goEditPage = () =>
  router.push({ name: "PostEdit", params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
