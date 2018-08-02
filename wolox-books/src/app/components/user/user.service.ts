import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  public createUser(user): Observable<Response> {
    const CreateUserJson = this.buildCreateJson(user);
    return this.http.post(`${environment.apiUrl}/users`, CreateUserJson);
  }

  public loginUser(user): Observable<Response> {
    return this.http.post(`${environment.apiUrl}/users/sessions`, user)
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

  public loggedIn(){
    return this.localStorage.getValue('accessToken');
  }
}
