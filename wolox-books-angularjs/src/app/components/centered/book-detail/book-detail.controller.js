angular.module('app').controller('BookDetailController', ['$scope', '$stateParams', 'booksService', 'userService', 'localStorageService',
  function ($scope, $stateParams, booksService, userService, localStorageService) {
    this.userId = localStorageService.get('userId');
    this.addingMsg = false;

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

    booksService.getComments($stateParams.bookId).then(res => {
      this.comments = res.data;
    })

    this.rent = () => {
      if (this.bookState !== 'AVAILABLE') return;
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
      this.bookState = 'USER_RENTED';
      userService.rentBook(rentObj).then(res => {
      }).catch(err => {
        this.bookState = 'AVAILABLE';
      })
    }

    this.addComment = () => {
      if (!$scope.comment || $scope.comment.length > 255) return;
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
  }
]);
