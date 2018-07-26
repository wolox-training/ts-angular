import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../components/user/user';
import { ConfirmPassword } from '../../components/custom-validations/confirm.password'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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

  addPost(post) {
    let user: User = {
      firstName: post.firstName,
      lastName: post.lastName,
      email: post.email,
      password: post.password,
      confirmPassword: post.confirmPassword
    }
    console.log(JSON.stringify({ user: user }));
  }
}
