angular.module('app-bootstrap').controller('BookDetailController', [
  function () {
    this.book = {
      id: 1,
      author: 'Dr. Marilie Greenholt',
      title: 'Consider Phlebas',
      genre: 'Tall tale',
      publisher: 'Macmillan Publishers',
      year: '1956',
      image_url: null,
      // image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
      actual_rent: {
          id: 12,
          from: '2017-01-02',
          to: '2017-01-05',
          book_id: 1,
          user_id: 1,
          returned_at: null,
      }
    };
  }
]);
