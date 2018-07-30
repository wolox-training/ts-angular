import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../components/user/user';
import { UserService } from '../../components/user/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../components/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private localStorage: LocalStorageService) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    }
  }

  loginUser() {
    const userJson = JSON.stringify({ session: this.loginForm.value });
    this.userService.loginUser(userJson)
    .subscribe(
      resp => {
        console.log(resp['access_token']);
        this.localStorage.setValue('access_token', resp['access_token']);
        this.goTo('auth');
      },
      err => { }
    );
  }

  goTo(route: string){
      this.router.navigate([route]);
  }
}
