import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../components/user/user';
import { ConfirmPassword } from '../../components/custom-validations/confirm.password'
import { UserService } from '../../components/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  const fieldRequiredAlert: string = "This field is required.";

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null, Validators.required],
      'locale': ["en"]
    },
    {
       validator: ConfirmPassword.MatchPassword
    })
  }

  registerUser() {
    this.userService.createUser({ user: this.registerForm.value })
    .subscribe(resp => { console.log('success') });
  }
}
