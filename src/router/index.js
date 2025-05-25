import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RestaurantList from '../views/RestaurantList.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrderHistory from '../views/OrderHistory.vue'
import UserProfile from '../views/UserProfile.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

// Admin Views
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminRestaurant from '../views/admin/AdminRestaurant.vue'
import AdminMenu from '../views/admin/AdminMenu.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/restaurants', name: 'RestaurantList', component: RestaurantList },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  { path: '/orders', name: 'OrderHistory', component: OrderHistory },
  { path: '/profile', name: 'UserProfile', component: UserProfile },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },

  // Admin routes
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin/restaurant', name: 'AdminRestaurant', component: AdminRestaurant },
  { path: '/admin/menu', name: 'AdminMenu', component: AdminMenu },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
