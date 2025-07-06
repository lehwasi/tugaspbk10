# 🍽️ FoodNow – Aplikasi Pemesanan Makanan Online

FoodNow adalah aplikasi restoran berbasis Vue 3 yang memungkinkan pengguna untuk melihat menu, memesan makanan, melihat riwayat pesanan, serta mengelola profil pengguna. Dibuat sebagai proyek studi kasus untuk pemrograman front-end dengan Vue, Pinia, dan json-server.

---

## 🚀 Fitur Utama

### 🔐 Autentikasi (Login)
- Pengguna harus **login (nama & email)** sebelum dapat:
  - Mengakses halaman **/restaurants**, **/cart**, dan **/orders**
  - Melakukan pemesanan
  - Melihat riwayat transaksi
- Jika belum login, pengguna akan diarahkan otomatis ke halaman **Login**.

### 🏠 Halaman Home
- Menampilkan informasi restoran Savory Bites
- Deskripsi brand, monolog naratif, preview menu unggulan
- Tombol "Pesan Sekarang" yang akan **redirect ke Login jika belum login**

### 🍴 Menu Restoran
- Daftar makanan dari berbagai kategori
- Gambar, deskripsi singkat, dan tombol "Tambah ke Keranjang"
- Menggunakan data statis dalam array, tapi bisa dengan `fetch()` dari json-server

### 🛒 Keranjang
- Menampilkan pesanan pengguna
- Jumlah item, total harga, tombol checkout
- Gambar menu disesuaikan dengan item yang dipesan

### 📦 Riwayat Pesanan (Orders)
- Mengambil data dari API (`json-server`) dengan `fetch()`
- Daftar pesanan sebelumnya ditampilkan secara dinamis
- Format tanggal dan total harga disesuaikan

### 👤 Profil Pengguna
- Menampilkan nama dan email pengguna yang login

### 🧪 Unit Testing (Vitest)
- Tersedia pengujian pada store:
  - `user.js`
  - `cart.js`

---

## 🛠️ Teknologi yang Digunakan

- **Vue 3 + Vite**
- **Pinia** untuk manajemen state
- **Vue Router** untuk routing
- **json-server** untuk simulasi API backend
- **Vitest** untuk unit testing
- **CSS murni** dengan tema coklat elegan (tanpa Tailwind)

---

## 📂 Struktur Folder Penting

src/
├── assets/
├── components/
├── router/
│ └── index.js
├── stores/
│ ├── user.js
│ └── cart.js
├── views/
│ ├── HomeView.vue
│ ├── RestaurantList.vue
│ ├── CartView.vue
│ ├── OrderHistory.vue
│ ├── UserProfile.vue
│ └── LoginView.vue
└── App.vue

yaml
Salin
Edit

---

## 🔁 Menjalankan Proyek

### 1. Install dependency
```bash
npm install
2. Jalankan json-server (untuk data orders)
bash
Salin
Edit
npm run json-server
3. Jalankan server development
bash
Salin
Edit
npm run dev
4. Jalankan Unit Test
bash
Salin
Edit
npm run test
✍️ Catatan Tambahan
Fitur redirect otomatis ke login menggunakan router.beforeEach() pada router/index.js

Data login disimpan di Pinia store (user.js)

Gambar menu dikelola langsung melalui import dari folder assets/menus

📚 Penilaian yang Dicakup
Kriteria	Status
✅ Analisis studi kasus	✔️
✅ Daftar fitur sesuai studi kasus	✔️
✅ Routing (struktur & path)	✔️
✅ Konsumsi API (fetch + json-server)	✔️
✅ Penggunaan Pinia	✔️
✅ Unit testing Vitest	✔️
✅ Struktur folder & kerapian	✔️