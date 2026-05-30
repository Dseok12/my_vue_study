<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="제목 검색"
            v-model="params.title_like"
          />
        </div>
        <div class="col-2">
          <select class="form-select" v-model="params._limit">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
        <div class="col-2">
          <select class="form-select" v-model="params._sort">
            <option value="createdAt">최신순</option>
            <option value="title">제목순</option>
          </select>
        </div>
        <div class="col-2">
          <select class="form-select" v-model="params._order">
            <option value="desc">내림차순</option>
            <option value="asc">오름차순</option>
          </select>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page < 1) }">
          <a
            class="page-link"
            href="#"
            @click.prevent="params._page--"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" @click.prevent="params._page = page" href="#">
            {{ page }}
          </a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="params._page++"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-5" />
    <AppCard>
      <PostDetailView :id="2"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import AppCard from "@/components/AppCard.vue";
import { getPosts } from "@/api/posts";
import { ref, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _page: 1,
  _limit: 3,
  title_like: "",
});
// pagination 관련 데이터
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers["x-total-count"];
  } catch (err) {
    console.error(err);
  }

  // const res = getPosts();
  // console.log("response: ", res);
  // posts.value = getPosts();
  // getPosts()
  //   .then((res) => {
  //     console.log("res: ", res);
  //   })
  //   .catch((err) => {
  //     console.log("err: ", err);
  //   });
};

// fetchPosts();

watchEffect(fetchPosts);

const goPage = (id) => {
  //router.push(`/posts/${id}`);
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
    /*
    query: {
      set: `setting${id}`,
    },
    hash: `#hash${id}`,
    */
  });
};
</script>

<style lang="scss" scoped></style>
