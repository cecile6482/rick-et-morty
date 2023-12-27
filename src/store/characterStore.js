import axios from '../axios'; 
import { defineStore } from 'pinia';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [],
    loading: false,
    currentPage: 1,
    totalPages: 0,
    searchQuery: '', 
    statusFilter: '',
    genderFilter: '',
    speciesFilter: '',
    typeFilter: '',
    selectedCharacter: null,
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
      this.fetchCharacters();
    },

    setStatusFilter(status) {
      this.statusFilter = status;
      this.fetchCharacters();
    },

    setGenderFilter(gender) {
      this.genderFilter = gender;
      this.fetchCharacters();
    },

    setSpeciesFilter(species) {
      this.speciesFilter = species;
      this.fetchCharacters();
    },

    setTypeFilter(type) {
      this.typeFilter = type;
      this.fetchCharacters();
    },

    clearFilters() {
      this.searchQuery = '';
      this.statusFilter = '';
      this.genderFilter = '';
      this.speciesFilter = '';
      this.typeFilter = '';
      this.fetchCharacters();
    },

    async fetchCharacters() {
      this.loading = true;
      try {
         let url = `/character/?page=${this.currentPage}`;
        if (this.searchQuery) {
          url += `&name=${encodeURIComponent(this.searchQuery)}`;
        }
        if (this.statusFilter) {
          url += `&status=${encodeURIComponent(this.statusFilter)}`;
        }
        if (this.genderFilter) {
          url += `&gender=${encodeURIComponent(this.genderFilter)}`;
        }
        if (this.speciesFilter) {
          url += `&species=${encodeURIComponent(this.speciesFilter)}`;
        }
        if (this.typeFilter) {
          url += `&type=${encodeURIComponent(this.typeFilter)}`;
        }
        const response = await axios.get(url);
        this.characters = response.data.results;
        this.totalPages = response.data.info.pages;
      } catch (error) {
        console.error('Erreur lors de la récupération des personnages:', error);
      } finally {
        this.loading = false;
      }
    },

    changePage(page) {
      this.currentPage = page;
      this.fetchCharacters();
    },

    selectCharacter(character) {
      this.selectedCharacter = character;
    },
  }
});
