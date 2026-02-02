<template>
  <div class="outer-all">
    <NavBar />
    <router-view />
  </div>
  <BottomPart v-if="showBottomPart" />
</template>

<script setup>
import NavBar from './components/nav/NavBar.vue'
import BottomPart from './components/footer/BottomPart.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showBottomPart = computed(() => {
  if (route.path == '/login') return false

  return true
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  height: 100%;
  width: 100%;
  background-color: #182226;
  font-family: 'Oswald', sans-serif;
  color: #cccc;
}
</style>

<style scoped>
.outer-all {
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 7.5rem;
}
</style>
