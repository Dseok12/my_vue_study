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
    <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePost } from "@/api/posts";
import PostForm from "@/components/posts/PostForm.vue";
import AppAlert from "@/components/AppAlert.vue";

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
    // 아래 한줄 코드 설명 : 수정이 완료되면 게시글목록으로 넘어가기
    router.push({ name: "PostDetail", params: { id } });
    vAlert("수정이 완료되었습니다!", "success");
  } catch (err) {
    console.error(err);
    vAlert("네트워크 오류");
  }
};

const goDetailPate = () =>
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
  });

// alert
const showAlert = ref(false);
const alertMsg = ref("");
const alertType = ref("");
const vAlert = (msg, type = "error") => {
  showAlert.value = true;
  alertMsg.value = msg;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped></style>
