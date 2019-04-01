angular.module('app').controller('DashboardController', [ 'booksService',
  function (booksService) {

    booksService.getBooks().then(res => {
      this.books = res.data;
    });

    this.criterias = [
      { name: 'Nombre', code: 'title' },
      { name: 'Autor', code: 'author' }
    ];
  }
]);
