angular.module('app').service('userService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {
    const authHeader = { headers: { Authorization: `Bearer ${localStorageService.get('accessToken')}`}};

    this.login = user => $http.post(`${configuration.apiUrl}/users/sessions`, user);

    this.signUp = user => $http.post(`${configuration.apiUrl}/users`, user);

    this.isLoggedIn = () => !!localStorageService.get('accessToken');

    this.getUserInfo = () => $http.get(`${configuration.apiUrl}/users/me`, authHeader);

    this.rentBook = rentObj => $http.post(`${configuration.apiUrl}/users/${localStorageService.get('userId')}/rents`, rentObj, authHeader);

    this.getInfo = id => $http.get(`${configuration.apiUrl}/users/${id}`, authHeader);

    this.getUserRents = id => $http.get(`${configuration.apiUrl}/users/${id}/rents`, authHeader);

    this.getUserWishes = id => $http.get(`${configuration.apiUrl}/users/${id}/wishes`, authHeader);

    this.getUserComments = id => $http.get(`${configuration.apiUrl}/users/${id}/comments`, authHeader);

    this.getNotifications = () => $http.get(`${configuration.apiUrl}/users/${localStorageService.get('userId')}/notifications`, authHeader);

    this.readNotification = id => $http.get(`${configuration.apiUrl}/users/${localStorageService.get('userId')}/notifications/${id}/read`, authHeader);
  }
]);
