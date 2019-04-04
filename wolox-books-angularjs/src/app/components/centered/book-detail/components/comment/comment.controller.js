angular.module('app').component('comment', {
  templateUrl: 'app/components/centered/book-detail/components/comment/comment.html',
  bindings: {
    comment: '<',
    showBookTitle: '<'
  }
});
