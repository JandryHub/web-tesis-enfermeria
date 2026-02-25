<template>
  <section class="trivia-section">
    <div class="section-header">
      <h2>Evaluación Clínica</h2>
      <p>Responde rápido para mantener tu racha. ¡El tiempo corre!</p>
    </div>

    <div class="trivia-container">
      <div v-if="!juegoTerminado" class="trivia-card" :class="{'shake-anim': animacionError}">
        
        <div class="trivia-hud">
          <div class="stats-left">
            <span class="badge-pregunta">Pregunta {{ preguntaActual + 1 }} / {{ preguntas.length }}</span>
            <span v-if="racha > 1" class="badge-racha">🔥 Racha x{{ racha }}</span>
          </div>
          <div class="stats-right">
            <span class="puntos-texto">Puntos: <b>{{ puntaje }}</b></span>
          </div>
        </div>

        <div class="timer-container">
          <div 
            class="timer-bar" 
            :style="{ width: porcentajeTiempo + '%' }"
            :class="{'timer-warning': tiempoRestante <= 5, 'timer-danger': tiempoRestante <= 2}"
          ></div>
        </div>
        <p class="timer-text">{{ tiempoRestante }}s</p>

        <h3 class="pregunta-texto">{{ preguntas[preguntaActual].pregunta }}</h3>

        <div class="opciones-grid">
          <button 
            v-for="(opcion, index) in preguntas[preguntaActual].opciones" 
            :key="index"
            class="btn-opcion"
            :class="{
              'correcta': mostrarExplicacion && index === preguntas[preguntaActual].respuestaCorrecta,
              'incorrecta': mostrarExplicacion && index === respuestaSeleccionada && index !== preguntas[preguntaActual].respuestaCorrecta,
              'deshabilitado': mostrarExplicacion
            }"
            :disabled="mostrarExplicacion"
            @click="verificarRespuesta(index)"
          >
            <span class="opcion-letra">{{ ['A', 'B', 'C', 'D'][index] }}</span>
            {{ opcion }}
          </button>
        </div>

        <div v-if="mostrarExplicacion" class="explicacion-box" :class="esCorrecta ? 'box-success' : 'box-error'">
          <h4>{{ esCorrecta ? '¡Diagnóstico Correcto! 🩺' : (seAcaboElTiempo ? '¡Tiempo Agotado! ⏰' : 'Diagnóstico Incorrecto ❌') }}</h4>
          <p v-html="preguntas[preguntaActual].explicacion"></p>
          <button class="btn-siguiente" @click="siguientePregunta">
            {{ preguntaActual === preguntas.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Paciente ➜' }}
          </button>
        </div>

      </div>

      <div v-else class="resultados-card">
        <div class="resultado-icon">{{ puntaje >= 80 ? '🏅' : (puntaje >= 50 ? '👍' : '📚') }}</div>
        <h3 class="titulo-resultado">{{ puntaje >= 80 ? '¡Sobresaliente!' : (puntaje >= 50 ? 'Buen Trabajo' : 'Necesitas Repasar') }}</h3>
        
        <div class="score-circle">
          <span>{{ puntaje }}</span>
          <small>pts</small>
        </div>
        
        <p class="mensaje-final">
          Acertaste <b>{{ respuestasCorrectasTotales }}</b> de {{ preguntas.length }} preguntas.
        </p>

        <button class="btn-reiniciar" @click="reiniciarTrivia">↻ Iniciar Nueva Evaluación</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';

// ESTADO DEL JUEGO
const preguntaActual = ref(0);
const puntaje = ref(0);
const racha = ref(0);
const respuestasCorrectasTotales = ref(0);
const juegoTerminado = ref(false);
const respuestaSeleccionada = ref(null);
const mostrarExplicacion = ref(false);
const esCorrecta = ref(false);
const animacionError = ref(false);

// TEMPORIZADOR
const tiempoMaximo = 15;
const tiempoRestante = ref(tiempoMaximo);
let intervaloTiempo = null;
const seAcaboElTiempo = ref(false);

const porcentajeTiempo = computed(() => {
  return (tiempoRestante.value / tiempoMaximo) * 100;
});

// BASE DE DATOS DE PREGUNTAS (10 Preguntas basadas en la teoría completa)
const preguntas = ref([
  {
    pregunta: "¿Qué hormona actúa como 'llave' para que la glucosa entre a las células?",
    opciones: ["Glucagón", "Insulina", "Adrenalina", "Cortisol"],
    respuestaCorrecta: 1,
    explicacion: "El páncreas produce <b>Insulina</b>, encargada de permitir la captación de glucosa por los tejidos."
  },
  {
    pregunta: "¿Cuál es la característica fisiológica principal de la Diabetes Tipo 2?",
    opciones: ["Destrucción autoinmune del páncreas", "Alergia severa a los carbohidratos", "Resistencia a la insulina en los tejidos", "Falta de glóbulos rojos en sangre"],
    respuestaCorrecta: 2,
    explicacion: "En la <b>Diabetes Tipo 2</b>, el cuerpo crea una resistencia a la insulina, seguida de un declive en las células beta."
  },
  {
    pregunta: "¿Qué signo visible en la piel (oscurecimiento en cuello/axilas) puede alertar sobre Resistencia a la Insulina?",
    opciones: ["Vitíligo", "Acanthosis nigricans", "Psoriasis", "Dermatitis atópica"],
    respuestaCorrecta: 1,
    explicacion: "La <b>Acanthosis nigricans</b> es una manifestación cutánea muy común en pacientes con hiperinsulinemia y síndrome metabólico."
  },
  {
    pregunta: "¿Qué ocurre con la glucosa cuando los músculos y el hígado ignoran a la insulina?",
    opciones: ["Se evapora por la respiración", "Se convierte directamente en masa muscular", "Se acumula peligrosamente en el torrente sanguíneo", "El estómago la rechaza"],
    respuestaCorrecta: 2,
    explicacion: "Al no poder entrar a las células, la glucosa se queda atrapada en la <b>Sangre</b>, causando hiperglucemia y daño endotelial."
  },
  {
    pregunta: "¿Qué examen es considerado el 'estándar de oro' para evaluar el promedio de glucosa de los últimos 3 meses?",
    opciones: ["Prueba de esfuerzo", "Hemoglobina Glicosilada (HbA1c)", "Glucómetro capilar en ayunas", "Biometría hemática"],
    respuestaCorrecta: 1,
    explicacion: "La <b>Hemoglobina Glicosilada (HbA1c)</b> refleja el control a largo plazo y es vital para monitorear el tratamiento."
  },
  {
    pregunta: "¿Por qué el ejercicio de fuerza es un tratamiento vital para el paciente insulinorresistente?",
    opciones: ["Porque la contracción muscular capta glucosa de la sangre independientemente de la insulina", "Porque hace que el paciente respire más rápido", "Porque elimina el azúcar a través del sudor", "Porque reemplaza la necesidad de beber agua"],
    respuestaCorrecta: 0,
    explicacion: "El músculo activo usa transportadores (GLUT4) que <b>absorben glucosa sin necesitar insulina</b>, reduciendo los niveles en sangre."
  },
  {
    pregunta: "¿Qué tipo de alimentos se priorizan en el manejo nutricional de esta condición?",
    opciones: ["Alimentos fritos", "Carbohidratos refinados", "Alimentos de bajo Índice Glucémico (IG) y alta fibra", "Exclusivamente proteínas en polvo"],
    respuestaCorrecta: 2,
    explicacion: "Los alimentos de <b>bajo Índice Glucémico</b> elevan la glucosa de forma lenta y sostenida, evitando picos de insulina."
  },
  {
    pregunta: "¿Qué fármaco (biguanida) es considerado de primera línea para mejorar la sensibilidad a la insulina?",
    opciones: ["Ibuprofeno", "Metformina", "Omeprazol", "Penicilina"],
    respuestaCorrecta: 1,
    explicacion: "La <b>Metformina</b> reduce la producción hepática de glucosa (gluconeogénesis) y hace a los tejidos más sensibles."
  },
  {
    pregunta: "¿Qué tipo de diabetes aparece por primera vez y se diagnostica durante el embarazo?",
    opciones: ["Diabetes Mellitus Tipo 1", "Diabetes Insípida", "Diabetes Mellitus Tipo 2", "Diabetes Gestacional"],
    respuestaCorrecta: 3,
    explicacion: "La <b>Diabetes Gestacional</b> es una intolerancia a los carbohidratos que surge típicamente en el segundo o tercer trimestre."
  },
  {
    pregunta: "¿Qué componente del páncreas es el encargado directo de secretar la insulina?",
    opciones: ["Las células alfa", "Las células beta de los islotes de Langerhans", "Los conductos biliares", "El tejido adiposo"],
    respuestaCorrecta: 1,
    explicacion: 'Las <b>células beta</b> pancreáticas son las "fábricas" de insulina en el cuerpo humano.'
  }
]);

// FUNCIONES DEL TEMPORIZADOR
const iniciarTemporizador = () => {
  tiempoRestante.value = tiempoMaximo;
  seAcaboElTiempo.value = false;
  intervaloTiempo = setInterval(() => {
    tiempoRestante.value--;
    if (tiempoRestante.value <= 0) {
      detenerTemporizador();
      seAcaboElTiempo.value = true;
      procesarRespuestaIncorrecta(null); // Se acabó el tiempo
    }
  }, 1000);
};

const detenerTemporizador = () => {
  clearInterval(intervaloTiempo);
};

// LÓGICA DEL JUEGO
const verificarRespuesta = (index) => {
  if (mostrarExplicacion.value) return; // Evitar doble clic
  detenerTemporizador();
  respuestaSeleccionada.value = index;
  
  if (index === preguntas.value[preguntaActual.value].respuestaCorrecta) {
    esCorrecta.value = true;
    mostrarExplicacion.value = true;
    racha.value++;
    respuestasCorrectasTotales.value++;
    
    // Calcular puntos: Base (10) + Bono por Racha + Bono por Tiempo
    let puntosGanados = 10;
    if (racha.value > 2) puntosGanados += 5; // Bono racha
    if (tiempoRestante.value >= 10) puntosGanados += 5; // Bono velocidad
    
    puntaje.value += puntosGanados;
  } else {
    procesarRespuestaIncorrecta(index);
  }
};

const procesarRespuestaIncorrecta = (index) => {
  respuestaSeleccionada.value = index;
  esCorrecta.value = false;
  mostrarExplicacion.value = true;
  racha.value = 0; // Se pierde la racha
  
  // Efecto visual de error
  animacionError.value = true;
  setTimeout(() => animacionError.value = false, 500);
};

const siguientePregunta = () => {
  if (preguntaActual.value < preguntas.value.length - 1) {
    preguntaActual.value++;
    respuestaSeleccionada.value = null;
    mostrarExplicacion.value = false;
    seAcaboElTiempo.value = false;
    iniciarTemporizador();
  } else {
    juegoTerminado.value = true;
  }
};

const reiniciarTrivia = () => {
  preguntaActual.value = 0;
  puntaje.value = 0;
  racha.value = 0;
  respuestasCorrectasTotales.value = 0;
  juegoTerminado.value = false;
  respuestaSeleccionada.value = null;
  mostrarExplicacion.value = false;
  iniciarTemporizador();
};

// Iniciar el reloj al montar el componente
iniciarTemporizador();

// Limpiar el intervalo si el usuario cambia de página
onUnmounted(() => {
  detenerTemporizador();
});
</script>

<style scoped>
.trivia-container {
  max-width: 800px;
  margin: 0 auto;
}

.trivia-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
  transition: transform 0.1s;
}

/* Animación cuando te equivocas */
.shake-anim {
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes shake {
  10%, 90% { transform: translate3d(-2px, 0, 0); }
  20%, 80% { transform: translate3d(4px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-6px, 0, 0); }
  40%, 60% { transform: translate3d(6px, 0, 0); }
}

/* HUD (Heads Up Display) */
.trivia-hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.badge-pregunta {
  background: #edf2f7;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
}

.badge-racha {
  background: #feebc8;
  color: #dd6b20;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-left: 10px;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.puntos-texto {
  font-size: 1.2rem;
  color: #2d3748;
}

.puntos-texto b {
  color: #009688;
  font-size: 1.4rem;
}

/* Temporizador */
.timer-container {
  width: 100%;
  height: 8px;
  background-color: #edf2f7;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
}

.timer-bar {
  height: 100%;
  background-color: #48bb78;
  transition: width 1s linear, background-color 0.3s;
}

.timer-warning { background-color: #ed8936; }
.timer-danger { background-color: #e53e3e; }

.timer-text {
  text-align: right;
  margin: 0 0 20px 0;
  font-size: 0.85rem;
  font-weight: bold;
  color: #718096;
}

.pregunta-texto {
  font-size: 1.4rem;
  color: #1a202c;
  margin-bottom: 25px;
  line-height: 1.5;
  font-weight: 700;
}

/* Botones de Opciones */
.opciones-grid {
  display: grid;
  gap: 15px;
}

.btn-opcion {
  display: flex;
  align-items: center;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  color: #2d3748;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}

.opcion-letra {
  background: #e2e8f0;
  color: #4a5568;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-right: 15px;
  font-weight: bold;
}

.btn-opcion:hover:not(.deshabilitado) {
  background-color: #ebf8ff;
  border-color: #3182ce;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(49, 130, 206, 0.1);
}

.btn-opcion.correcta {
  background-color: #f0fff4 !important;
  border-color: #48bb78 !important;
}

.btn-opcion.correcta .opcion-letra {
  background: #48bb78;
  color: white;
}

.btn-opcion.incorrecta {
  background-color: #fff5f5 !important;
  border-color: #f56565 !important;
}

.btn-opcion.incorrecta .opcion-letra {
  background: #f56565;
  color: white;
}

.btn-opcion.deshabilitado { cursor: not-allowed; opacity: 0.7; }

/* Explicación Médica */
.explicacion-box {
  margin-top: 25px;
  padding: 20px;
  border-radius: 12px;
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.box-success { background-color: #f0fff4; border: 2px solid #9ae6b4; }
.box-error { background-color: #fff5f5; border: 2px solid #feb2b2; }

.explicacion-box h4 { margin: 0 0 10px 0; font-size: 1.3rem; }
.box-success h4 { color: #276749; }
.box-error h4 { color: #c53030; }

.explicacion-box p { margin: 0 0 20px 0; color: #2d3748; line-height: 1.6; font-size: 1.05rem;}
.explicacion-box :deep(b) { color: #1a202c; }

.btn-siguiente {
  background-color: #2d3748;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  float: right;
  transition: background-color 0.2s;
}
.btn-siguiente:hover { background-color: #1a202c; }

/* Resultados */
.resultados-card { text-align: center; padding: 50px 30px; }
.resultado-icon { font-size: 5rem; margin-bottom: 20px; }
.titulo-resultado { font-size: 2rem; color: #2d3748; margin-bottom: 30px; }

.score-circle {
  width: 150px;
  height: 150px;
  background: #009688;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  color: white;
  box-shadow: 0 10px 20px rgba(0, 150, 136, 0.3);
}

.score-circle span { font-size: 4rem; font-weight: 800; line-height: 1; }
.score-circle small { font-size: 1.2rem; font-weight: 600; opacity: 0.9;}

.mensaje-final { font-size: 1.2rem; color: #4a5568; margin-bottom: 40px; }

.btn-reiniciar {
  background-color: #2d3748;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}
.btn-reiniciar:hover { background-color: #1a202c; transform: translateY(-3px); }

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
</style>