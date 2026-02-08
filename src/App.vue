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
import BottomPart from './components/multiuse/FooterPart.vue'
import CtaPart from './components/multiuse/CtaPart.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showBottomPart = computed(() => {
  if (route.path == '/login') return false

  return true
})
</script>

<style scoped>
.outer-all {
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 7.5rem;
}
</style>
