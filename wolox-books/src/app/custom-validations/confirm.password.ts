import {AbstractControl} from '@angular/forms';

export class ConfirmPassword {
  static MatchPassword(AC: AbstractControl) {
     let password = AC.get('password').value;
     let confirmPassword = AC.get('confirmPassword').value;
      if(password != confirmPassword) {
          return {MatchPassword: true};
      } else {
          return null
      }
    }
}
