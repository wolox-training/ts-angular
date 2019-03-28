angular.module('app').controller('LoginController', [ 'userService', '$scope',
  function (userService, $scope) {
    this.submit = () => {
      if ($scope.userForm.$valid) {
        userService.login({ session: $scope.user }).then(res => {
          console.log(res.data);
        });
      }
    }
  }
]);
