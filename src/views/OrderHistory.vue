<template>
  <div class="orders-container">
    <h2 class="orders-title">📜 Riwayat Pemesanan</h2>

    <div v-if="loading" class="loading">Memuat data riwayat...</div>

    <div v-else-if="orders.length > 0" class="orders-list">
      <div v-for="order in orders" :key="order.id" class="order-card">
        <h3 class="order-number">Order #{{ order.id }}</h3>
        <p><strong>Tanggal:</strong> {{ order.date }}</p>
        <p><strong>Total:</strong> Rp {{ order.total }}</p>

        <details class="order-details">
          <summary>🧾 Detail Pesanan</summary>
          <ul>
            <li v-for="item in order.items" :key="item.name">
              {{ item.name }} x{{ item.quantity }} (Rp {{ item.price * item.quantity }})
            </li>
          </ul>
        </details>
      </div>
    </div>

    <p v-else class="no-orders">📭 Belum ada riwayat pemesanan.</p>

    <footer class="footer-info">
      <h3>📞 Restoran Sabores del Cielo</h3>
      <p>Alamat: Jl. Khaharudin No.1.2', Marpoyan</p>
      <p>Telp: 0822-3961-5571</p>
      <p>Jam Buka: 10.00 - 22.00</p>
      <p class="thankyou">Terima kasih telah memesan bersama kami! ❤️</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const orders = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/orders')
    if (!res.ok) throw new Error('Gagal mengambil data orders')
    orders.value = await res.json()
    console.log('📦 Orders berhasil dimuat:', orders.value)
  } catch (error) {
    console.error('❌ Gagal memuat orders:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.orders-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff8f1;
  color: #4e342e;
}

.orders-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #6d4c41;
}

.loading,
.no-orders {
  text-align: center;
  font-size: 16px;
  color: #a1887f;
  padding: 20px;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(78, 52, 46, 0.1);
  border-left: 6px solid #8d6e63;
  transition: transform 0.2s ease;
}
.order-card:hover {
  transform: translateY(-2px);
}

.order-number {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #5d4037;
}

.order-details summary {
  cursor: pointer;
  font-weight: bold;
  color: #5d4037;
  margin-top: 10px;
}

.order-details ul {
  margin-top: 8px;
  padding-left: 20px;
  list-style: disc;
  color: #6d4c41;
  font-size: 14px;
}

.footer-info {
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  background-color: #fef5ef;
  border-top: 1px solid #d7ccc8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.footer-info h3 {
  margin-bottom: 10px;
  font-weight: bold;
}

.footer-info p {
  margin: 4px 0;
  font-size: 14px;
  color: #4e342e;
}

.thankyou {
  margin-top: 10px;
  font-style: italic;
  color: #a1887f;
}
</style>
