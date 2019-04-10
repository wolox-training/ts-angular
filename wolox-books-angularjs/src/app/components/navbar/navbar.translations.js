angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      Navbar: {
        logout: 'Cerrar sesión',
        profile: 'Perfil',
        notificationTitle: 'Se encuentra disponible el libro'
      }
    });
  }
]);
