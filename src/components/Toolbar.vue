<template>
  <v-card>
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon> <!-- Icono de navegacion para el cajón o drawer -->
      <v-toolbar-title>ML COMMUNITY</v-toolbar-title>      <!-- Titulo de la barra de herramientas -->
      <v-spacer></v-spacer>      <!-- Espaciador para alinear elementos a la derecha --> 
      <!-- Botón con un ícono de lupa -->
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <!-- Botón con un ícono de puntos verticales -->
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      
      <!-- Pestañas en la barra de herramientas -->
      <template v-slot:extension>
        <!-- Componente v-tabs para las pestañas -->
        <v-tabs
          v-model="tab"
          align-tabs="title"
        >
          <!-- Iterar a través de los elementos de las pestañas -->
          <v-tab
            v-for="item in items"
            :key="item"
            :value="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

     <!-- Contenido asociado a cada pestaña -->
     <v-window v-model="tab">
  
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
        <v-card flat v-if="item === 'Home'"> <!-- Muestra el contenido solo si la pestaña es 'Home' -->
          
          <router-view><Home/></router-view>
        </v-card>
        <v-card flat v-else>
          <v-card-text >Casas</v-card-text>
        </v-card>
      </v-window-item>
    </v-window>

    

  </v-card>
</template>

<script>
import Home from '@/components/Home.vue'; // Importa tu componente Home
export default {
  components: {
    Home, // Registramos el componente Home
  },
  data() {
    return {
      tab: 'Home', // Cambia la pestaña activa a Home //tambien se puede poner null al parecer
      items: [
        'Home','Events', 'Codelabs', 'Paper reading club', 'About', 'FAQ',
      ],
    };
  },
};
</script>

