<template>
  <div class="nav-container">
    <p class="name">Gentleman's Chair</p>
    <div class="parent">
      <router-link to="/">Home</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/barbers">Barbers</router-link>
      <router-link to="/about">About us</router-link>
      <router-link to="/signup" v-if="isSignin" class="auth">Signup</router-link>
      <router-link to="/signin" v-else class="auth">Signin</router-link>
      <!-- <router-link to="/profile" class="profile--btn" v-else> Profile </router-link> -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Computed properties are reactive and more performant
const isSignin = computed(() => {
  return route.path === '/signin'
})
</script>

<style scoped>
.nav-container {
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  font-family: 'Pirata One', system-ui;
  color: #ccc;
  font-size: 3.6rem;
}

.parent {
  display: flex;
  align-items: center;
  gap: 4rem;
}
a {
  color: #6b7074;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: lighter;
  letter-spacing: 2px;
}
a:hover {
  color: #bbbb;
  /* text-decoration: underline; */
}
.active {
  font-weight: normal;
  color: #bbb !important;
}
.profile--btn {
  border: 1px solid #ad1c18;
  width: 10rem;
  padding: 4px 0;
  text-align: center;
  border-radius: 1.2rem;
  transition: all 0.3s;
  font-weight: lighter !important;
}

.profile--btn:hover {
  background-color: rgba(173, 28, 24, 0.5);
  color: #ccc;
}
.profile--btn.active {
  background-color: rgba(173, 28, 24, 0.5);
  color: #ccc;
}
/* .auth {
  color: #f00;
} */
</style>
