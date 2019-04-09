angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      BookDetail: {
        return: '< Volver',
        rent: 'Alquilar',
        suggestions: 'Sugerencias',
        comments: 'Comentarios',
        addComment: 'Agregar un comentario',
        send: 'Enviar',
        wishlist: 'Wishlist',
        unavailable: 'No se encuentra disponible',
        returnBefore: 'Devolver antes de',
        msgError: 'El mensaje debe tener entre 1 y 255 caracteres'
      }
    });
  }
]);
