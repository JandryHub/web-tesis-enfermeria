import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Teoria from '../views/Teoria.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/teoria', name: 'Teoria', component: Teoria }
  // Más adelante agregaremos las rutas para los apartados 3 y 4
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router