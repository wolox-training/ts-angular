import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../components/user/user';
import { ConfirmPassword } from '../../components/custom-validations/confirm.password'
import { UserService } from '../../components/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  const fieldRequiredAlert: string = "This field is required.";

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm_password': [null, Validators.required],
      'locale': ["en"]
    },
    {
       validator: ConfirmPassword.MatchPassword
    })
  }

  registerUser() {
    const userJson = JSON.stringify({ user: this.registerForm.value });
    this.userService.createUser(userJson)
    .subscribe(
      resp => {
        console.log('success');
        goTo('login');
      },
      err => { }
    );
  }

  goTo(route: string){
      this.router.navigate([route]);
  }
}
