import { createRouter, createWebHistory } from 'vue-router'

import MainGradeGo3 from '../pages/MainGradeGo3.vue'
import MainGradeGo2 from '../pages/MainGradeGo2.vue'
import MainGradeGo1 from '../pages/MainGradeGo1.vue'
import MainGradeUni from '../pages/MainGradeUni.vue'
import SignupPage from '../pages/SignupPage.vue'

const routes = [
  { path: '/', component: MainGradeGo3 },
  { path: '/grade2', component: MainGradeGo2 },
  { path: '/grade1', component: MainGradeGo1 },
  { path: '/uni', component: MainGradeUni },
  { path: '/signup', component: SignupPage },

  // ✅ 없는 주소로 가도 깨지지 않게(선택)
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(), // ✅ 웹에서는 이게 정석
  routes,
})
