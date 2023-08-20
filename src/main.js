/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { createApp } from 'vue' // Composables
import App from './App.vue' // Components
import { registerPlugins } from '@/plugins'// Plugins
import router from './router/router.js' // Importa el router

const app = createApp(App)

registerPlugins(app)

app.use(router); // Usa el router
app.mount('#app')



