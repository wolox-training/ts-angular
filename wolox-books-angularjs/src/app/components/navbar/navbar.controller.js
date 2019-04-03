angular.module('app').component('navbar', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: ['$state', 'localStorageService', NavbarController]
});

function NavbarController($state, localStorageService) {
  this.showMenu = false;

  this.toggleMenu = () => {
    this.showMenu = !this.showMenu;
  }

  this.goToDashboard = () => {
    $state.transitionTo('centered.dashboard');
  }

  this.logOut = () => {
    localStorageService.remove('accessToken');
    $state.transitionTo('centered.login');
  }
}
