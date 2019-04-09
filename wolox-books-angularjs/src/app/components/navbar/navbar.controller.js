angular.module('app').component('navbar', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: ['$state', 'localStorageService', NavbarController]
});

function NavbarController($state, localStorageService) {
  this.showMenu = false;
  this.userId = localStorageService.get('userId');

  this.toggleMenu = () => {
    this.showMenu = !this.showMenu;
  }

  this.logOut = () => {
    localStorageService.remove('accessToken');
    $state.transitionTo('centered.login');
  }
}
