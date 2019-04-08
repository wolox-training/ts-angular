angular.module('app').config([
    '$translateProvider',
    function ($translateProvider) {
  
      $translateProvider.translations('es', {
        profile: {
          read: 'leidos',
          comments: 'comentarios',
          readTitle: 'Leidos',
          wishlist: 'Wishlist',
          commentsTitle: 'Comentarios'
        }
      });
    }
  ]);
  