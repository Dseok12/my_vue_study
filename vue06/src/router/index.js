import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PostCreateView from "@/views/posts/PostCreateView.vue";
import PostEditView from "@/views/posts/PostEditView.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import PostListView from "@/views/posts/PostListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NestedView from "@/views/nested/NestedView.vue";
import NestedOenView from "@/views/nested/NestedOneView.vue";
import NestedTwoView from "@/views/nested/NestedTwoView.vue";
import NestedHomeView from "@/views/nested/NestedHomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostListView,
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreateView,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetailView,
    props: true,
    // props: (route) => ({ id: parseInt(route.params.id) }),
  },
  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostEditView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/nested",
    name: "Nested",
    component: NestedView,
    // 중첩된 라우터 설정
    // 페이지 안에 페이지 같은 느낌, 탭으로도 사용될 수 있겠다. 직링크 연결하는 탭.
    children: [
      {
        path: "",
        name: "NestedHome",
        component: NestedHomeView,
      },
      {
        path: "one",
        name: "NestedOne",
        component: NestedOenView,
      },
      {
        path: "two",
        name: "NestedTwo",
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"), // SEO에 영향을 미치지 않음. 하지만 배포할 때 다른 설정을 해줘야하며, 서버 환경에 맞게 설정을 하여 배포해야함.
  // history: createWebHashHistory(), SEO에 나쁜 영향을 미침. 하나의 index.html파일만 건내주기 때문에 구글이나 네이버에서 웹사이트를 수집 할 수 없음.
  routes,
});

export default router;
