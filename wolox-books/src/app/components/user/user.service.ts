import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //readonly ROOT_URL = 'https://wbooksapi.docs.apiary.io/#reference/user/create';
  //readonly ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';
  //readonly ROOT_URL = 'http://polls.apiblueprint.org/api/v1/users';
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/#reference/user/collection/create'
  newPost: Observable<any>;

  constructor(private http: HttpClient) { }

  createUser(user: any){
    let response = this.http.post(this.ROOT_URL, { user }).subscribe(resp => {console.log(resp);});;
  }
}
