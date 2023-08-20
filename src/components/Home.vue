<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4" v-for="(item, index) in communityItems" :key="index">
        <v-card class="community-card">
          <v-avatar class="oval-avatar">
            <v-img :src="item.image" contain />
          </v-avatar>
          <v-card-text>
            <h2 class="community-title">{{ item.title }}</h2>
            <p class="community-description">{{ item.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" :href="item.link">Unirse</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      communityItems: [
        {
          title: "Grupo de Aprendizaje Automático",
          description: "Únete a nuestro grupo dedicado a discutir y aprender sobre los últimos avances en Aprendizaje Automático.",
          image: "url_de_la_imagen1.jpg",
          link: "/grupo_ml"
        },
        {
          title: "Club de Proyectos de Inteligencia Artificial",
          description: "Forma parte de nuestro club donde desarrollamos proyectos emocionantes relacionados con IA y compartimos conocimientos.",
          image: "url_de_la_imagen2.jpg",
          link: "/club_ia"
        },
        // Agrega más elementos de la comunidad aquí
        {
          title: "Nuestra Visión",
          description: "Trabajamos para crear un espacio en el que los amantes del aprendizaje automático puedan conectarse y crecer juntos.",
          image: "url_de_la_imagen3.jpg",
          link: "/vision"
        },
        {
          title: "Nuestra Misión",
          description: "Nuestra misión es proporcionar recursos, eventos y oportunidades para promover el conocimiento en la comunidad de ML.",
          image: "url_de_la_imagen4.jpg",
          link: "/mision"
        },
      ]
    };
  }
};
</script>

<style scoped>
.community-card {
  text-align: center;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.oval-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}

.community-title {
  margin-top: 15px;
  font-size: 1.25rem;
}

.community-description {
  margin-top: 10px;
  font-size: 1rem;
}

.v-btn {
  margin-top: 10px;
}
</style>
