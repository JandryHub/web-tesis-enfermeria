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
          <li><a href="#farmacologia">4. Manejo Farmacológico</a></li>
          <li><a href="#complicaciones">5. Complicaciones Clínicas</a></li>
          <li><a href="#enfermeria">6. Rol de Enfermería</a></li>
          <li><a href="#bibliografia">7. Referencias y Bibliografía</a></li>
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
          La <b>Diabetes Mellitus (DM)</b> es un síndrome metabólico sistémico que se caracteriza por hiperglucemia crónica, secundaria a un defecto en la secreción de la insulina, a una resistencia a su acción periférica, o a ambas. 
        </p>
        <p>
          En el contexto mundial, la <i>Diabetes Mellitus Tipo 2 (DM2)</i> representa más del 90% de los casos. Históricamente considerada una enfermedad de adultos mayores, su incidencia ha aumentado drásticamente en poblaciones jóvenes y pediátricas debido a la epidemia global de obesidad visceral y sedentarismo.
        </p>
      </section>

      <!-- SECCIÓN 2 -->
      <section id="fisiopatologia" class="wiki-section">
        <h2>2. Fisiopatología de la Resistencia a la Insulina</h2>
        <p>
          La <b>resistencia a la insulina</b> es el defecto fisiopatológico primario en el desarrollo de la DM2. Ocurre cuando las concentraciones normales de insulina circulante son insuficientes para regular la captación de glucosa en los tejidos diana, principalmente el músculo esquelético, el hígado y el tejido adiposo.
        </p>
        <ul>
          <li><b>A nivel hepático:</b> La insulina pierde su capacidad para suprimir la gluconeogénesis (producción de nueva glucosa), lo que resulta en la liberación incontrolada de glucosa al torrente sanguíneo, especialmente en estado de ayuno.</li>
          <li><b>A nivel muscular:</b> Existe una interrupción en las vías de señalización intracelular que impide la translocación de los transportadores de glucosa (GLUT4) hacia la membrana celular, impidiendo que el tejido muscular absorba energía.</li>
          <li><b>Lipotoxicidad y Glucotoxicidad:</b> El exceso de ácidos grasos libres interfiere con los receptores de insulina. A su vez, la hiperglucemia constante (glucotoxicidad) daña directamente la estructura de las células beta del páncreas, provocando su apoptosis (muerte celular) a largo plazo.</li>
        </ul>
      </section>

      <!-- SECCIÓN 3 -->
      <section id="diagnostico" class="wiki-section">
        <h2>3. Criterios Diagnósticos Oficiales</h2>
        <p>
          Según la Asociación Americana de Diabetes (ADA) y la Organización Mundial de la Salud (OMS), el diagnóstico formal se establece mediante las siguientes pruebas de laboratorio. Si no hay síntomas clásicos (poliuria, polidipsia, polifagia, pérdida de peso), se requieren dos resultados anormales en la misma muestra o en dos muestras separadas para confirmar:
        </p>
        <div class="tabla-academica">
          <table>
            <thead>
              <tr>
                <th>Prueba de Laboratorio</th>
                <th>Estado Normal</th>
                <th>Prediabetes / Resistencia</th>
                <th>Diabetes Mellitus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glucosa plasmática en ayunas (FPG)</td>
                <td>< 100 mg/dL</td>
                <td>100 mg/dL - 125 mg/dL</td>
                <td>≥ 126 mg/dL</td>
              </tr>
              <tr>
                <td>Prueba de Tolerancia Oral (PTOG - 2 hrs)</td>
                <td>< 140 mg/dL</td>
                <td>140 mg/dL - 199 mg/dL</td>
                <td>≥ 200 mg/dL</td>
              </tr>
              <tr>
                <td>Hemoglobina Glicosilada (HbA1c)</td>
                <td>< 5.7%</td>
                <td>5.7% - 6.4%</td>
                <td>≥ 6.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 4 NUEVA: FARMACOLOGÍA -->
      <section id="farmacologia" class="wiki-section">
        <h2>4. Manejo Farmacológico Contemporáneo</h2>
        <p>
          El algoritmo terapéutico moderno no solo busca disminuir la glucosa, sino también ofrecer protección cardiovascular y renal. Las principales familias farmacológicas incluyen:
        </p>
        <ul>
          <li><b>Biguanidas (Metformina):</b> Medicamento de primera línea. Disminuye la producción hepática de glucosa y mejora la sensibilidad periférica a la insulina sin causar hipoglucemia ni aumento de peso.</li>
          <li><b>Inhibidores de SGLT2 (Dapagliflozina, Empagliflozina):</b> Bloquean la reabsorción de glucosa en los riñones, induciendo glucosuria (excreción de glucosa por la orina). Tienen un alto impacto protector contra la insuficiencia cardíaca y el daño renal progresivo.</li>
          <li><b>Agonistas del receptor GLP-1 (Semaglutida, Liraglutida):</b> Fármacos inyectables u orales que simulan la hormona incretina. Aumentan la secreción de insulina dependiente de glucosa, retrasan el vaciamiento gástrico y promueven una pérdida de peso significativa.</li>
          <li><b>Insulinoterapia:</b> Indicada desde el inicio si hay pérdida de peso drástica, síntomas graves o HbA1c > 10%. Se utilizan regímenes basal-bolo combinando insulinas de acción prolongada y de acción ultra rápida.</li>
        </ul>
      </section>

      <!-- SECCIÓN 5 NUEVA: COMPLICACIONES -->
      <section id="complicaciones" class="wiki-section">
        <h2>5. Complicaciones Clínicas</h2>
        <p>
          La hiperglucemia sostenida desencadena estrés oxidativo y daño endotelial, afectando prácticamente a todos los sistemas del organismo. Se dividen en dos grandes grupos:
        </p>
        <p><b>Complicaciones Agudas (Urgencias Médicas):</b></p>
        <ul>
          <li><b>Cetoacidosis Diabética (CAD):</b> Más común en la DM1. Ante la falta absoluta de insulina, el cuerpo degrada grasas masivamente, produciendo cuerpos cetónicos que acidifican la sangre a niveles letales.</li>
          <li><b>Estado Hiperosmolar Hiperglucémico (EHH):</b> Típico de la DM2 en adultos mayores. Niveles de glucosa extremos (>600 mg/dL) que causan deshidratación celular severa y alteraciones neurológicas, sin acidosis significativa.</li>
          <li><b>Hipoglucemia:</b> (< 70 mg/dL). Generalmente iatrogénica (causada por exceso de medicación, saltarse comidas o ejercicio intenso sin ajuste de dosis).</li>
        </ul>
        <p><b>Complicaciones Crónicas (Micro y Macrovasculares):</b></p>
        <ul>
          <li><b>Neuropatía Periférica:</b> Pérdida de sensibilidad táctil y dolorosa, principalmente en extremidades inferiores (en "calcetín"), siendo la principal causa del Pie Diabético.</li>
          <li><b>Nefropatía Diabética:</b> Daño a los glomérulos renales manifestado inicialmente por microalbuminuria, progresando a Insuficiencia Renal Crónica (necesidad de diálisis).</li>
          <li><b>Retinopatía Diabética:</b> Daño a los vasos sanguíneos de la retina; principal causa de ceguera prevenible en adultos.</li>
          <li><b>Enfermedad Cardiovascular:</b> Los pacientes con DM2 tienen un riesgo 2 a 4 veces mayor de sufrir infartos agudos de miocardio (IAM) y accidentes cerebrovasculares (ACV).</li>
        </ul>
      </section>

      <!-- SECCIÓN 6 -->
      <section id="enfermeria" class="wiki-section">
        <h2>6. Rol y Cuidados de Enfermería</h2>
        <p>
          El personal de enfermería es el pilar central en la educación y monitoreo del paciente diabético. Las intervenciones (NIC) y diagnósticos (NANDA) se centran en el empoderamiento del paciente para el autocuidado:
        </p>
        <ul>
          <li><b>Educación Diabetológica Continua:</b> Instruir sobre la técnica correcta de auto-monitoreo glucémico capilar y la calibración de dispositivos.</li>
          <li><b>Administración Segura:</b> Enseñar la correcta rotación de sitios de inyección de insulina (abdomen, muslos, glúteos, brazos) para evitar hipertrofia o lipodistrofia del tejido subcutáneo.</li>
          <li><b>Prevención del Pie Diabético:</b> Educar sobre la inspección diaria con espejo, lavado y secado meticuloso interdigital, lubricación (evitando entre los dedos), uso de calcetines sin costuras y calzado adecuado.</li>
          <li><b>Reconocimiento de Alertas:</b> Entrenar al paciente y familiares en la regla del 15/15 para tratar la hipoglucemia (ingerir 15 gramos de carbohidratos de acción rápida y esperar 15 minutos).</li>
        </ul>
      </section>

      <!-- SECCIÓN 7: REFERENCIAS OFICIALES AMPLIADAS -->
      <section id="bibliografia" class="wiki-section ref-section">
        <h2>7. Referencias y Bibliografía Oficial</h2>
        <p>
          La información recopilada en este marco teórico clínico está sustentada científicamente en las siguientes guías y bases de datos internacionales:
        </p>
        
        <div class="links-grid">
          <a href="https://diabetesjournals.org/care/issue/47/Supplement_1" target="_blank" class="link-card">
            <h4>Standards of Care in Diabetes 2024</h4>
            <p class="autor">American Diabetes Association (ADA)</p>
            <p class="descripcion">Estándares mundiales de atención, diagnóstico, farmacología y tratamiento integral.</p>
          </a>
          
          <a href="https://www.revistaalad.com/guias/5600AX191_guias_alad_2019.pdf" target="_blank" class="link-card">
            <h4>Guías ALAD sobre Diagnóstico y Tratamiento</h4>
            <p class="autor">Asociación Latinoamericana de Diabetes</p>
            <p class="descripcion">Consenso clínico y epidemiológico adaptado a la población hispana y latinoamericana.</p>
          </a>
          
          <a href="https://pro.aace.com/disease-state-resources/diabetes/clinical-practice-guidelines" target="_blank" class="link-card">
            <h4>Comprehensive Type 2 Diabetes Management</h4>
            <p class="autor">American Association of Clinical Endocrinology (AACE)</p>
            <p class="descripcion">Algoritmos avanzados para el manejo médico y prevención de complicaciones cardiovasculares.</p>
          </a>

          <a href="https://diabetesatlas.org/" target="_blank" class="link-card">
            <h4>Atlas Mundial de la Diabetes</h4>
            <p class="autor">Federación Internacional de Diabetes (IDF)</p>
            <p class="descripcion">Datos epidemiológicos y proyecciones del impacto de la diabetes a nivel mundial.</p>
          </a>
          
          <a href="https://www.who.int/es/publications/i/item/9789241565257" target="_blank" class="link-card">
            <h4>Informe Mundial sobre la Diabetes</h4>
            <p class="autor">Organización Mundial de la Salud (OMS)</p>
            <p class="descripcion">Protocolos de prevención primaria y políticas de salud pública globales.</p>
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
  top: 90px;
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
  font-family: 'Georgia', serif;
}

.wiki-header hr {
  border: 0;
  border-top: 2px solid #e2e8f0;
  margin-bottom: 30px;
}

.wiki-section {
  margin-bottom: 40px;
  scroll-margin-top: 100px;
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
  margin-bottom: 12px;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  display: flex;
  flex-direction: column;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-color: #cbd5e0;
}

.link-card h4 {
  color: #3182ce;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  line-height: 1.3;
}

.link-card .autor {
  font-size: 0.85rem;
  color: #718096;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.link-card .descripcion {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
}

/* Diseño Responsivo */
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