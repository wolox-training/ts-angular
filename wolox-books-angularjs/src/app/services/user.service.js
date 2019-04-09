angular.module('app').service('userService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {

    this.login = user => $http.post(`${configuration.apiUrl}/users/sessions`, user);

    this.signUp = user => $http.post(`${configuration.apiUrl}/users`, user);

    this.isLoggedIn = () => !!localStorageService.get('accessToken');
  }
]);
