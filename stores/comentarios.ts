import { defineStore } from "pinia";

interface Comentario {
  id: number;
  title: string;
  satisfaction: string;
  description: string;
}

export const useComentariosStore = defineStore("comentarios", {
  state: () => ({
    comentarios: [] as Comentario[], // Define `comentarios` como un array de tipo Comentario
  }),
  getters: {
    getComentarios: (state) => state.comentarios,
  },
  actions: {
    async fetchComentarios() {
      try {
        const comentarios = await $fetch("/api/comentarios");
        this.comentarios = comentarios;
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    },
  },
});
