angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.translations('es', {
      requiredField: 'Campo obligatorio'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
