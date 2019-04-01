angular.module('app').service('booksService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {
    const authHeader = { headers: { Authorization: `Bearer ${localStorageService.get('accessToken')}`}};

    this.getBooks = () => {
      return $http.get(`${configuration.apiUrl}/books`, authHeader);
    }

    this.getBook = id => {
      return $http.get(`${configuration.apiUrl}/books/${id}`, authHeader);
    }
  }
]);
