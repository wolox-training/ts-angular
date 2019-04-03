angular.module('app').service('userService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {
    const authHeader = { headers: { Authorization: `Bearer ${localStorageService.get('accessToken')}`}};

    const bookExample = {
      rent: {
        user_id: 450,
        book_id: 11,
        from: "2016-09-14",
        to: "2026-11-18",
        returned_at: null
      }
    }
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

    this.rentBook = id => {
      return $http.post(`${configuration.apiUrl}/users/${localStorageService.get('userId')}/rents`, bookExample, authHeader);
    }
  }
]);
