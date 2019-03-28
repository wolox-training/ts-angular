angular.module('app').controller('SignUpController', ['$scope', '$state', 'userService',
  function ($scope, $state, userService) {
    this.submit = () => {
      // userService.signUp();
      if ($scope.userForm.$valid && $scope.user && $scope.user.password === $scope.user.confirmPassword) {
        // userService.signUp();
        console.log($scope.userForm);
        $state.transitionTo('centered.login');
      }
    }
  }
]);
