angular.module('app').service('userService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {

    this.login = user => {
      return $http.post(`${configuration.apiUrl}/users/sessions`, user);
    }

    this.signUp = user => {
      return $http.post(`${configuration.apiUrl}/users`, user);
    }

    this.isLoggedIn = () => {
      return !!localStorageService.get('access_token');
    }
  }
]);
