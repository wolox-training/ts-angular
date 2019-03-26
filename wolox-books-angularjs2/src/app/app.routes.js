angular.module('app').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('centered.dashboard');
    });

    // Now set up the states
    $stateProvider
      .state('centered', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/centered/centered.html'
          }
        }
      })
      .state('centered.dashboard', {
        url: '/dashboard',
        views: {
          content: {
            templateUrl: '../app/components/centered/dashboard/dashboard.component.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      })
      .state('centered.book-detail', {
        url: '/book-detail/{bookId}',
        views: {
          content: {
            templateUrl: '../app/components/centered/book-detail/book-detail.component.html',
            controller: 'BookDetailController',
            controllerAs: 'bookDetailCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
