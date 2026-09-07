import { createApp } from 'vue'
import './_Master.scss';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import router from './router.js';

createApp(App).use(router).mount('#app')
