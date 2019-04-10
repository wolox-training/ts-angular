angular.module('app').component('navbar', {
  templateUrl: 'app/components/navbar/navbar.html',
  controller: ['$state', 'localStorageService', 'userService', NavbarController]
});

function NavbarController($state, localStorageService, userService) {
  this.showMenu = false;
  this.userId = localStorageService.get('userId');
  this.showingNotifications = false;

  this.toggleMenu = () => {
    this.showMenu = !this.showMenu;
  }

  this.logOut = () => {
    localStorageService.remove('accessToken');
    $state.transitionTo('centered.login');
  }

  userService.getNotifications().then(res => {
    // this.notifications = res.data;
    // this.notificationsCounter = res.data.length;

    this.notifications = [
      {
        "id": 1,
        "reason": "book_rent",
        "from": {
          "id": 1,
          "first_name": "Quinn",
          "last_name": "Thiel",
          "email": "esteban.pintos+1@wolox.com.ar"
        },
        "body": "Content",
        "action_id": 1,
        "action_type": "Rent",
        "read": false,
        "created_at": "2016-12-28T18:15:19.471Z"
      },
      {
        "id": 2,
        "reason": "book_rent",
        "from": {
          "id": 1,
          "first_name": "Quinn",
          "last_name": "Thiel",
          "email": "esteban.pintos+1@wolox.com.ar"
        },
        "body": "Content",
        "action_id": 1,
        "action_type": "Comment",
        "read": true,
        "created_at": "2016-12-28T18:15:19.482Z"
      }
    ];
    this.notificationsCounter = 2;
  })

  this.toggeNotifications = () => {
    if (!this.notificationsCounter) return;
    this.showingNotifications = !this.showingNotifications;
  }
}
