angular.module('app').controller('ProfileController', ['$scope', 'userService',
  function ($scope, userService) {
    userService.getInfo(1).then(res => {
      console.log('user info:', res);
    })

    userService.getUserRents(1).then(res => {
      console.log('user rents:', res);
    })

    userService.getUserWishes(1).then(res => {
      console.log('user wishes:', res);
    })
  }
]);
