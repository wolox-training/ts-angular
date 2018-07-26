import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user';
import { ConfirmPassword } from '../custom-validations/confirm.password'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  fieldRequiredAlert: string = "This field is required.";

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null, Validators.required]
    },
    {
       validator: ConfirmPassword.MatchPassword
    })
  }

  registerUser(post) {
    const user: User = {
      firstName: post.firstName,
      lastName: post.lastName,
      email: post.email,
      password: post.password,
      confirmPassword: post.confirmPassword,
      locale: "en"
    }

    console.log(JSON.stringify({ user: user }));
  }
}
