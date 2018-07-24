import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from './user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  fieldRequiredAlert: string = "This field is required.";

  private user: User = new User();

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    this.user.firstName = post.firstName;
    this.user.lastName = post.lastName;
    this.user.email = post.email;
    this.user.password = post.password;
  }
}
