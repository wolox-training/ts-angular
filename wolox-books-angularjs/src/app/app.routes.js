angular.module('app').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('centered.login');
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
            templateUrl: '../app/components/centered/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
      })
      .state('centered.book-detail', {
        url: '/book-detail/{bookId}',
        views: {
          content: {
            templateUrl: '../app/components/centered/book-detail/book-detail.html',
            controller: 'BookDetailController',
            controllerAs: 'bookDetailCtrl'
          }
        }
      })
      .state('centered.sign-up', {
        url: '/sign-up',
        views: {
          content: {
            templateUrl: '../app/components/centered/sign-up/sign-up.html',
            controller: 'SignUpController',
            controllerAs: 'signUpCtrl'
          }
        }
      })
      .state('centered.login', {
        url: '/login',
        views: {
          content: {
            templateUrl: '../app/components/centered/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
          }
        }
      })
      .state('centered.profile', {
        url: '/profile/{userId}',
        views: {
          content: {
            templateUrl: '../app/components/centered/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
