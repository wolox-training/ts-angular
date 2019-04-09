angular.module('app').controller('BookDetailController', ['$stateParams', 'booksService', 'userService', 'localStorageService', 'constants',
  function ($stateParams, booksService, userService, localStorageService, constants) {
    this.userId = localStorageService.get('userId');
    this.RENTED = constants.RENTED;
    this.USER_RENTED = constants.USER_RENTED;
    this.AVAILABLE = constants.AVAILABLE;

    booksService.getBook($stateParams.bookId).then(res => {
      this.book = res.data;
    })

    booksService.getRent($stateParams.bookId).then(res => {
      if (!res.data.length) return this.bookState = this.AVAILABLE;
      if (res.data[0].user.id === this.userId) {
        this.returnDate = res.data[0].to;
        return this.bookState = this.USER_RENTED;
      }
      this.bookState = this.RENTED;
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
      if (this.bookState !== this.AVAILABLE) return;
      let returnDate = new Date();
      returnDate.setMonth(returnDate.getMonth() + 1);
      const rentObj = {
        rent: {
          user_id: this.userId,
          book_id: $stateParams.bookId,
          from: new Date(),
          to: returnDate,
          returned_at: null
        }
      }

      userService.rentBook(rentObj).then(res => {
        this.bookState = this.USER_RENTED;
      })
    }
  }
]);
