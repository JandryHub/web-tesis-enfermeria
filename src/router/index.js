import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Teoria from '../views/Teoria.vue'
import Trivia from '../views/Trivia.vue' // Importamos la trivia

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/teoria', name: 'Teoria', component: Teoria },
  { path: '/trivia', name: 'Trivia', component: Trivia } // Registramos la ruta
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router