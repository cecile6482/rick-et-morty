<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';


const username = ref('');
const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const register = () => {
  console.log('Registration:', username.value, email.value, password.value);
  try {
    authStore.register(username.value, email.value, password.value);
    
    // Réinitialiser les champs
    username.value = '';
    email.value = '';
    password.value = '';
    
    // Redirection après inscription réussie
    router.push('/');
    
  } catch (error) {
    alert(error.message);
  }
}; 
</script>

<template>
  <div class="container">
    <h2 class="text">Inscription</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur:</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn">S'inscrire</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10%;
  border: 1px solid #d3e364;
  border-radius: 10px;
  padding: 20px;
  background-color: #d3e364;
  width: 40vw;
  height: 60vh;
}

.text {
  color: #0b140e;
  font-family: 'Papyrus', fantasy;
}
.btn {
  background-color: #0b140e;
  border-color: #2c876f;
  color: #adbdbd;
  font-family: 'Papyrus', fantasy;
  margin-top: 50px;
}

.mb-3 {
  color: #0b140e;
  font-family: 'Papyrus', fantasy; 
}

.mb-3 input {
  background-color: whitesmoke; 
  border: none
}
</style>