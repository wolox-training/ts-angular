import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { ConfirmPassword } from '../custom-validations/confirm.password'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  fieldRequiredAlert: string = "This field is required.";

  private user: any;

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': ['', Validators.required]
    },
    {
       validator: ConfirmPassword.MatchPassword
    })
  }

  ngOnInit() {
  }

  addPost(post) {
    this.user = new UserComponent(post.firstName, post.lastName, post.email, post.password, post.confirmPassword);
    console.log(JSON.stringify({user: this.user}));
  }
}
