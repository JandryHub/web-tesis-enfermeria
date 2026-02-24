<template>
  <div id="app-layout">
    <Header />
    
    <main class="main-content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Reset de estilos básicos */
* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f4f7f6; /* Fondo gris muy claro, estilo clínico */
  margin: 0;
  padding: 0;
  color: #333;
}

/* Estructura para que el footer siempre baje al final de la pantalla */
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* Hace que el main ocupe todo el espacio disponible */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Estilos compartidos para las secciones de las vistas (Inicio, Teoria, etc.) */
.game-section, .teoria-section {
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
}

.section-header h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 10px;
}

.section-header p {
  color: #718096;
  font-size: 1.1rem;
}
</style>