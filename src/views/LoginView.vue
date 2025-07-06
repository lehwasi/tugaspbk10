<template>
  <div class="login-container">
    <h2>🔐 Login</h2>
    <input v-model="name" placeholder="Nama Lengkap" class="form-input" />
    <input v-model="email" placeholder="Email" class="form-input" />
    <button @click="handleLogin" class="login-button">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const name = ref('')
const email = ref('')
const user = useUserStore()
const router = useRouter()

function handleLogin() {
  if (!name.value || !email.value) return alert('Lengkapi nama dan email!')
  user.login(name.value, email.value)
  router.push('/profile')
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 60px auto;
  background: #fff8f1;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(78, 52, 46, 0.1);
  text-align: center;
}
h2 {
  margin-bottom: 20px;
  color: #4e342e;
}
.form-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.login-button {
  width: 100%;
  background-color: #8d6e63;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.login-button:hover {
  background-color: #5d4037;
}
</style>
