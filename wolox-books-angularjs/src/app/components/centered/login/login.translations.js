angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      login: {
        email: 'Email',
        login: 'Login'
      }
    });
  }
]);
