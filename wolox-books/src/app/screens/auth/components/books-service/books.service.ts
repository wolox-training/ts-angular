import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../../components/local-storage/local-storage.service';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  public getBooks(id = ""): Observable<any> {
    return this.http.get(`${environment.apiUrl}/books/${id}`);
  }
}
