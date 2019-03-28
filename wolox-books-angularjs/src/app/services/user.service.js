angular.module('app').service('userService', ['$http', 'configuration',
  function($http, configuration) {
    const signUpJson = {
      user: {
        email: 'test@test.test',
        password: '12345678a',
        password_confirmation: '12345678a',
        first_name: 'a',
        last_name: 'a',
        locale: "en"
      }
    }

    const loginJson = {
      session: {
        email: 'test@test.test',
        password: '12345678a'
      }
    }

    this.login = () => {
      return $http.post(`${configuration.apiUrl}/users/sessions`, loginJson);
    }

    this.signUp = () => {
      this.signUp = () => {
        return $http.post(`${configuration.apiUrl}/users`, signUpJson);
      }
    }
  }
]);