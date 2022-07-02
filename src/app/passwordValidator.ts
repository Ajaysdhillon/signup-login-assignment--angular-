import { AbstractControl } from '@angular/forms';
export class ConfirmPasswordValidator {
  static MatchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmpassword = control.get('confirmpassword').value;
    if (password !== confirmpassword) {
      control.get('confirmpassword').setErrors({ Confirmpassword: true });
    } else {
      return null;
    }
  }
}
