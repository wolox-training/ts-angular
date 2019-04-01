angular.module('app').run(['$rootScope', '$state', 'userService', function($rootScope, $state, userService) {

    $rootScope.$on('$locationChangeStart', function(event, toState) {
        let path = toState.substring(22);
        if (path !== 'sign-up' && path !== 'login' && !userService.isLoggedIn()) {
          event.preventDefault();
          $state.go('centered.login');
        }
    });
}])