<template>
  <section class="teoria-section">
    <div class="section-header">
      <h2>Entrenamiento Médico</h2>
      <p>Lee estas tarjetas y memoriza las <span class="badge-ejemplo">Palabras Clave</span> para el simulador de pesca.</p>
    </div>

    <div class="cards-grid">
      <div v-for="(tema, index) in temas" :key="index" class="card">
        <div class="card-icon">{{ tema.icono }}</div>
        <h3 class="card-title">{{ tema.titulo }}</h3>
        <p class="card-content" v-html="tema.contenido"></p>
        
        <div class="card-footer">
          <p class="footer-title">Palabras a pescar:</p>
          <div class="tags-container">
            <span v-for="palabra in tema.palabrasClave" :key="palabra" class="tag">
              {{ palabra }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Base de datos transformada en tarjetas didácticas
const temas = ref([
  {
    icono: '🩸',
    titulo: "¿Qué es la Diabetes?",
    contenido: "El cuerpo descompone los alimentos en azúcar (<b>Glucosa</b>). El <b>Páncreas</b> produce <b>Insulina</b>, que actúa como una llave para que la glucosa entre a las células y nos dé energía.",
    palabrasClave: ['Glucosa', 'Páncreas', 'Insulina']
  },
  {
    icono: '🧬',
    titulo: "Tipos Principales",
    contenido: "En la Tipo 1, no hay producción de insulina. En la <b>Tipo 2</b>, el cuerpo crea una <b>Resistencia</b> a ella. Es el tipo más común en adultos y está muy ligada al estilo de vida.",
    palabrasClave: ['Tipo 2', 'Resistencia']
  },
  {
    icono: '🛑',
    titulo: "El problema de la Resistencia",
    contenido: "Las <b>Células</b> de los músculos y el hígado ignoran la insulina. La glucosa no puede entrar, quedándose atrapada en la sangre y elevando los niveles peligrosamente.",
    palabrasClave: ['Células', 'Sangre']
  },
  {
    icono: '🥗',
    titulo: "Nutrición y Estilo de Vida",
    contenido: "El tratamiento inicial es la dieta. Se priorizan alimentos ricos en <b>Fibra</b> y un bajo <b>Índice Glucémico</b> para no disparar el azúcar. El ejercicio de fuerza también es vital.",
    palabrasClave: ['Fibra', 'Glucémico']
  },
  {
    icono: '💊',
    titulo: "Tratamientos",
    contenido: "Se usan fármacos como la <b>Metformina</b> para hacer que las células sean más sensibles a la insulina. Además, el <b>Monitoreo</b> constante con pinchazos en el dedo es clave.",
    palabrasClave: ['Metformina', 'Monitoreo']
  }
]);
</script>

<style scoped>
.section-header p {
  font-size: 1.1rem;
  color: #5c6a79;
}

.badge-ejemplo {
  background-color: #009688;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
}

/* CSS Grid para que las tarjetas se acomoden solas (Responsivo) */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

/* Estilo individual de la Carta */
.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 150, 136, 0.15);
  border-color: #009688;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.card-title {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.card-content {
  color: #4a5568;
  line-height: 1.6;
  flex-grow: 1; /* Empuja el footer hacia abajo si el texto es corto */
}

/* Las etiquetas (Tags) al fondo de la carta */
.card-footer {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #cbd5e0;
}

.footer-title {
  font-size: 0.85rem;
  color: #718096;
  margin: 0 0 10px 0;
  font-weight: 600;
  text-transform: uppercase;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #e6fffa;
  color: #009688;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid #b2f5ea;
}
</style>