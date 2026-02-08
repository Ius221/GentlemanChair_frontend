<template>
  <div class="outer-div">
    <div class="inner-div">
      <h2 style="font-weight: 500">time for a better look</h2>
      <p style="color: #c0c0c077">
        Choose your time, sit comfortably, and get professional grooming done right
      </p>
      <router-link to="#" class="btn">book now</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  width: 100%;
}
.outer-div {
  width: 100%;
  aspect-ratio: 3;
  background-image: url('@/components/assets/images/cta.png');
  background-size: cover;
  background-position: center;
  position: relative;
}
.inner-div {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translateY(-50%);
}
</style>
