import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // ⬅️ Import router
import './assets/main.css'      // ⬅️ Import CSS global (sesuaikan path jika beda)

createApp(App)
  .use(router)  // Pasang router
  .mount('#app')
