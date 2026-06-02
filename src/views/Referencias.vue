<template>
  <div class="wiki-layout">
    <!-- BARRA LATERAL: ÍNDICE ESTILO WIKIPEDIA -->
    <aside class="wiki-sidebar">
      <div class="indice-box">
        <h3>Índice de Contenidos</h3>
        <ul>
          <li><a href="#definicion">1. Definición y Contexto</a></li>
          <li><a href="#fisiopatologia">2. Fisiopatología de la Resistencia</a></li>
          <li><a href="#diagnostico">3. Criterios Diagnósticos (ADA)</a></li>
          <li><a href="#enfermeria">4. Rol de Enfermería</a></li>
          <li><a href="#bibliografia">5. Referencias y Bibliografía</a></li>
        </ul>
      </div>
    </aside>

    <!-- CONTENIDO PRINCIPAL: TEXTO ACADÉMICO -->
    <main class="wiki-content">
      <div class="wiki-header">
        <h1>Diabetes Mellitus y Resistencia a la Insulina</h1>
        <hr />
      </div>

      <!-- SECCIÓN 1 -->
      <section id="definicion" class="wiki-section">
        <h2>1. Definición y Contexto Clínico</h2>
        <p>
          La <b>Diabetes Mellitus (DM)</b> es un grupo de alteraciones metabólicas que se caracteriza por hiperglucemia crónica, secundaria a un defecto en la secreción de la insulina, a una resistencia a su acción periférica, o a ambas. 
        </p>
        <p>
          En el contexto mundial, la <i>Diabetes Mellitus Tipo 2 (DM2)</i> representa más del 90% de los casos. Históricamente considerada una enfermedad de adultos mayores, su incidencia ha aumentado drásticamente en poblaciones jóvenes y pediátricas debido a la epidemia global de obesidad y sedentarismo.
        </p>
      </section>

      <!-- SECCIÓN 2 -->
      <section id="fisiopatologia" class="wiki-section">
        <h2>2. Fisiopatología de la Resistencia a la Insulina</h2>
        <p>
          La <b>resistencia a la insulina</b> es el defecto fisiopatológico primario en el desarrollo de la DM2. Ocurre cuando las concentraciones normales de insulina circulante son insuficientes para regular la captación de glucosa en los tejidos diana, principalmente el músculo esquelético, el hígado y el tejido adiposo.
        </p>
        <ul>
          <li><b>A nivel hepático:</b> La insulina pierde su capacidad para suprimir la gluconeogénesis (producción de nueva glucosa), lo que resulta en la liberación incontrolada de glucosa al torrente sanguíneo, especialmente en ayunas.</li>
          <li><b>A nivel muscular:</b> Hay un fallo en la translocación de los transportadores de glucosa (GLUT4) hacia la membrana celular, impidiendo que el músculo (el mayor consumidor de glucosa del cuerpo) absorba energía de la sangre.</li>
          <li><b>Fase compensatoria:</b> Para vencer esta resistencia, las células beta del páncreas secretan cantidades masivas de insulina (hiperinsulinemia). Con los años, este sobreesfuerzo provoca el agotamiento y la apoptosis (muerte celular programada) de las células beta, desencadenando la hiperglucemia franca.</li>
        </ul>
      </section>

      <!-- SECCIÓN 3 -->
      <section id="diagnostico" class="wiki-section">
        <h2>3. Criterios Diagnósticos Oficiales</h2>
        <p>
          Según la Asociación Americana de Diabetes (ADA), el diagnóstico formal se establece mediante las siguientes pruebas de laboratorio. Si no hay síntomas clásicos (poliuria, polidipsia, pérdida de peso), se requieren dos resultados anormales para confirmar:
        </p>
        <div class="tabla-academica">
          <table>
            <thead>
              <tr>
                <th>Prueba de Laboratorio</th>
                <th>Prediabetes / Resistencia</th>
                <th>Diabetes Mellitus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glucosa plasmática en ayunas (FPG)</td>
                <td>100 mg/dL - 125 mg/dL</td>
                <td>≥ 126 mg/dL</td>
              </tr>
              <tr>
                <td>Prueba de Tolerancia Oral (PTOG - 2 hrs)</td>
                <td>140 mg/dL - 199 mg/dL</td>
                <td>≥ 200 mg/dL</td>
              </tr>
              <tr>
                <td>Hemoglobina Glicosilada (HbA1c)</td>
                <td>5.7% - 6.4%</td>
                <td>≥ 6.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 4 (Añadido especial para tesis de enfermería) -->
      <section id="enfermeria" class="wiki-section">
        <h2>4. Rol y Cuidados de Enfermería</h2>
        <p>
          El personal de enfermería es el pilar central en la educación del paciente diabético. Las intervenciones (NIC) y diagnósticos (NANDA) se centran en el empoderamiento del paciente para el autocuidado:
        </p>
        <ul>
          <li><b>Educación Diabetológica:</b> Instruir sobre la técnica correcta de auto-monitoreo glucémico capilar y la rotación de sitios de inyección de insulina para evitar lipodistrofias.</li>
          <li><b>Cuidado del Pie Diabético:</b> Prevención de úlceras mediante la inspección diaria, uso de calzado adecuado y corte recto de uñas, debido a la neuropatía periférica.</li>
          <li><b>Manejo Nutricional:</b> Reforzar la importancia del conteo de carbohidratos y la adherencia a la pauta del nutricionista y la medicación (ej. Metformina).</li>
        </ul>
      </section>

      <!-- SECCIÓN 5: REFERENCIAS OFICIALES -->
      <section id="bibliografia" class="wiki-section ref-section">
        <h2>5. Referencias y Bibliografía Oficial</h2>
        <p>
          La información recopilada en este marco teórico y en el simulador interactivo está sustentada científicamente en las siguientes guías y bases de datos:
        </p>
        
        <div class="links-grid">
          <a href="https://diabetesjournals.org/care/issue/47/Supplement_1" target="_blank" class="link-card">
            <h4>Standards of Care in Diabetes 2024</h4>
            <p class="autor">American Diabetes Association (ADA)</p>
            <p class="descripcion">Estándares mundiales de atención, diagnóstico y tratamiento.</p>
          </a>
          
          <a href="https://diabetesatlas.org/" target="_blank" class="link-card">
            <h4>Atlas Mundial de la Diabetes</h4>
            <p class="autor">Federación Internacional de Diabetes (IDF)</p>
            <p class="descripcion">Datos epidemiológicos y prevalencia global.</p>
          </a>
          
          <a href="https://www.who.int/es/publications/i/item/9789241565257" target="_blank" class="link-card">
            <h4>Informe Mundial sobre la Diabetes</h4>
            <p class="autor">Organización Mundial de la Salud (OMS)</p>
            <p class="descripcion">Protocolos de prevención y políticas de salud pública.</p>
          </a>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
