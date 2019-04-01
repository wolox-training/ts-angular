angular.module('app').controller('LoginController', [ 'userService', '$scope', 'localStorageService',
  function (userService, $scope, localStorageService) {
    this.submit = () => {
      if ($scope.userForm.$valid) {
        userService.login({ session: $scope.user }).then(res => {
          localStorageService.set('access_token', res.data.access_token);
        });
      }
    }
  }
]);
