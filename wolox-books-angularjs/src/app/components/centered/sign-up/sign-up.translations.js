angular.module('app').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      signUp: {
        signUp: 'Registrarse',
        firstName: 'Nombre',
        requiredField: 'El campo es obligatorio',
        email: 'Email',
        invalidEmail: 'Ingrese un mail válido',
        password: 'Contraseña',
        invalidPassword: 'La contraseña debe tener entre 8 y 53 caracteres y una letra y un numero como mínimo',
        confirmPassword: 'Confirmar contraseña',
        invalidConfirm: 'Las contraseñas no coinciden',
        submit: 'Aceptar',
        lastName: 'Apellido'
      }
    });
  }
]);
