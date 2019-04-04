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

    booksService.getComments($stateParams.bookId).then(res => {
      this.comments = [];
      for (let e in res.data) {
        this.comments.push({
          name: res.data[e].user.first_name,
          date: res.data[e].created_at.substring(0, 10),
          description: res.data[e].content,
          userImage: res.data[e].user.image_url
        })
        if (e === '3') break;
      }
    })

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

    this.addComment = () => {

    }
  }
]);
