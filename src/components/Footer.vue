<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-info">
        <h3>Plataforma Interactiva de Enfermería</h3>
        <p>Herramienta educativa para la comprensión y aprendizaje de procedimientos y terminología.</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Proyecto de Tesis. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 40px 20px 20px;
  margin-top: auto; /* Empuja el footer hacia abajo gracias al flexbox de App.vue */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-info h3 {
  margin-top: 0;
  color: #009688;
  font-size: 1.2rem;
}

.footer-info p {
  color: #a0aec0;
  max-width: 600px;
  line-height: 1.5;
}

.footer-bottom {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #3f546a;
  width: 100%;
  color: #718096;
  font-size: 0.9rem;
}
</style>