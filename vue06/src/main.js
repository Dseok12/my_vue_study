import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");

// console.log("Mode:", import.meta.env.MODE);
// console.log("BASE_URL:", import.meta.env.BASE_URL);
// console.log("PROD:", import.meta.env.PROD);
// console.log("DEV:", import.meta.env.VITE_APP_API_URL);
