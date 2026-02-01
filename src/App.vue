<template>
  <div class="outer-all">
    <NavBar />
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
    <router-view />
  </div>
  <BottomPart />
</template>

<script setup>
import NavBar from './components/nav/NavBar.vue'
import BottomPart from './components/footer/BottomPart.vue'
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
