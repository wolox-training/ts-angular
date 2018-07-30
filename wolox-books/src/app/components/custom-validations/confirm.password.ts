import {AbstractControl} from '@angular/forms';

export class ConfirmPassword {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirmPassword').value;
    if(password != confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      AC.get('confirmPassword').updateValueAndValidity({ onlySelf: true, emitEvent: false });
      return null;
    }
  }
}
