angular.module('app').controller('BookDetailController', ['$scope','$stateParams', 'booksService', 'userService', 'localStorageService', 'constants',
  function ($scope, $stateParams, booksService, userService, localStorageService, constants) {
    this.userId = localStorageService.get('userId');
    this.RENTED = constants.RENTED;
    this.USER_RENTED = constants.USER_RENTED;
    this.AVAILABLE = constants.AVAILABLE;
    this.addingMsg = false;
    this.showError = false;

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

    booksService.getComments($stateParams.bookId).then(res => {
      this.comments = res.data;
    })

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

    this.addComment = () => {
      if (!$scope.comment || $scope.comment.length > 255) return this.showError = true;
      const commentObj = {
        user_id: this.userId,
        book_id: $stateParams.bookId,
        content: $scope.comment,
        created_at: new Date()
      };
      this.addingMsg = true;
      booksService.addComment(commentObj).then(res => {
        this.addingMsg = false;
        $scope.comment = '';
      }).catch(err => {
        this.addingMsg = false;
      })
    }

    booksService.getSuggestions($stateParams.bookId).then(res => {
      this.suggestedBooks = res.data;
    })
  }
]);
