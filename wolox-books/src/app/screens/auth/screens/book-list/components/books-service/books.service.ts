import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  private header = { headers: new HttpHeaders().set('Content-type', 'application/json') };

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }
}
