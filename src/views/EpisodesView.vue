<script setup>
import { computed, onMounted } from 'vue';
import { useEpisodeStore } from '../store/episodeStore';
import { useCharacterStore } from '../store/characterStore';
import CharacterDetails from '../components/CharacterDetails.vue';
import Header from '../components/Header.vue';

const episodeStore = useEpisodeStore();
const characterStore = useCharacterStore();

onMounted(() => {
  episodeStore.fetchEpisodes();
});

const episodes = computed(() => episodeStore.episodes);
const selectedCharacter = computed(() => characterStore.selectedCharacter);

</script>

<template>
<Header />
<div class="page">
  <div class="episodes-container">
    <div v-for="episode in episodes" :key="episode.id" class="episode-card">
      <h3>{{ episode.name }} ({{ episode.episode }})</h3>
      <p>{{ episode.air_date }}</p>
      <button>{{ episode.characters.length }} characters</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.episodes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.episode-card {
  gap: 20px;
  width: 180px;
  margin: 10px;
  padding: 10px;
  background-color: #FBF976;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgb(255, 248, 121);
  text-align: center;
  font-family: 'Papyrus', fantasy;
}

.episode-card h3 {
  margin: 10px 0 5px;
  font-size: 1.1em;
  color: #0b140e;
}

.episode-card p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #0b140e;
  padding-bottom: 10px;
}

.episode-card button {
  padding: 5px;
  background-color: #d3e364;
  border: none;
  border-radius: 5px;
  color: #0b140e;
  cursor: pointer;
}

.page {
  background-color: #0b140e;
  height: 100vh;
}

</style>
