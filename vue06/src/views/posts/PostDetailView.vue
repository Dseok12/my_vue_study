<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
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
        <button class="btn btn-outline-danger">삭제</button>
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
import { ref } from "vue";

const props = defineProps({
  id: Number,
});
const router = useRouter();
/**
 * ref
 * 장점. 객체 할당 가능, 일관성을 유지 할 수 있다. 페이지 컴포넌트에서 주로 사용.
 * 단점. form.value.title, form.value.content
 *
 * reactive
 * 징점. form.title, form.content
 * 단점. 객체 할당 불가능
 */
const form = ref({});

const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};

fetchPost();

const goListPage = () => router.push({ name: "PostList" });
const goEditPage = () =>
  router.push({ name: "PostEdit", params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
