import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  public intercept(req, next) {
    let localStorage = this.injector.get(LocalStorageService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getValue('accessToken')}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
