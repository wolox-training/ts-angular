angular.module('app').component('navbar', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: ['$state', 'localStorageService', 'userService', NavbarController]
});

function NavbarController($state, localStorageService, userService) {
  this.showMenu = false;
  this.userId = localStorageService.get('userId');

  this.toggleMenu = () => {
    this.showMenu = !this.showMenu;
  }

  this.logOut = () => {
    localStorageService.remove('accessToken');
    $state.transitionTo('centered.login');
  }

  userService.getNotifications().then(res => {
    this.notifications = res.data;
    this.notificationsCounter = res.data.length;
  })
}
