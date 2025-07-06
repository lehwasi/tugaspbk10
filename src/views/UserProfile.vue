<template>
  <div class="profile-container">
    <h2>👤 Profil Pengguna</h2>
    <div v-if="user.name && user.email">
      <p><strong>Nama:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="handleLogout" class="logout-button">Logout</button>
    </div>
    <div v-else>
      <p>Anda belum login. Silakan login terlebih dahulu.</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()

function handleLogout() {
  user.logout()
  router.push('/login')
}
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 60px auto;
  background: #fff8f1;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(78, 52, 46, 0.1);
}
h2 {
  color: #4e342e;
  margin-bottom: 20px;
}
p {
  font-size: 16px;
  color: #3e2723;
  margin: 8px 0;
}
.logout-button {
  margin-top: 20px;
  background-color: #a1887f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.logout-button:hover {
  background-color: #6d4c41;
}
</style>
