angular.module('app').controller('ProfileController', ['userService', '$stateParams',
  function (userService, $stateParams) {
    userService.getInfo($stateParams.userId).then(res => {
      this.userInfo = res.data;
    })

    userService.getUserRents($stateParams.userId).then(res => {
      this.rents = res.data;
    })

    userService.getUserWishes($stateParams.userId).then(res => {
      this.wishes = res.data;
    })

    userService.getUserComments($stateParams.userId).then(res => {
      this.comments = res.data;
      console.log(this.comments);
    })
  }
]);
