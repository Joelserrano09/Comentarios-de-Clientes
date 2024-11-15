<template>
  <div>
      <h1>Comentarios de Clientes</h1>
      <div v-if="getComentarios.length">
          <ul>
              <li v-for="comentario in getComentarios" :key="comentario.id">
                  <h2>{{ comentario.title }}</h2>
                  <p>{{ comentario.description }}</p>
                  <strong>Satisfacción: {{ comentario.satisfaction }}</strong>
              </li>
          </ul>
      </div>
      <div v-else>
          <p>No hay comentarios disponibles.</p>
      </div>
  </div>    
</template>

<script setup>
// Importa el store configurado para los comentarios
import { useComentariosStore } from "~/stores/comentarios";

// Instancia el store
const comentariosStore = useComentariosStore();
const { getComentarios } = comentariosStore;

// Llama a `fetchComentarios` para cargar los datos
await comentariosStore.fetchComentarios();
</script>
