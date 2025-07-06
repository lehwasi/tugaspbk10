<template>
  <div class="cart-container">
    <h2 class="cart-title">🛒 Keranjang Belanja</h2>

    <div v-if="cart.items.length === 0" class="empty-cart">
      Keranjang kamu masih kosong.
    </div>

    <ul v-else class="cart-list">
      <li v-for="item in cart.items" :key="item.id" class="cart-item">
        <div class="item-info">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-detail">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-qty">Qty: {{ item.quantity }}</p>
            <p class="item-price">Rp{{ item.price * item.quantity }}</p>
          </div>
        </div>
        <button class="hapus-button" @click="removeItem(item.id)">Hapus</button>
      </li>
    </ul>

    <div v-if="cart.items.length > 0" class="total-section">
      <p class="total-text"><strong>Total: Rp{{ totalPrice }}</strong></p>
      <button class="checkout-button" @click="checkout">Checkout</button>
    </div>

    <!-- Gimmick tambahan -->
    <div class="cart-gimmick">
      <p class="food-quote">🍲 “Good food is the foundation of genuine happiness.” 🥢</p>
      <div class="emoji-line">🍛 🍜 🍱 🍙 🍚 🍤 🍡 🍧</div>
      <div class="delivery-info">
        <p>🚚 Estimasi pengantaran: <strong>30 - 45 menit</strong></p>
        <p>📍 Pengiriman dari: <em>Restoran Sabores del Cielo, Marpoyan</em></p>
      </div>
      <p class="thank-you">Terima kasih telah berbelanja bersama kami ❤️</p>
    </div>

    <div v-if="toast.message" :style="toastStyle">{{ toast.message }}</div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function removeItem(id) {
  cart.removeFromCart(id)
}

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const toast = reactive({
  message: '',
  type: 'success'
})

const toastStyle = computed(() => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '12px 20px',
  backgroundColor: toast.type === 'success' ? '#4CAF50' : '#F44336',
  color: '#fff',
  borderRadius: '6px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  zIndex: 9999
}))

function showToast(message, type = 'success') {
  toast.message = message
  toast.type = type
  setTimeout(() => toast.message = '', 3000)
}

async function checkout() {
  const order = {
    id: Date.now(),
    date: new Date().toISOString().slice(0, 10),
    total: totalPrice.value,
    items: [...cart.items]
  }

  try {
    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })

    if (!res.ok) throw new Error('Gagal mengirim pesanan')

    showToast('✅ Pesanan berhasil dikirim!', 'success')
    cart.clearCart()
    setTimeout(() => router.push('/orders'), 1500)
  } catch (err) {
    showToast('❌ Gagal checkout: ' + err.message, 'error')
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fefcf9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(78, 52, 46, 0.1);
}

.cart-title {
  font-size: 26px;
  font-weight: bold;
  color: #4e342e;
  margin-bottom: 20px;
  text-align: center;
}

.empty-cart {
  text-align: center;
  color: #8d6e63;
  font-size: 16px;
  padding: 20px;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  background-color: #fff8f1;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(78, 52, 46, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4e342e;
}

.item-info {
  display: flex;
  gap: 14px;
  align-items: center;
}

.item-image {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #efebe9;
}

.item-detail {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
}

.item-qty, .item-price {
  font-size: 14px;
  color: #6d4c41;
}

.hapus-button {
  background-color: #bcaaa4;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.hapus-button:hover {
  background-color: #8d6e63;
}

.total-section {
  margin-top: 20px;
  text-align: right;
}

.total-text {
  font-size: 18px;
  color: #4e342e;
  margin-bottom: 10px;
}

.checkout-button {
  background-color: #6d4c41;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #4e342e;
}

/* Gimmick section */
.cart-gimmick {
  margin-top: 60px;
  padding: 20px;
  background-color: #fff8f1;
  border-radius: 12px;
  text-align: center;
  color: #5d4037;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.food-quote {
  font-style: italic;
  font-size: 18px;
  margin-bottom: 16px;
  color: #6d4c41;
}

.emoji-line {
  font-size: 20px;
  margin: 10px 0;
}

.delivery-info {
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.5;
}

.thank-you {
  margin-top: 16px;
  font-weight: 600;
  color: #4e342e;
}
</style>
