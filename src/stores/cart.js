import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  },
  actions: {
    addToCart(item) {
      const found = this.items.find(i => i.name === item.name)
      if (found) {
        found.quantity += item.quantity
      } else {
        this.items.push({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image // ✅ Tambahkan image di sini
        })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
