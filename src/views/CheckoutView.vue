<template>
  <div>
    <h1>Checkout</h1>
    <p>Konfirmasi pesanan dan lakukan pembayaran.</p>

    <div v-if="cart.items.length === 0">
      <p>Keranjang kosong. Silakan pilih item terlebih dahulu.</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} - Qty: {{ item.quantity }} - Rp{{ item.price * item.quantity }}
        </li>
      </ul>

      <p><strong>Total: Rp{{ total }}</strong></p>

      <button @click="checkout">Bayar Sekarang</button>
      <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { computed, ref } from 'vue'

const cart = useCartStore()
const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
)

const successMessage = ref('')

async function checkout() {
  try {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: new Date().toLocaleString(),
        items: cart.items,
        total: total.value
      })
    })

    if (!res.ok) throw new Error('Gagal menyimpan pesanan.')

    cart.clearCart()
    successMessage.value = '✅ Pesanan berhasil disimpan!'
  } catch (err) {
    console.error('Checkout error:', err.message)
    successMessage.value = '❌ Gagal melakukan checkout.'
  }
}
</script>