/* Hacemos que el scroll sea suave al hacer clic en el índice */
html {
  scroll-behavior: smooth;
}

/* Layout Principal tipo Wikipedia (Sidebar + Content) */
.wiki-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  align-items: flex-start;
}

/* --- BARRA LATERAL (ÍNDICE) --- */
.wiki-sidebar {
  width: 280px;
  position: sticky;
  top: 90px; /* Se queda fijo al hacer scroll */
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  flex-shrink: 0;
}

.indice-box h3 {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: #2c3e50;
  border-bottom: 1px solid #cbd5e0;
  padding-bottom: 10px;
}

.indice-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.indice-box li {
  margin-bottom: 10px;
}

.indice-box a {
  text-decoration: none;
  color: #3182ce;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.indice-box a:hover {
  color: #2b6cb0;
  text-decoration: underline;
}

/* --- CONTENIDO PRINCIPAL --- */
.wiki-content {
  flex-grow: 1;
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}

.wiki-header h1 {
  font-size: 2.5rem;
  color: #1a202c;
  margin: 0 0 10px 0;
  font-family: 'Georgia', serif; /* Le da el toque académico/enciclopédico */
}

.wiki-header hr {
  border: 0;
  border-top: 2px solid #e2e8f0;
  margin-bottom: 30px;
}

.wiki-section {
  margin-bottom: 40px;
  scroll-margin-top: 100px; /* Para que al hacer clic en el índice, el título no quede escondido bajo el menú */
}

.wiki-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  border-bottom: 1px solid #edf2f7;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
}

.wiki-section p {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.wiki-section ul {
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
  padding-left: 20px;
}

.wiki-section li {
  margin-bottom: 10px;
}

.wiki-section b {
  color: #1a202c;
}

/* Tabla Médica */
.tabla-academica {
  overflow-x: auto;
  margin-top: 20px;
}

.tabla-academica table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.tabla-academica th, .tabla-academica td {
  padding: 12px 15px;
  border: 1px solid #e2e8f0;
}

.tabla-academica th {
  background-color: #f8fafc;
  color: #2c3e50;
  font-weight: bold;
}

/* Tarjetas de Referencia */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.link-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-color: #cbd5e0;
}

.link-card h4 {
  color: #3182ce;
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.link-card .autor {
  font-size: 0.85rem;
  color: #718096;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.link-card .descripcion {
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.4;
  margin: 0;
}

/* Diseño Responsivo para pantallas pequeñas */
@media (max-width: 900px) {
  .wiki-layout {
    flex-direction: column;
  }
  .wiki-sidebar {
    width: 100%;
    position: static;
    margin-bottom: 20px;
  }
}
</style>