import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import VueSpeech from 'vue-speech'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
  clientId: "7169377856-ssln548507enp6ivt43mic6v7svcff19.apps.googleusercontent.com"
})

app.use(pinia)
app.use(router)
app.use(VueSpeech)

app.mount('#app')
