angular.module('app').config([
  'localStorageServiceProvider',
  function (localStorageServiceProvider) {

    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('app-/* @echo environment */'));
  }
]);
