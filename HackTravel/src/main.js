import { createApp, markRaw } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import vue3GoogleLogin from "vue3-google-login"
import "./assets/index.css"

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.use(vue3GoogleLogin, {
    clientId: '711420443768-2ktcmk8klj1udfseesa56kdo30os0fhi.apps.googleusercontent.com'
})

app.mount("#app");
