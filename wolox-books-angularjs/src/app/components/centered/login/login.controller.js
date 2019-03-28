angular.module('app').controller('LoginController', [ 'userService',
  function (userService) {
    this.submit = () => {
      userService.login();
    }
  }
]);
