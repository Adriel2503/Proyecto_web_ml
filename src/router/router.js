//Documentacion

/*La carpeta "router" en un proyecto Vue generalmente se utiliza para almacenar
los archivos relacionados con la configuración y la gestión de rutas utilizando
Vue Router, que es una biblioteca de enrutamiento oficial para aplicaciones Vue
de una sola página (SPA).*/

/*El archivo index.js es un archivo JavaScript en el que
se configuran las rutas y la gestión de la navegación*/

import { createRouter, createWebHistory } from 'vue-router';
// Importa tus componentes
import Home from '@/components/Home.vue'
import Events from '@/components/Events.vue'
import Codelabs from '@/components/Codelabs.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/events', component: Events },
  { path: '/codelabs', component: Codelabs },
  // ... agrega otras rutas para el resto de las pestañas
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;