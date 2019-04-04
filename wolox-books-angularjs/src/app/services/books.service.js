angular.module('app').service('booksService', ['$http', 'configuration', 'localStorageService',
  function($http, configuration, localStorageService) {
    const authHeader = { headers: { Authorization: `Bearer ${localStorageService.get('accessToken')}`}};

    this.getBooks = () => {
      return $http.get(`${configuration.apiUrl}/books`, authHeader);
    }

    this.getBook = id => {
      return $http.get(`${configuration.apiUrl}/books/${id}`, authHeader);
    }

    this.getRent = id => {
      return $http.get(`${configuration.apiUrl}/books/${id}/rents`, authHeader);
    }

    this.getComments = id => {
      return $http.get(`${configuration.apiUrl}/books/${id}/comments`, authHeader);
    }

    this.addComment = comment => {
      return $http.post(`${configuration.apiUrl}/books/${comment.book_id}/comments`, comment, authHeader);
    }

    this.getSuggestions = id => {
      return $http.get(`${configuration.apiUrl}/books/${id}/suggestions`, authHeader);
    }
  }
]);
