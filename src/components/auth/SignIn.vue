<template>
  <div class="container">
    <div class="first"><img :src="signin" /></div>
    <div class="second">
      <h2 class="heading">Sign In</h2>
      <div class="input--fields">
        <div class="input-field">
          <label for="email">Email <span>*</span></label> <br />
          <input type="email" placeholder="Your Email" id="email" />
        </div>
        <div class="input-field">
          <label for="pass">Password <span>*</span></label> <br />
          <input type="password" placeholder="Your Password" id="pass" />
        </div>
        <div class="btns">
          <button id="btn--primary" class="btn">Submit</button>
          <router-link to="/signup" id="btn--secondary" class="btn">sign up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import signin from '@/components/assets/images/signin.png'
</script>

<style scoped>
.container {
  background-color: #0f1514;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.input--fields {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 6rem;
}
.first {
  position: relative;
}
.first::before {
  content: '';
  position: absolute;
  top: 0;
  right: 4rem;
  width: 20%;
  height: 100%;
  background: linear-gradient(90deg, rgba(15, 21, 20, 0), rgba(15, 21, 20, 1));
}
.second {
  padding-top: 4rem;
}
</style>
