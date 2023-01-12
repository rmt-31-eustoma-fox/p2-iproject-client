import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
const pinia = createPinia();

app.use(VueSweetalert2);
app.use(vue3GoogleLogin, {
  clientId:
    "368923807549-h23nees0emhivfjto6s6d81oequhgb0c.apps.googleusercontent.com",
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(router);
app.use(pinia);
app.mount("#app");
