<template>
  <header class="app-header">
    <div class="header-container">
      <div class="brand">
        <h1><span class="highlight">+</span> Tesis Enfermería</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><a href="#" class="active">Inicio</a></li>
          <li><a href="#">Apartado 2</a></li>
          <li><a href="#">Apartado 3</a></li>
          <li><a href="#">Apartado 4</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.brand h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 700;
}

.brand .highlight {
  color: #009688; /* Verde médico */
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.navbar a {
  text-decoration: none;
  color: #5c6a79;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 10px 0;
}

.navbar a:hover, .navbar a.active {
  color: #009688;
  border-bottom: 2px solid #009688;
}
</style>s