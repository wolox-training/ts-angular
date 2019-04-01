angular.module('app').controller('BookDetailController', ['$stateParams', 'booksService',
  function ($stateParams, booksService) {
    booksService.getBook($stateParams.bookId).then(res => {
      this.book = res.data;
    })

    this.comments = [
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ];
  }
]);
