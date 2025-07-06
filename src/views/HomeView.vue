<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="brand-title">Selamat Datang di <span>Sabores del Cielo</span>!</h1>
      <p class="tagline">Pengalaman kuliner elegan yang memukau selera sejak 2010.</p>
    </section>

    <!-- Deskripsi Restoran -->
    <section class="section">
      <h2>🍽️ Deskripsi Restoran "Sabores del Cielo"</h2>
      <p>
        Selamat datang di <strong>Sabores del Cielo</strong>, surga kuliner yang memadukan cita rasa autentik, suasana elegan,
        dan pelayanan hangat. Terletak di jantung kota, kami menawarkan pengalaman bersantap tak terlupakan dengan bahan pilihan terbaik.
      </p>
      <p>
        Sejak 2010, kami menjadi destinasi utama bagi pecinta makanan yang mencari keseimbangan tradisi dan inovasi.
        Menu kami mencakup steak juicy, pasta buatan tangan, hingga dessert menggoda.
      </p>
      <p>
        Interior kami menghadirkan nuansa industrial-chic dengan pencahayaan hangat, musik jazz, dan atmosfer yang sempurna untuk segala suasana.
      </p>
    </section>

    <!-- Monolog / Virtual Tour -->
    <section class="section">
      <h2>🎵 Sebuah Malam di Sabores del Cielo</h2>
      <blockquote>
        <p>
          "Bayangkan… langit senja perlahan berubah menjadi jingga. Lampu-lampu kota mulai menyala, dan Anda melangkah ke
          tempat yang menawarkan kehangatan—Savory Bites."
        </p>
        <p>
          Aroma rempah dan daging panggang menyambut. Host yang ramah, interior kayu yang hangat, dan segelas wine menyempurnakan malam Anda.
        </p>
        <p>
          Chef kami adalah komposer rasa. Hidangan disajikan layaknya simfoni kuliner, dari appetizer, main course hingga dessert.
        </p>
        <p>
          Mungkin ini anniversary Anda, promosi kerja, atau sekadar malam me-time. Di sini, waktu terasa lebih lambat. Setiap momen terasa berharga.
        </p>
      </blockquote>
    </section>

    <!-- Menu Unggulan -->
    <section class="section">
      <h2>⭐ Menu Unggulan</h2>
      <div class="menu-preview">
        <div class="menu-card" v-for="menu in menus" :key="menu.name">
          <img :src="menu.image" :alt="menu.name" />
          <h3>{{ menu.name }}</h3>
          <p>{{ menu.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <p>📍 Kunjungi kami di Jl. Kharaudin No.1.2' atau pesan meja melalui <a href="#">www.SaboresdelCielo.com</a></p>
      <button class="order-button" @click="goToOrder">Pesan Sekarang 🍽️</button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import ayamCrispy from '../assets/menus/ayamCrispy.jpg'
import rendang from '../assets/menus/rendang.jpg'
import esCampur from '../assets/menus/esCampur.jpg'

const router = useRouter()
const user = useUserStore()

const menus = [
  { name: 'Ayam Crispy', image: ayamCrispy, description: 'Ayam goreng renyah dengan bumbu khas.' },
  { name: 'Rendang Padang', image: rendang, description: 'Rendang daging sapi lembut nan gurih.' },
  { name: 'Es Campur Segar', image: esCampur, description: 'Segarnya es campur buah dan sirup.' }
]

function goToOrder() {
  if (user.name && user.email) {
    router.push('/restaurants')
  } else {
    router.push('/login')
  }
}
</script>

<style scoped>
.home-container {
  background: linear-gradient(to bottom, #fffaf5, #fefcf9);
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #4e342e;
  line-height: 1.7;
}

.brand-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.brand-title span {
  color: #8d6e63;
}

.tagline {
  text-align: center;
  font-size: 18px;
  margin-bottom: 60px;
  color: #6d4c41;
}

.section {
  max-width: 960px;
  margin: 0 auto 60px;
}

.section h2 {
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid #d7ccc8;
  padding-bottom: 8px;
  margin-bottom: 16px;
  color: #5d4037;
}

.section p {
  margin-bottom: 14px;
}

blockquote {
  font-style: italic;
  background-color: #f9f3ef;
  padding: 20px;
  border-left: 4px solid #a1887f;
  border-radius: 8px;
  color: #5d4037;
}

.menu-preview {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.menu-card {
  background-color: #fffefc;
  padding: 16px;
  width: 240px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  text-align: center;
  transition: transform 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-5px);
}

.menu-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.menu-card h3 {
  font-size: 18px;
  color: #6d4c41;
  margin-bottom: 6px;
}

.menu-card p {
  font-size: 14px;
  color: #795548;
}

.cta {
  text-align: center;
  margin-top: 40px;
}

.cta a {
  color: #8d6e63;
  text-decoration: underline;
}

.order-button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #8d6e63;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.order-button:hover {
  background-color: #5d4037;
}
</style>
