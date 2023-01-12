import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import VuePlyr from '@hulkapps/vue-plyr'
import '@hulkapps/vue-plyr/dist/vue-plyr.css'

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from 'vue3-google-login'

// import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(VuePlyr, {
    plyr: {
        ratio:"4:3"
    }
})

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
  clientId: '115930394480-rdk2rmqutc9gb7k88pdahpc5efhprhi6.apps.googleusercontent.com'
})


app.use(pinia);
app.use(router);

app.mount("#app");
