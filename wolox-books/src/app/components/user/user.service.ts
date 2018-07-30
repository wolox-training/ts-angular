import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  private header = { headers: new HttpHeaders().set('Content-type', 'application/json') };

  constructor(private http: HttpClient) { }

  createUser(user) {
    return this.http.post(`${this.ROOT_URL}/users`, user, this.header);
  }

  public loginUser(user) {
    return this.http.post(`${this.ROOT_URL}/users/sessions`, user, this.header)
}
