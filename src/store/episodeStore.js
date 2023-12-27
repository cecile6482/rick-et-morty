import { defineStore } from 'pinia';
import axios from '../axios';

export const useEpisodeStore = defineStore('episode', {
  state: () => ({
    episodes: [],
    loading: false,
    selectedEpisode: null,
  }),

  actions: {
    async fetchEpisodes() {
      this.loading = true;
      try {
        const response = await axios.get('/episode');
        this.episodes = response.data.results;
      } catch (error) {
        console.error('Erreur lors de la récupération des épisodes:', error);
      } finally {
        this.loading = false;
      }
    },

    selectEpisode(episode) {
        this.selectedEpisode = episode;
      },
  },
});



