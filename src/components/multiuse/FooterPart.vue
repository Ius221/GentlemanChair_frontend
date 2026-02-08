<template>
  <div class="outer-div">
    <div class="width-div">
      <div class="first flex">
        <p>Gentleman's Touch</p>
        <div class="logos">
          <img :src="insta" alt="" />
          <img :src="wtsap" alt="" />
          <img :src="fb" alt="" />
        </div>
      </div>
      <div class="second flex">
        <h4>+91 123456789</h4>
        <p class="add">27B, Sarat Bose Road, Near Kalighat Metro Station, Kolkata – 700026</p>
        <p class="mail">contact@gentlemanstouch.com</p>
      </div>
      <div class="third flex">
        <h4>subscribe us</h4>
        <p>Receive exclusive updates and special deals from Gentleman’s Touch.</p>
        <div class="box">
          <input type="email" required v-model="email" placeholder="Your email address" />
          <button type="submit" @click="subscribe">subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div class="copy">Gentlemans chair &copy; 2021 | all right reserved</div>
</template>

<script setup>
import insta from '@/components/assets/images/insta.png'
import wtsap from '@/components/assets/images/wtsap.png'
import fb from '@/components/assets/images/fb.png'
import { ref } from 'vue'

let email = ref(null)

const subscribe = () => {
  alert('Subscribed Successfully ' + email.value)
  email.value = null
}
</script>

<style scoped>
.outer-div {
  padding: 5rem 0;
  padding-bottom: 10rem;
  border-bottom: 1px solid #aaa4;
  border-top: 1px solid #aaa4;
}
.width-div {
  margin: 0 auto;
  max-width: 144rem;
  padding: 0 7.5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;
}
.first {
  font-family: 'Hurricane', cursive;
  color: #ccc;
  grid-column: 1/4;
}
.second {
  grid-column: 4/8;
}
.third {
  grid-column: 8/-1;
}
.flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* FIRST PART */
.first p {
  font-size: 3.8rem !important;
}
.logos {
  display: flex;
  gap: 18px;
}
img {
  width: 35px;
  opacity: 0.7;
  transition: all 0.3s;
  cursor: pointer;
}
img:hover {
  opacity: 0.9;
}

/* MIDDLE PART */
h4 {
  text-transform: uppercase;
  font-size: 3.6rem;
  font-weight: 500;
  color: #ccc;
  letter-spacing: 2px;
}
p {
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 2px;
}
.add {
  text-transform: capitalize;
}
.mail {
  text-decoration: underline 1px;
  text-underline-offset: 4px;
}

/* LAST PART */
.box {
  display: flex;
}
/* Email Box */
input {
  background-color: transparent;
  border: 3px solid #cccc;
  border-right: none;
  height: 60px;
  width: 350px;
  padding-left: 20px;
  color: #cccc;
  font-family: inherit;
  letter-spacing: 1px;
  font-size: 1.8rem;
}
input:focus {
  outline: none;
}
button {
  height: 60px;
  border: 3px;
  width: 13rem;
  color: #cccc;
  background-color: rgba(173, 28, 24, 0.8);
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: inherit;
  transition: all 0.3s;
  cursor: pointer;
  letter-spacing: 1.5px;
}
button:hover {
  background-color: rgb(173, 28, 24);
  color: #ccc;
}

/* BOTTOM PART */
.copy {
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 1rem 0;
  color: rgba(204, 204, 204, 0.4);
  border-bottom: 1px solid #aaa4;
}
</style>
