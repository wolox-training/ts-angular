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
        send: 'Enviar'
      }
    });
  }
]);
