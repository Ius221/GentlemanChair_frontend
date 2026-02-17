<template>
  <SignIn v-if="route.path == '/signin'" />
  <SignUp v-else />
</template>

<script setup>
import SignIn from '@/components/auth/SignIn.vue'
import SignUp from '@/components/auth/SignUp.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style>
.heading {
  color: #ccc;
  font-size: 6.4rem;
  font-weight: 450;
  text-transform: uppercase;
}
label {
  font-size: 2.4rem;
  text-transform: uppercase;
  color: #cccc;
}
label span {
  color: red;
}
input {
  font-family: inherit;
  text-transform: capitalize;
  height: 6rem;
  width: 85%;
  border: 1px solid #ccc;
  color: #aaa;
  border-right: 0;
  border-top: 0;
  background-color: transparent;
  padding: 3rem;
  font-size: 2.4rem;
  letter-spacing: 2px;
  letter-spacing: 1.3px;
}
.input-field {
  display: flex;
  flex-direction: column;
}
.btns {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.btn {
  font-family: inherit;
  text-transform: uppercase;
  padding: 1.8rem 3.2rem !important;
  font-size: 2.4rem;
  letter-spacing: 2px;
  border-radius: 2rem;
  cursor: pointer;
  border: none;
  font-weight: 600;
}
input:focus {
  outline: none;
}
#btn--primary {
  background-color: #ccc;
  color: #0f1514;
  transition: all 0.3s ease;
}
#btn--primary:hover {
  box-shadow: 0px 0px 12px 2px #ccc;
}
#btn--secondary {
  background-color: transparent;
  border: 1px solid #aaaa;
  color: #aaaa;
  transition: all 0.3s ease;
}
#btn--secondary:hover {
  border: 1px solid #ccc;
  /* background-color: #ccc ; */
  color: #ccc;
}
</style>
