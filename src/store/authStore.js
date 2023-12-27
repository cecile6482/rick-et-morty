import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Charger l'utilisateur depuis le localStorage au démarrage
  }),
  actions: {
    register(username, email, password) {
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
        if (!emailRegex.test(email)) {
          throw new Error('Email non valide');
        }
        if (!passwordRegex.test(password)) {
          throw new Error('Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule et un chiffre');
        }
      
      // Enregistre les données dans le localStorage
      localStorage.setItem('user', JSON.stringify({ username, email, password }));
      this.user = { username, email }; // Mettre à jour l'état de l'utilisateur
    },
    login(email, password) {
      // Récupérer l'utilisateur depuis le localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        this.user = { email }; // Utilisateur connecté
      } else {
        throw new Error('Identifiants incorrects');
      }
    },
    logout() {
      localStorage.removeItem('user'); // Supprimer l'utilisateur du localStorage
      this.user = null; // Réinitialiser l'état de l'utilisateur
    },
  },
});
