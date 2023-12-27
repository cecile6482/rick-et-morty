<script setup>
const props = defineProps({
  character: Object
});
</script>

<template>
  <div class="character-details">
    <div class="left">
    <h2>{{ character.name }}</h2>
    <img :src="character.image" :alt="`Image de ${character.name}`" />
    </div>
    <div class="right">
    <p><strong>Status:</strong> {{ character.status }}</p>
    <p><strong>Species:</strong> {{ character.species }}</p>
    <p><strong>Type:</strong> {{ character.type }}</p>
    <p><strong>Gender:</strong> {{ character.gender }}</p>
    <p><strong>Origin:</strong> {{ character.origin.name }}</p>
    <p><strong>Location:</strong> {{ character.location.name }}</p>
    <p><strong>Created:</strong> {{ character.created }}</p>
    </div>
  </div>
</template>

<style scoped>
.character-details {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 60px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #d3e364;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(251, 252, 251, 0.761);
  font-family: 'Papyrus', fantasy;
}

.character-details .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.character-details .left img {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
}

.character-details .right {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-top: 30px;
}

.character-details h2 {
  color: #2c876f;
}

.character-details p strong {
  color: #2c876f;
}
</style>