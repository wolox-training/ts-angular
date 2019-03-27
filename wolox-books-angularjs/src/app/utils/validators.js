angular.module('app').directive('overwriteEmail', function() {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
  console.log('entro aca');
  return {
    require: '?ngModel',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and AngularJS has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default AngularJS email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});

angular.module('app').directive('passwordVerify', function() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elem, attrs, ngModel) {
      ngModel.$validators.myPwdInvalid = function(modelValue, viewValue) {
        return viewValue === scope.$eval(attrs.passwordVerify);
      };
    }
  };
});