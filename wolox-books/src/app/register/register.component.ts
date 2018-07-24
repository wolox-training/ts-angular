import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  addPost(post) {
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
    this.password = post.password;
  }

}
