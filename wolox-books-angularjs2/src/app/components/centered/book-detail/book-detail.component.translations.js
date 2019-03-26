angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      Detail: {
        return: 'Volver'
      }
    });
  }
]);
