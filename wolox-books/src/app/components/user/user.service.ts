import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  public createUser(user): Observable<Response> {
    const CreateUserJson = this.buildCreateJson(user);
    return this.http.post(`${this.ROOT_URL}/users`, CreateUserJson);
  }

  private buildCreateJson(user) {
    this.replaceJsonKey(user['user'], 'lastName', 'last_name');
    this.replaceJsonKey(user['user'], 'firstName','first_name');
    this.replaceJsonKey(user['user'], 'confirmPassword','confirm_password');
    return user;
  }

  private replaceJsonKey(json, a, b) {
    json[b] = json[a];
    delete json[a];
  }
}
