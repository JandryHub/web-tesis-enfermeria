import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Teoria from '../views/Teoria.vue'
import Trivia from '../views/Trivia.vue'
import Referencias from '../views/Referencias.vue' // <-- AQUÍ ES DONDE VA

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/teoria', name: 'Teoria', component: Teoria },
  { path: '/trivia', name: 'Trivia', component: Trivia },
  { path: '/referencias', name: 'Referencias', component: Referencias } // <-- Y AQUÍ SE REGISTRA
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router