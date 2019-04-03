angular.module('app').controller('LoginController', [ 'userService', '$scope', 'localStorageService', '$state',
  function (userService, $scope, localStorageService, $state) {
    this.submit = () => {
      if ($scope.userForm.$valid) {
        userService.login({ session: $scope.user }).then(res => {
          localStorageService.set('accessToken', res.data.access_token);
          userService.getUserInfo().then(res => {
            localStorageService.set('userId', res.data.id);
            $state.transitionTo('centered.dashboard');
          })
        });
      }
    }
  }
]);
