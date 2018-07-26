import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/users';

  constructor(private http: HttpClient) { }

  createUser(user){
    this.http.post(this.ROOT_URL, user).subscribe(resp => { console.log(resp) });
  }
}
