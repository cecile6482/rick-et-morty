import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharactersView from '../views/CharactersView.vue';
import EpisodesView from '../views/EpisodesView.vue';
const routes = [
  { path: '/', component: HomeView },
  { path: '/characters', component: CharactersView },
  { path: '/episodes', component: EpisodesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
