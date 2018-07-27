import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  public createUser(user) {
    console.log(user);
    return this.http.post(this.ROOT_URL + "/users", user, { headers: new HttpHeaders().set('Content-type', 'application/json') })
  }
}
