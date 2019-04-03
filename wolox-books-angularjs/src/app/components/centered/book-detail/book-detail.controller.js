angular.module('app').controller('BookDetailController', ['$stateParams', 'booksService', 'userService', 'localStorageService',
  function ($stateParams, booksService, userService, localStorageService) {
    this.userId = localStorageService.get('userId')

    booksService.getBook($stateParams.bookId).then(res => {
      this.book = res.data;
    })

    booksService.getRent($stateParams.bookId).then(res => {
      if (!res.data.length) return this.bookState = 'AVAILABLE';
      if (res.data[0].user.id === this.userId) {
        this.returnDate = res.data[0].to;
        return this.bookState = 'USER_RENTED';
      }
      this.bookState = 'RENTED'
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

    this.rent = () => {
      if (this.bookState !== 'AVAILABLE') return;
      const rentObj = {
        rent: {
          user_id: this.userId,
          book_id: $stateParams.bookId,
          from: "2016-09-14",
          to: "2026-11-18",
          returned_at: null
        }
      }
      this.bookState = 'USER_RENTED';
      userService.rentBook(rentObj).then(res => {
      }).catch(err => {
        this.bookState = 'AVAILABLE';
      })
    }
  }
]);
