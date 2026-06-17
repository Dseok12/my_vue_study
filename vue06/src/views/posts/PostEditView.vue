<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="edit"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPate"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePost } from "@/api/posts";
import PostForm from "@/components/posts/PostForm.vue";

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
