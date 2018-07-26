import {AbstractControl} from '@angular/forms';

export class ConfirmPassword {
  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let confirmPassword = AC.get('confirm_password').value;
    if(password != confirmPassword) {
      AC.get('confirm_password').setErrors({ MatchPassword: true });
    } else {
      AC.get('confirm_password').updateValueAndValidity({ onlySelf: true, emitEvent: false });
      return null;
    }
  }
}
