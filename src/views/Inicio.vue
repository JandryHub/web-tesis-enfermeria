<template>
  <section class="game-section">
    <div class="mision-header">
      <span class="mision-icon">🔬</span>
      <h2>Simulador: Torrente Sanguíneo</h2>
      <p class="subtitle">Controla el nanobot médico y pon a prueba tus conocimientos sobre la Diabetes.</p>
    </div>

    <div class="instrucciones-grid">
      <div class="instruccion-card">
        <div class="icon-box info">🕹️</div>
        <h3>Controles</h3>
        <p>Usa las <b>flechas (← →)</b> para navegar por la vena y presiona <b>ESPACIO</b> para inyectar y extraer el nanobot.</p>
      </div>
      
      <div class="instruccion-card">
        <div class="icon-box success">✅</div>
        <h3>Objetivo</h3>
        <p>Atrapa conceptos clave de la <b>Diabetes</b> (Insulina, Glucosa, etc.) que aprendiste en la teoría.</p>
      </div>
      
      <div class="instruccion-card">
        <div class="icon-box danger">⚠️</div>
        <h3>Peligro</h3>
        <p>Evita los términos <b>intrusos</b> (Yeso, Gripe). Si los atrapas, dañarás el sistema y perderás una vida.</p>
      </div>
    </div>

    <div class="game-box">
      <JuegoPesca />
    </div>
  </section>
</template>

<script setup>
import JuegoPesca from '../components/JuegoPesca.vue';
</script>

<style scoped>
.mision-header {
  text-align: center;
  margin-bottom: 40px;
}

.mision-icon {
  font-size: 3.5rem;
  display: block;
  margin-bottom: 10px;
}

.mision-header h2 {
  color: #2c040d; /* Rojo oscuro acorde al tema sanguíneo */
  font-size: 2.2rem;
  margin: 0 0 10px 0;
  font-weight: 800;
}

.subtitle {
  color: #5c6a79;
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Diseño interactivo de las tarjetas de instrucciones */
.instrucciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.instruccion-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: transform 0.2s ease;
}

.instruccion-card:hover {
  transform: translateY(-3px);
  border-color: #cbd5e0;
}

.icon-box {
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 50%;
}

.icon-box.info { background-color: #ebf8ff; }
.icon-box.success { background-color: #f0fff4; }
.icon-box.danger { background-color: #fff5f5; }

.instruccion-card h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.instruccion-card p {
  margin: 0;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.5;
}

.instruccion-card b {
  color: #1a202c;
}

.game-box {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}
</style>