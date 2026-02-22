<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab"
      :class="{ active: activeTab === index }"
      @click="activeTab = index"
    >
      {{ tab }}
    </div>
  </div>

  <div class="content">
    <!-- Left Side -->
    <div class="left">
      <div class="service-item" v-for="([name, price], index) in filteredServices" :key="index">
        <span>{{ name }}</span>
        <span class="dots"></span>
        <span>₹{{ price }}</span>
      </div>

      <button class="btn">BOOK NOW</button>
    </div>
    <!-- center -->
     <div class="center"></div>
    <!-- Right Side -->
    <div class="right">
      <img src="@/components/assets/images/berber-services.jpg" alt="Grooming Kit" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const tabs = ['HAIR SERVICES', 'BEARD CARE', 'SKIN CARE', 'RELAXATION']

const activeTab = ref(0) // use index

const services = ref([])

onMounted(async () => {
  const res = await fetch('/services.json')
  services.value = await res.json()
})

const filteredServices = computed(() => {
  if (!services.value.length) return []
  return Object.entries(services.value[activeTab.value])
})
</script>

<style scoped>
* {
  user-select: none;
}
/* Tabs */
.tabs {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  user-select: none;
}

.tab {
  padding: 15px 20px;
  font-size: 24px;
  letter-spacing: 1px;
  color: rgba(204, 204, 204, 0.8);
  width: 25%;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  font-family: Oswald, sans-serif;
}

.tab.active {
  border-bottom: 4px solid rgba(170, 170, 170, 0.8);
}

/* Layout */
.content {
  width: calc(100% + 16rem);
  display: flex;
  margin-left: -12rem;
  padding: 0 7.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(5, 9, 5, 0.7);
  height: 426px;
}

/* Left Section */
.left {
  width: 50%;
  margin-top: 5.2rem;
  margin-left: 5rem;
}

.service-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  color: rgba(170, 167, 163, 1);
  font-family: Oswald,sans-serif;
}

.service-item span:first-child {
  min-width: 120px;
}

.dots {
  flex: 1;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
  margin: 0 10px;
}

.btn {
  margin-top: 3.5rem;
  padding: 10px 20px;
  background: rgba(173, 28, 24, 0.9);
  border: none;
  color:rgba(204, 204, 204, 0.7);
;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  font-family: Oswald,sans-serif;
}

.btn:hover {
  background: #a61e1e;
}

/* center */

.center {
    width: 80px;
    height: 100%;
    background: linear-gradient(270deg, rgba(11, 17, 15, 0) 0%, #0B110F 100%);
    position: relative;
    left: 19.5rem;
}

/* Right Section */
.right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-right: -7.5rem;
}

.right img {
  width: 100%;
  height: 100%;
  margin-right: -15.5rem;
  object-fit: cover;
}
</style>
