<template>
  <section class="teoria-section">
    <div class="section-header">
      <h2>Entrenamiento Médico</h2>
      <p>Toca las tarjetas para girarlas y memoriza las palabras clave. Abre los detalles para profundizar.</p>
    </div>

    <div class="cards-grid">
      <div 
        v-for="(tema, index) in temas" 
        :key="index" 
        class="card-container"
        @click="voltearTarjeta(index)"
      >
        <div class="card-inner" :class="{ 'is-flipped': tema.volteada }">
          
          <div class="card-face card-front">
            <div class="card-icon">{{ tema.icono }}</div>
            <h3 class="card-title">{{ tema.titulo }}</h3>
            <p class="click-hint">Toca para girar ↺</p>
          </div>
          
          <div class="card-face card-back">
            <h3 class="card-title-back">{{ tema.titulo }}</h3>
            <p class="card-content" v-html="tema.contenido"></p>
            
            <button class="btn-detalles" @click.stop="abrirModal(tema)">
              Ver más detalles ➜
            </button>
          </div>

        </div>
      </div>
    </div>

    <div v-if="temaActivo" class="modal-overlay" @click="cerrarModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <span class="modal-icon">{{ temaActivo.icono }}</span>
          <h2>{{ temaActivo.titulo }}</h2>
          <button class="btn-cerrar" @click="cerrarModal">✖</button>
        </div>
        <div class="modal-body">
          <p v-html="temaActivo.contenidoDetallado"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Variables para controlar el modal
const temaActivo = ref(null);

const abrirModal = (tema) => {
  temaActivo.value = tema;
  // Prevenir que la página haga scroll de fondo cuando el modal está abierto
  document.body.style.overflow = 'hidden';
};

const cerrarModal = () => {
  temaActivo.value = null;
  // Restaurar el scroll
  document.body.style.overflow = 'auto';
};

// Base de datos extendida con la información detallada para la tesis
const temas = ref([
  {
    icono: '🩸',
    titulo: "¿Qué es la Diabetes?",
    contenido: "El cuerpo descompone los alimentos en azúcar (<b>Glucosa</b>). El <b>Páncreas</b> produce <b>Insulina</b>, que actúa como una llave para que la glucosa entre a las células.",
    contenidoDetallado: "La diabetes mellitus es un trastorno metabólico caracterizado por la hiperglucemia crónica. Fisiológicamente, cuando ingerimos alimentos, los carbohidratos se descomponen en glucosa, elevando sus niveles en el torrente sanguíneo. Esto estimula a las células beta de los islotes de Langerhans en el páncreas para secretar insulina. La insulina facilita la captación de glucosa por los tejidos periféricos (músculo adiposo y estriado) y suprime la producción de glucosa hepática. Cuando este mecanismo de 'llave y cerradura' falla, la glucosa se acumula en la sangre, causando daño endotelial sistémico a largo plazo.",
    volteada: false
  },
  {
    icono: '🧬',
    titulo: "Tipos Principales",
    contenido: "En la Tipo 1, no hay producción. En la <b>Tipo 2</b>, el cuerpo crea una <b>Resistencia</b>. Es el tipo más común en adultos.",
    contenidoDetallado: "<b>Diabetes Mellitus Tipo 1:</b> Es una enfermedad autoinmune donde los linfocitos T destruyen selectivamente las células beta pancreáticas, provocando una deficiencia absoluta de insulina. Los pacientes son insulinodependientes desde el diagnóstico.<br><br><b>Diabetes Mellitus Tipo 2:</b> Constituye el 90-95% de los casos. Se caracteriza por un estado inicial de resistencia a la insulina con hiperinsulinemia compensatoria, seguido de un declive progresivo en la función de las células beta. Está fuertemente asociada a la obesidad visceral, sedentarismo y factores genéticos.<br><br><b>Diabetes Gestacional:</b> Intolerancia a los carbohidratos que se reconoce por primera vez durante el embarazo, generalmente en el segundo o tercer trimestre.",
    volteada: false
  },
  {
    icono: '🛑',
    titulo: "La Resistencia a la Insulina",
    contenido: "Las <b>Células</b> ignoran la insulina. La glucosa no puede entrar, quedándose en la <b>Sangre</b> y elevando los niveles peligrosamente.",
    contenidoDetallado: "La resistencia a la insulina (RI) es una alteración biológica en la que los tejidos diana (principalmente músculo esquelético, hígado y tejido adiposo) presentan una respuesta disminuida a concentraciones fisiológicas de insulina. Para compensar y mantener la normoglucemia, el páncreas incrementa la secreción de insulina (hiperinsulinemia).<br><br>Clínicamente, la RI se asocia con el <b>Síndrome Metabólico</b> y puede presentar signos visibles como la <i>Acanthosis nigricans</i> (oscurecimiento y engrosamiento de la piel en pliegues como el cuello o axilas). Si la hiperinsulinemia no logra superar la resistencia, se desarrolla primero prediabetes y finalmente Diabetes Tipo 2.",
    volteada: false
  },
  {
    icono: '🥗',
    titulo: "Nutrición y Estilo de Vida",
    contenido: "El tratamiento inicial es la dieta. Se priorizan alimentos ricos en <b>Fibra</b> y un bajo <b>Índice Glucémico</b>. El ejercicio es vital.",
    contenidoDetallado: "El manejo nutricional es la piedra angular del tratamiento. Se recomienda la restricción de carbohidratos refinados y azúcares simples. En su lugar, se priorizan:<br><ul><li><b>Alimentos de bajo Índice Glucémico (IG):</b> Elevan la glucemia de forma lenta y sostenida, reduciendo los picos de insulina.</li><li><b>Alto consumo de Fibra:</b> Ralentiza la absorción intestinal de la glucosa.</li></ul><br><b>Ejercicio físico:</b> Es crucial porque la contracción muscular activa mecanismos independientes de la insulina (como la translocación de los transportadores GLUT4) para captar glucosa de la sangre. El entrenamiento de fuerza, al aumentar la masa muscular, incrementa el espacio de almacenamiento para la glucosa.",
    volteada: false
  },
  {
    icono: '💊',
    titulo: "Tratamientos",
    contenido: "Se usan fármacos como la <b>Metformina</b> para hacer que las células sean más sensibles. El <b>Monitoreo</b> constante es clave.",
    contenidoDetallado: "El manejo farmacológico de la resistencia a la insulina y la Diabetes Tipo 2 suele iniciarse con biguanidas, siendo la <b>Metformina</b> el medicamento de primera línea. Su mecanismo de acción principal es la reducción de la producción hepática de glucosa (gluconeogénesis) y la mejora de la sensibilidad a la insulina en los tejidos periféricos.<br><br>El tratamiento debe guiarse mediante el <b>Monitoreo</b> clínico. El estándar de oro para evaluar el control a largo plazo es la medición de la <b>Hemoglobina Glicosilada (HbA1c)</b>, que refleja el promedio de los niveles de glucosa en los últimos 2 a 3 meses. El control capilar diario (glucómetro) ayuda al paciente a entender cómo responden sus niveles de azúcar a diferentes alimentos y actividades.",
    volteada: false
  }
]);

