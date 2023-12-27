<script setup>
import { watchEffect, computed, ref, onMounted} from 'vue';
import { Modal } from 'bootstrap';
import { useCharacterStore } from '../store/characterStore.js';
import CharacterCard from './CharacterCard.vue';
import CharacterDetails from './CharacterDetails.vue';

const store = useCharacterStore();
const characters = computed(() => store.characters);
const showModalRef = ref(null);

onMounted(() => {
  showModalRef.value = new Modal(document.getElementById('characterDetailsModal'));
});


// Fonction pour afficher les détails du personnage dans un modal
function showCharacterDetails(character) {
  store.selectCharacter(character);
  showModalRef.value.show();
}

// Fonction pour fermer le modal
function closeModal() {
  showModalRef.value.hide();
}

// Utiliser watchEffect pour réagir aux changements dans le store
watchEffect(() => {});
</script>

<template>
  <div>
  <div class="character-grid">
    <CharacterCard 
      v-for="character in characters"
      :key="character.id"
      :character="character"
      @click="showCharacterDetails(character)"
    />
  </div>
  
  <!-- <div class="character-details">
    <CharacterDetails 
      v-if="store.selectedCharacter"
      :character="store.selectedCharacter" />
  </div> -->

      <!-- Modal Bootstrap pour les détails du personnage -->
      <div class="modal fade" id="characterDetailsModal" tabindex="-1" aria-labelledby="characterDetailsLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="characterDetailsLabel">{{ store.selectedCharacter?.name }}</h5> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal">X</button>
          </div>
          <div class="modal-body">
            <CharacterDetails v-if="store.selectedCharacter" :character="store.selectedCharacter" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.character-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 30px;
}

.character-details {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.modal-content {
  background-color: #0b140e;
}

.modal-header {
  border-bottom: 1px solid #d3e364;
}

.modal-header button {
  color: #d3e364;
}

</style>