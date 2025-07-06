import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: ''
  }),
  actions: {
    login(name, email) {
      this.name = name
      this.email = email
      localStorage.setItem('user', JSON.stringify({ name, email })) // simpan ke localStorage
    },
    logout() {
      this.name = ''
      this.email = ''
      localStorage.removeItem('user') // hapus dari localStorage
    },
    loadUser() {
      const saved = localStorage.getItem('user')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.name = parsed.name
        this.email = parsed.email
      }
    }
  }
})
