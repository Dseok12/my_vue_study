// src/main.js
import { createApp } from 'vue';
import App from './App.vue';

import '@css/basic/reset.css';
import { router } from './routers/router';

// Swiper 플러그인 (전역 관리)
import SwiperPlugin from './plugins/swiper';

// 전역 rwdImg 로드
import './plugins/rwdImageMaps.min.js';

const app = createApp(App);

app.use(router);
app.use(SwiperPlugin);

app.mount('#app');
