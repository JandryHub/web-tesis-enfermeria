import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- Importamos el enrutador

const app = createApp(App)

app.use(router) // <-- Le decimos a la app que lo use
app.mount('#app')