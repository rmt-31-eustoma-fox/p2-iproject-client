import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
const pinia = createPinia();

const app = createApp(App);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "473678009666-jrtmj5ocfcap0dk6cqevlsqbvgveqsd1.apps.googleusercontent.com",
});

app.use(pinia);
app.use(router);

app.mount("#app");
