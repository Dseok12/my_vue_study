import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import './css/base/reset.css';
import './css/common/common.css';
import App from './App.vue';
/* 컴포넌트 전역등록 */
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
