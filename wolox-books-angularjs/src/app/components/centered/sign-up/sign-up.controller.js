angular.module('app').controller('SignUpController', ['$scope', '$state', 'userService',
  function ($scope, $state, userService) {
    this.submit = () => {
      userService.login();
      if ($scope.userForm.$valid && $scope.user && $scope.user.password === $scope.user.confirmPassword) {
        $state.transitionTo('centered.login');
      }
    }
  }
]);