const voltearTarjeta = (index) => {
  temas.value[index].volteada = !temas.value[index].volteada;
};
</script>

<style scoped>
/* (Mantén todo el CSS anterior de las tarjetas exactamente igual, solo añade lo siguiente al final) */

.section-header p {
  font-size: 1.1rem;
  color: #5c6a79;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.card-container {
  perspective: 1000px;
  cursor: pointer;
  min-height: 280px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border: 2px solid transparent;
}

.card-front {
  background: linear-gradient(145deg, #ffffff, #f0f4f8);
  border-color: #e2e8f0;
}

.card-front:hover {
  border-color: #009688;
  box-shadow: 0 10px 25px rgba(0, 150, 136, 0.2);
}

.card-icon {
  font-size: 4.5rem;
  margin-bottom: 15px;
}

.card-title {
  margin: 0;
  color: #2c3e50;
  font-size: 1.4rem;
  font-weight: 700;
}

.click-hint {
  margin-top: 20px;
  font-size: 0.85rem;
  color: #009688;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  opacity: 0.8;
}

.card-back {
  background: #f8fafc;
  border-color: #009688;
  transform: rotateY(180deg);
  justify-content: space-between; /* Espacia el título, contenido y botón */
}

.card-title-back {
  margin: 0 0 10px 0;
  color: #009688;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #b2f5ea;
  padding-bottom: 5px;
  width: 100%;
}

.card-content {
  color: #4a5568;
  line-height: 1.5;
  font-size: 1rem;
  margin: 0;
}

.card-content :deep(b) {
  color: #1a202c;
  background-color: #e6fffa;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid #b2f5ea;
}

/* --- NUEVO: ESTILOS DEL BOTÓN Y EL MODAL --- */

.btn-detalles {
  margin-top: 15px;
  background-color: #009688;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.btn-detalles:hover {
  background-color: #00796b;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: modalIn 0.3s ease-out forwards;
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-header {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #f8fafc;
  position: sticky;
  top: 0;
}

.modal-icon {
  font-size: 2rem;
  margin-right: 15px;
}

.modal-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.5rem;
  flex-grow: 1;
}

.btn-cerrar {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #a0aec0;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-cerrar:hover {
  color: #e53e3e;
}

.modal-body {
  padding: 25px;
  color: #4a5568;
  line-height: 1.7;
  font-size: 1.1rem;
}

.modal-body :deep(b) {
  color: #2c3e50;
}

.modal-body :deep(ul) {
  padding-left: 20px;
  margin-top: 10px;
}
</style>