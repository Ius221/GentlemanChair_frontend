<template>
  <div class="outer-all">
    <NavBar />
    <router-view />
  </div>
  <CtaPart />
  <BottomPart v-if="showBottomPart" />
</template>

<script setup>
import NavBar from './components/nav/NavBar.vue'
import BottomPart from './components/multiuse/BottomPart.vue'
import CtaPart from './components/multiuse/CtaPart.vue'
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
  overflow-x: hidden;
  /* overflow-y: hidden; */
}
</style>
<style>
h2 {
  font-size: 3.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
}
p {
  font-size: 2.4rem;
  color: #cccc;
  letter-spacing: 1px;
}
.btn {
  width: fit-content;
  padding: 1rem 2rem;
  color: #cccc;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-top: 2rem;
  cursor: pointer;
  background-color: rgba(173, 28, 24, 0.9);
  transition: all 0.3s;
}
.btn:hover {
  background-color: rgb(173, 28, 24);
  color: #ccc;
}
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
</style>

<style scoped>
.outer-all {
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 7.5rem;
}
</style>
