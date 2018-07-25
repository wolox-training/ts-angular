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
  fieldRequiredAlert: string = "This field is required.";

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
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

  ngOnInit() {
  }

  addPost(post) {
    let user = new UserComponent(post.firstName, post.lastName, post.email, post.password, post.confirmPassword);
    console.log(JSON.stringify({user: user}));
  }
}
