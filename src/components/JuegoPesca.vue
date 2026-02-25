<template>
  <div class="juego-wrapper">
    <div id="game-container"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import Phaser from 'phaser';
import { config } from '../game/config';

let game = null;

onMounted(() => {
  // Inicializamos Phaser cuando el div ya existe en el DOM
  game = new Phaser.Game(config);
});

onUnmounted(() => {
  // Limpiamos la memoria si el componente se destruye
  if (game) {
    game.destroy(true);
  }
});
</script>

<style scoped>
.juego-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

#game-container {
  border: 4px solid #2c3e50;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>