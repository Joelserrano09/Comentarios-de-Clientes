export default defineEventHandler(async (event) => {
    const comentarios = [
      { id: 1, title: 'Comentario 1', satisfaction: 'Muy Satisfecho', description: 'Excelente servicio y atención.' },
      { id: 2, title: 'Comentario 2', satisfaction: 'Satisfecho', description: 'El producto cumplió mis expectativas.' },
      { id: 3, title: 'Comentario 3', satisfaction: 'Insatisfecho', description: 'La entrega tardó demasiado.' }
    ];
  
    return comentarios;
  });
  