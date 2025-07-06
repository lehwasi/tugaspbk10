import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useUserStore } from './stores/user' // ← Tambahkan ini
import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

const userStore = useUserStore()
userStore.loadUser() // ← Pastikan user tetap login setelah reload

app.mount('#app')
