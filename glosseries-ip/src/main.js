import { createApp, markRaw } from "vue";
// import Vue from 'vue';
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";
// import Paginate from "vuejs-paginate-next";
import App from "./App.vue";
import router from "./router";
import "vue-toast-notification/dist/theme-sugar.css";

import "./assets/main.css";

const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId:
    "5826819359-ouhcvinsfhsa0qhfe0bihk91ap4q6fhe.apps.googleusercontent.com",
});

const pinia = createPinia();

app.use(pinia);
app.use(router);



pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
