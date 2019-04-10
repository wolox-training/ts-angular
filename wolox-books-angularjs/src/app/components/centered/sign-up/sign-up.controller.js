angular.module('app').controller('SignUpController', ['$scope', '$state',
  function ($scope, $state) {
    this.submit = () => {
      if ($scope.userForm.$valid && $scope.user && $scope.user.password === $scope.user.confirmPassword) {
        $state.transitionTo('centered.login');
      }
    }
  }
]);
