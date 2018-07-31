import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../../../../components/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  public getBooks(): Observable<Response> {
    return this.http.get(`${this.ROOT_URL}/books`);
  }
}
