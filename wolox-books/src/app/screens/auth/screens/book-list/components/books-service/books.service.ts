import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../../../../components/local-storage/local-storage.service';
import { environment } from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  public getBooks(): Observable<Response> {
    return this.http.get(`${environment.apiUrl}/books`);
  }
}
