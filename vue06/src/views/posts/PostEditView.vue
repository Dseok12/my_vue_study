<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPate"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePost } from "@/api/posts";
const route = useRoute();
const router = useRouter();
const id = route.params.id;

/**
 * =========================== 데이터 불러오기 ===========================
 */
const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.error(error);
  }
};

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

fetchPost();

/**
 * =========================== 데이터 불러오기 ===========================
 */

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    router.push({ name: "PostDetail", params: { id } });
  } catch (err) {
    console.error(err);
  }
};

const goDetailPate = () =>
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
  });
</script>

<style lang="scss" scoped></style>
