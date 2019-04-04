angular.module('app').service('userService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {
    const authHeader = { headers: { Authorization: `Bearer ${localStorageService.get('accessToken')}`}};

    this.login = user => {
      return $http.post(`${configuration.apiUrl}/users/sessions`, user);
    }

    this.signUp = user => {
      return $http.post(`${configuration.apiUrl}/users`, user);
    }

    this.isLoggedIn = () => {
      return !!localStorageService.get('accessToken');
    }

    this.getUserInfo = () => {
      return $http.get(`${configuration.apiUrl}/users/me`, authHeader);
    }

    this.rentBook = rentObj => {
      return $http.post(`${configuration.apiUrl}/users/${localStorageService.get('userId')}/rents`, rentObj, authHeader);
    }

    this.getInfo = id => {
      return $http.get(`${configuration.apiUrl}/users/${id}`, authHeader);
    }

    this.getUserRents = id => {
      return $http.get(`${configuration.apiUrl}/users/${id}/rents`, authHeader);
    }

    this.getUserWishes = id => {
      return $http.get(`${configuration.apiUrl}/users/${id}/wishes`, authHeader);
    }

    this.getUserComments = id => {
      return $http.get(`${configuration.apiUrl}/users/${id}/comments`, authHeader);
    }
  }
]);
