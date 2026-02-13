<template>
  <div class="outer-all">
    <NavBar />
    <router-view />
  </div>
  <CtaPart v-if="isHidden" />
  <BottomPart v-if="isHidden" />
</template>

<script setup>
import NavBar from './components/nav/NavBar.vue'
import BottomPart from './components/multiuse/FooterPart.vue'
import CtaPart from './components/multiuse/CtaPart.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHidden = computed(() => {
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
