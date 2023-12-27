<script setup>
import { ref } from 'vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const showLogin = ref(true);
const showRegister = ref(false);
</script>

<template>
  <div class="page">
  <div class="container text-center">
    <h1 class="text m-2">Rick & Morty</h1>
    <button class="btn m-2" @click="showLogin = true; showRegister = false">Connexion</button>
    <button class="btn m-2" @click="showLogin = false; showRegister = true">Inscription</button>
    <div v-if="showLogin">
      <Login />
    </div>
    <div v-if="showRegister">
      <Register />
    </div>
  </div>
  </div>  
</template>

<style scoped>
.text {
  color: #d3e364;
  font-family: 'Papyrus', fantasy;
  font-size: 4rem;
  padding-top: 30px;
}

.btn {
  background-color: #d3e364;
  border: none;
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
}

.page {
  background-color: #0b140e;
  min-height: 100vh;
  margin-top: 0;
  padding-top: 0%;
}

</style>