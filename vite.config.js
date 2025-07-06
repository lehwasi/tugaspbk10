import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/restaurants': 'http://localhost:3000',
      '/orders': 'http://localhost:3000'
    }
  }
})
