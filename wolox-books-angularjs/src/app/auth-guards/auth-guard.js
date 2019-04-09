const shouldAuth = path => {
  return (path !== 'sign-up' && path !== 'login')
}

angular.module('app').run(['$rootScope', '$state', 'userService', function($rootScope, $state, userService) {
    $rootScope.$on('$locationChangeStart', function(event, toState) {
      let path = toState.slice(22);
      if (shouldAuth(path) && !userService.isLoggedIn()) {
        event.preventDefault();
        $state.go('centered.login');
        return;
      }

      if (!shouldAuth(path) && userService.isLoggedIn()) {
        event.preventDefault();
        $state.go('centered.dashboard');
      }
    });
}])
