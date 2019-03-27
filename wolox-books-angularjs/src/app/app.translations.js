angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.translations('es', {});
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
