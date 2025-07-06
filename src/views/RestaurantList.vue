<template>
  <div class="container">
    <h2 class="judul">🍽️ Menu Restoran Populer</h2>

    <div v-if="loading" class="loading">
      Loading restoran...
    </div>

    <div v-else class="menu-grid">
      <div v-for="resto in restaurants" :key="resto.id" class="card">
        <div class="image-container">
          <img :src="resto.image" :alt="resto.name" class="resto-image" />
        </div>

        <div class="card-body">
          <div>
            <h3 class="resto-title">{{ resto.name }}</h3>
            <p class="resto-desc">{{ resto.description }}</p>
          </div>

          <div>
            <button @click="addToCart(resto)" class="add-button">
              Tambah ke Keranjang
            </button>
            <p v-if="successId === resto.id" class="success-message">
              ✅ Ditambahkan ke keranjang!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer info restoran -->
    <div class="footer">
      <div class="footer-text">
        <p>📍 <strong>Restoran Sabores del Cielo</strong></p>
        <p>Alamat: Jl. Khaharudin No.1.2', Marpoyan</p>
        <p>No. HP: 0822-3961-5571</p>
        <p>Jam Buka: 10.00 - 22.00</p>
        <p class="thanks">Terima kasih telah memesan bersama kami! ❤️</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cart'

// Gambar
import ayamCrispy from '../assets/menus/ayamCrispy.jpg'
import baksoUrat from '../assets/menus/baksoUrat.jpg'
import bubur from '../assets/menus/bubur.jpg'
import esCampur from '../assets/menus/esCampur.jpg'
import martabak from '../assets/menus/martabak.jpg'
import mieAyam from '../assets/menus/mieAyam.jpg'
import nasiGoreng from '../assets/menus/nasiGoreng.jpg'
import pempek from '../assets/menus/pempek.jpg'
import rendang from '../assets/menus/rendang.jpg'
import sateAyam from '../assets/menus/sateAyam.jpg'
import soto from '../assets/menus/soto.jpg'
import gadoGado from '../assets/menus/gadoGado.jpg'

const cart = useCartStore()
const restaurants = ref([])
const loading = ref(true)
const successId = ref(null)

onMounted(() => {
  restaurants.value = [
    { id: 1, name: 'Ayam Crispy', description: 'Ayam goreng renyah dalam kotak.', image: ayamCrispy },
    { id: 2, name: 'Bakso Urat', description: 'Bakso besar dengan daging urat spesial.', image: baksoUrat },
    { id: 3, name: 'Nasi Goreng Spesial', description: 'Nasi goreng dengan topping komplit.', image: nasiGoreng },
    { id: 4, name: 'Sate Ayam Madura', description: 'Sate ayam dengan bumbu kacang gurih.', image: sateAyam },
    { id: 5, name: 'Mie Ayam Ceker', description: 'Mie ayam dengan tambahan ceker empuk.', image: mieAyam },
    { id: 6, name: 'Rendang Padang', description: 'Rendang daging sapi khas Minang.', image: rendang },
    { id: 7, name: 'Gado-Gado Betawi', description: 'Sayur rebus dengan saus kacang.', image: gadoGado },
    { id: 8, name: 'Pempek Palembang', description: 'Ikan olahan dengan kuah cuko.', image: pempek },
    { id: 9, name: 'Soto Lamongan', description: 'Soto khas Jawa Timur dengan koya.', image: soto },
    { id: 10, name: 'Bubur Ayam', description: 'Bubur gurih dengan suwiran ayam.', image: bubur },
    { id: 11, name: 'Es Campur', description: 'Segarnya es campur dengan buah dan sirup.', image: esCampur },
    { id: 12, name: 'Martabak Manis', description: 'Martabak tebal dengan topping keju coklat.', image: martabak }
  ]
  loading.value = false
})

function addToCart(resto) {
  const item = {
    id: Date.now(),
    name: resto.name,
    quantity: 1,
    price: 20000,
    image: resto.image // ⬅️ tambahkan gambar ke cart
  }

  cart.addToCart(item)
  successId.value = resto.id
  setTimeout(() => {
    successId.value = null
  }, 2000)
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fefcf9;
}

.judul {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #4e342e;
  margin-bottom: 30px;
}

.loading {
  text-align: center;
  color: #a1887f;
  font-size: 18px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff8f1;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(78, 52, 46, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 14px rgba(78, 52, 46, 0.2);
}

.image-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: #efebe9;
}

.resto-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover .resto-image {
  transform: scale(1.05);
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.resto-title {
  font-size: 18px;
  font-weight: 600;
  color: #4e342e;
  margin-bottom: 8px;
}

.resto-desc {
  font-size: 14px;
  color: #6d4c41;
  margin-bottom: 12px;
}

.add-button {
  width: 100%;
  background-color: #8d6e63;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #5d4037;
}

.success-message {
  color: #2e7d32;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
}

.footer {
  margin-top: 60px;
  padding: 30px 20px;
  background-color: #fffaf5;
  border-top: 1px solid #d7ccc8;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(78, 52, 46, 0.08);
}

.footer-text {
  font-size: 14px;
  color: #4e342e;
  line-height: 1.7;
}

.footer-text strong {
  font-size: 16px;
  color: #3e2723;
}
</style>
