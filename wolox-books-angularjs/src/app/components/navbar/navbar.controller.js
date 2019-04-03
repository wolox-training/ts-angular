angular.module('app').component('navbar', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: function NavbarController() {
    this.showMenu = false;

    this.toggleMenu = () => {
      this.showMenu = !this.showMenu;
    }
  }
});
