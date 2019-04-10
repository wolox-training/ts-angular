angular.module('app').controller('SignUpController', ['$scope', '$state', 'userService',
  function ($scope, $state, userService) {
    this.submit = () => {
      if ($scope.userForm.$valid && $scope.user && $scope.user.password === $scope.user.confirmPassword) {
        userService.signUp({ user: $scope.user }).then(res => {
          $state.transitionTo('centered.login');
        });
      }
    }
  }
]);
