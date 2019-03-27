angular.module('app').controller('SignUpController', ['$scope',
  function ($scope) {
    this.submit = () => {
      if ($scope.userForm.$valid && $scope.user && $scope.user.password == $scope.user.confirmPassword) {
				alert('SUCCESS');
			}
    }
  }
]);
