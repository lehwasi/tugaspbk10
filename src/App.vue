<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/restaurants">Restaurants</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>
