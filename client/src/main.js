import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(vue3GoogleLogin, {
    clientId: '1059151060191-4p0u17sjnvdt6i194hfr34kab90vsrf4.apps.googleusercontent.com'
  })

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
