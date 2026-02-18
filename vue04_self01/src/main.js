// src/main.js

import { createApp } from 'vue'
import App from './App.vue'

import '@css/basic/reset.css'

import { router } from './routers/router'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/css'

const app = createApp(App)

// 🔹 전역 컴포넌트 등록
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

// 🔹 플러그인 등록
app.use(router)

// 🔹 마운트
app.mount('#app')
