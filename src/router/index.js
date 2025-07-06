import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user' // ← pastikan ini benar

import HomeView from '../views/HomeView.vue'
import RestaurantList from '../views/RestaurantList.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderHistory from '../views/OrderHistory.vue'
import UserProfile from '../views/UserProfile.vue'
import LoginView from '../views/LoginView.vue'


// Admin Views
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminRestaurant from '../views/admin/AdminRestaurant.vue'
import AdminMenu from '../views/admin/AdminMenu.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  

  // Route yang butuh login
  {
    path: '/restaurants',
    name: 'RestaurantList',
    component: RestaurantList,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
    meta: { requiresAuth: true }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }
  },

  // Admin routes (optional: tambahkan guard admin di masa depan)
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/admin/restaurant',
    name: 'AdminRestaurant',
    component: AdminRestaurant
  },
  {
    path: '/admin/menu',
    name: 'AdminMenu',
    component: AdminMenu
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔒 Global navigation guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && (!userStore.name || !userStore.email)) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
