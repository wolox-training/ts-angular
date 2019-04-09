angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      Navbar: {
        logout: 'Cerrar sesión',
        profile: 'Perfil'
      }
    });
  }
]);
