angular.
  module('booksDashboard').
  component('booksDashboard', {
    templateUrl: 'components/books-dashboard/books-dashboard.template.html',
    controller: function DashboardController() {
      this.books = [
        {
          name: 'Book 1'
        }, {
          name: 'Book 2'
        }, {
          name: 'Book 3'
        }
      ];
    }
  });
