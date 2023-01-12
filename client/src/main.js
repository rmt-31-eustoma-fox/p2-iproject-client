import {
    createApp,
    markRaw
} from 'vue'
import {
    createPinia
} from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App)
const pinia = createPinia()
app.use(vue3GoogleLogin, {
    clientId: "543529231122-kai3inif30c3sp1kpshqm7hipai69gd1.apps.googleusercontent.com",
})

pinia.use(({
    store
}) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')