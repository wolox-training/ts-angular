angular.module('app').controller('DashboardController', [ 'booksService',
  function (booksService) {
    this.criterias = [
      { name: 'Nombre', code: 'title' },
      { name: 'Autor', code: 'author' }
    ];

    booksService.getBooks().then(res => {
      this.books = res.data;
    });
  }
]);
