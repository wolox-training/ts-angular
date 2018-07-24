import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  constructor(private firstName: string, private lastName: string, private email: string, private password: string, private confirmPassword: string) {
    this.firstName: = firstName;
    this.lastName: = lastName;
    this.email: = email;
    this.password: = password;
    this.confirmPassword: = confirmPassword;
    this.locale = "en";
  }

  ngOnInit() {
  }

}
